import * as commonService from '@/services/commonServices';
import { message } from 'antd';
import { history } from 'umi';

export default {
    namespace: 'mainAppGlobal',
    state: {
        appCode: 'growth',
        title: 'mainApp',
        // 子应用列表
        subApps: [],
        // 当前挂载的子应用
        currentMountedSubApp: '',
        // 试题类型名称，code字典
        questionTypes: [
            { title: '单选题', value: 'SINGLE_CHOICE' },
            { title: '多选题', value: 'MULTIPLE_CHOICE' },
            { title: '不定项', value: 'INDEFINITE_CHOICE' },
            { title: '判断题', value: 'JUDGEMENT' },
            { title: '填空题', value: 'COMPLETION' },
            { title: '解答题', value: 'FREE_RESPONSE' },
            { title: '综合题', value: 'COMPREHENSIVE' },
        ],
        // 主观题
        subjective: ['COMPLETION', 'FREE_RESPONSE', 'COMPREHENSIVE'],
        // 客观题
        objective: ['SINGLE_CHOICE', 'MULTIPLE_CHOICE', 'INDEFINITE_CHOICE', 'JUDGEMENT'],
    },
    reducers: {
        setSubApps(state, {apps}) {
            state.subApps = apps;
        },
        setCurrentMountedSubApp(state, {currentMountedSubApp}) {
            state.currentMountedSubApp = currentMountedSubApp;
        },
    },
    effects: {
        *login({values: { userName, password, remember }}, { call, put }) {
            const { data } = yield call(commonService.login, { userName, password });
            if (data && data.Success) {
                const {UserId, Token} = data.Data;
                Cookies.set('section', 'GZ', {expires: 7, domain: document.domain});
                Cookies.set('subject', 'WL', {expires: 7, domain: document.domain});
                Cookies.set('token', Token, {expires: 7, domain: document.domain});
                Cookies.set('subjectName', '物理', {expires: 7, domain: document.domain});
                Cookies.set('schoolName', '闻道黑板测试学校', {expires: 7, domain: document.domain});
                Cookies.set('schoolId', 'c7732741-d758-425d-bb78-dc442f99a3d9', {expires: 7, domain: document.domain});
                Cookies.set('userId', UserId, {expires: 7, domain: document.domain});
                Cookies.set('userName', 'xxx', {expires: 7, domain: document.domain});
                if (remember) {
                    Cookies.set('password', password, {expires: 7, domain: document.domain});
                }
                history.replace('/');
            } else {
                message.error(data.Message || '登录失败');
            }
        },
    },
};
