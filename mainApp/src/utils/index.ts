const Utils = {
    // 工具方法
    hasBaseUserInfo: () => !!(Cookies.get('token') && Cookies.get('userId'))
};

export default Utils;
