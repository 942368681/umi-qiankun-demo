import defaultConfig from '../../config/apiConfig';
import { message } from 'antd';
import { history } from 'umi';
import qs from 'querystring';
const fetch = require('dva').fetch;
const TIMEOUT = 20000;

const timeoutFetch = (fullUrl: string, options: any) => {
	let fetchPromise = fetch(fullUrl, options)
		.then((res: any) => Promise.resolve(res))
		.catch((error: any) => {
			console.log('请求失败 ========> ', fullUrl, error, JSON.stringify(error));
			return Promise.resolve({
				data: null,
				status: 'disconnect',
			});
		});
	let timeoutPromise = new Promise((resolve, reject) => {
		setTimeout(
			() =>
				resolve({
					data: null,
					status: 'timeout',
				}),
			TIMEOUT,
		);
	});
	let disconnectPromise = new Promise((resolve, reject) => {
		if (!navigator.onLine) {
			resolve({
				data: null,
				status: 'disconnect',
			});
		}
	});
	return Promise.race([fetchPromise, timeoutPromise, disconnectPromise]);
};

function getBaseUrl(apiType: string) {
	const type = apiType || 'gateway';
	return defaultConfig[type];
}

function getAppToken(apptoken: string, apiType: string) {
	let res = '';
	if (apptoken) {
		res = apptoken;
	} else {
		res = apiType === 'userCenter' ? 'RkNSQ2xpZW50LUUtV2luZG93cw==' : 'UldBUEk=';
	}
	return res;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request(url: string, options: any) {
	const { apiType, method, useOwnUrl, headers = {}, errorMsg, apptoken } = options;
	const token = Cookies.get('token') ? `Bearer ${Cookies.get('token')}` : '';
	// const token = '123';
	console.log(`token ======> ${token}`);
	let fullUrl = useOwnUrl ? url : getBaseUrl(apiType) + url;
	const option = {
		...options,
		headers: {
			Authorization: token,
			'Content-Type': 'application/json; charset=UTF-8',
			apptoken: getAppToken(apptoken, apiType),
			...headers,
		},
	};

	if (method !== 'GET' && !option.headers['Content-Type'].includes('multipart/form-data')) {
		option.body = JSON.stringify(option.body);
	}

	if (method !== 'POST' && option.params) {
		fullUrl = `${fullUrl}${fullUrl.indexOf('?') !== -1 ? '&' : '?'}${qs.stringify(
			option.params,
		)}`;
	}

	if (option.headers['Content-Type'].includes('multipart/form-data')) {
		delete option.headers;
	}

	fullUrl = `${fullUrl}${fullUrl.indexOf('?') !== -1 ? '&' : '?'}version=1.0`;

	const response = await timeoutFetch(fullUrl, option);

	try {
		let data;
		if (response.status < 200 || response.status > 300) {
			let msg = errorMsg || '服务器异常，请稍后再试';
			switch (response.status) {
				case 401:
					msg = '登录过期，请重新登录';
					history.replace('/login');
					break;
				case 700:
					data = await response.json();
					msg = data.message;
					break;
				default:
					break;
			}
			message.error(msg);
			response.data = null;
			return response;
		}
		if (response.status === 'timeout') {
			message.error('请求超时，请稍后再试');
			return response;
		}
		if (response.status === 'disconnect') {
			message.error('网络已断开，请检查网络');
			return response;
		}
		if (option.apiType === 'wopi') {
			data = await response.text();
		} else {
			data = await response.json();
		}
		const ret = {
			data,
			headers: {},
		} as any;

		if (response.headers.get('x-total-count')) {
			ret.headers['x-total-count'] = response.headers.get('x-total-count');
		}
		return ret;
	} catch (error) {
		console.log(`${url} 该接口无返回值`);
	}
}
