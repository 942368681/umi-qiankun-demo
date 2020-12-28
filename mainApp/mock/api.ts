export default {
    // 获取应用列表
    'GET /api/appList': {
        list: [
            {
                // title: 'subApp1',
                name: 'subApp1',
                entry: '//192.168.200.18:8001'
            },
            {
                // title: 'subApp2',
                name: 'subApp2',
                entry: '//192.168.200.18:8002'
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