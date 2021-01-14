if (process.env.LOCAL !== 'local') {
    // 部署上线设置domain，主子应用cookie共享
    document.domain = 'eastedu.ltd';
    Cookies.set('name', 'sss', { expires: 7, domain: document.domain });
}
