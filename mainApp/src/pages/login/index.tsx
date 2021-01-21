import React from 'react';
import { connect } from 'umi';
import styles from './index.less';
import { Button, Form, Icon, Input, Checkbox } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import md5Hex from 'md5-hex';

interface IProps extends FormComponentProps {
	dispatch: Function;
	form: any;
}

class Login extends React.Component<IProps, {}> {

	handleSubmit = (e: any) => {
		const { dispatch } = this.props;
		e.preventDefault();
		this.props.form.validateFields((err: any, values: any) => {
			if (!err) {
				console.log('Received values of form: ', values);
				values.password = md5Hex(values.password);
                dispatch({
                    type: 'mainAppGlobal/login',
                    values
				});
			}
		});
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div className={styles['fz-mainapp-login-wrap']}>
				<div className={styles['login-con']}>
					<div className={styles['login-con-l']}></div>
					<div className={styles['login-con-r']}>
						<h2>泛在学校登录</h2>
						<div className={styles['login-form']}>
							<div className={styles['login-btn-group']}>
								<Button type="link">帐号密码登录</Button>
								<Button type="link">二维码登录</Button>
							</div>
							<div className={styles['login-form-con']}>
								<Form onSubmit={this.handleSubmit} className={styles['login-form-wrap']}>
									<Form.Item>
										{getFieldDecorator('userName', {
											rules: [{ required: true, message: '请输入账号！' }],
										})(
											<Input
												className={styles['login-inps']}
												prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
												placeholder="账号"
												autoComplete="off"
											/>,
										)}
									</Form.Item>
									<Form.Item>
										{getFieldDecorator('password', {
											rules: [{ required: true, message: '请输入密码！' }],
										})(
											<Input
												className={styles['login-inps']}
												prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
												type="password"
												placeholder="密码"
												autoComplete="off"
											/>,
										)}
									</Form.Item>
									<Form.Item>
										<Button type="primary" htmlType="submit" className={styles['login-form-button']}>
											登录
          								</Button>
										{getFieldDecorator('remember', {
											valuePropName: 'checked',
											initialValue: true,
										})(<Checkbox>记住密码</Checkbox>)}
									</Form.Item>
								</Form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
};


export default connect()(Form.create<IProps>({})(Login));