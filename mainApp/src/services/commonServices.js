import request from '@/utils/request.ts';

// 获取反馈信息
export function login({userName, password}) {
    return request(`/uc/api/User/OpenLogin?userName=${userName}&password=${password}`, {
        method: 'GET',
        errorMsg: '登录失败'
    });
};
