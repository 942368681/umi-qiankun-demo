/**
 *  修改 clientRender 参数。
    比如在微前端里动态修改渲染根节点：
 */
let isSubApp = false;
export function modifyClientRenderOpts(memo: any) {
    console.log(memo);
    return {
        ...memo,
        rootElement: isSubApp ? 'sub-root' : memo.rootElement,
    };
}

export function onRouteChange({ matchedRoutes }: any) {
    console.log(matchedRoutes)
    if (matchedRoutes.length) {
        document.title = matchedRoutes[matchedRoutes.length - 1].route.title || '';
    }
}

export function render(oldRender: Function) {
    console.log(1111111)
    oldRender();
}