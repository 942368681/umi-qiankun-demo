import React from 'react';
import { Redirect, history } from 'umi';
import Utils from '@/utils/index';

export default (props: any) => {
    if (!Utils.hasBaseUserInfo() && history.location.pathname !== '/login') {
        return <Redirect to="/login" />;
    } else {
        return <div>{props.children}</div>;
    }
}