export default {
    // 获取应用列表
    'GET /api/appList': {
        list: [
            {
                name: 'subApp1',
                // entry: '//192.168.200.18:8001'
                entry: '//localhost:8001'
                // entry: 'https://sfl1.test.eastedu.ltd/'
            },
            {
                name: 'subApp2',
                // entry: '//192.168.200.18:8002'
                entry: '//localhost:8002'
                // entry: 'https://sfl2.test.eastedu.ltd/'
            }
        ]
    },
    // 登录
    'POST /api/users/login': (req: any, res: any) => {
        res.send({
            userName: 'sfl',
            userId: '242515',
            token: '123'
        });
    },
};