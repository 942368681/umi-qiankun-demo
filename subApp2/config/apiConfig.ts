const { UMI_ENV } = process.env;

const defaultConfig = getDefaultConfig();

function getDefaultConfig() {
    let userCenter = '';
    let gateway = '';
    let fileService = '';
    let demonstrationClass = '';
    let tracker = '';
    let wopi = '';
    switch (UMI_ENV) {
        case 'dev':
            userCenter = 'http://userapi.eastedu.devp';
            gateway = 'https://gateway.devp.eastedu.ltd';
            fileService = 'https://api-file.devp.eastedu.ltd';
            demonstrationClass = 'http://192.168.200.200:8091';
            tracker = 'eastedu-develop';
            wopi = 'https://wopi.eastedu.com';
            break;
        case 'test':
            userCenter = 'http://userapi.eastedu.test';
            gateway = 'https://gateway.test.eastedu.ltd';
            fileService = 'https://api-file.test.eastedu.ltd';
            demonstrationClass = 'http://192.168.101.27:58091';
            tracker = 'eastedu-test';
            wopi = 'https://wopi.eastedu.com';
            break;
        case 'prod':
            userCenter = 'https://user-api.eastedu.com';
            gateway = 'https://gateway.eastedu.com';
            fileService = 'https://api-file.eastedu.com';
            demonstrationClass = 'http://api.res.fcr.eastedu.com';
            tracker = 'eastedu-production';
            wopi = 'https://wopi.eastedu.com';
            break;
        default:
            userCenter = 'http://userapi.eastedu.devp';
            gateway = 'https://gateway.devp.eastedu.ltd';
            fileService = 'https://api-file.devp.eastedu.ltd';
            demonstrationClass = 'http://192.168.200.200:8091';
            tracker = 'eastedu-develop';
            wopi = 'https://wopi.eastedu.com';
            break;
    }
    return {
        userCenter,
        gateway,
        fileService,
        demonstrationClass,
        tracker,
        wopi
    };
}

export default defaultConfig;
