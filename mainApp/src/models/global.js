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
    effects: {},
};
