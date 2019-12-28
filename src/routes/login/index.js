import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router'
import { Form, Icon, Input, Button } from 'antd';
import './index.less'
const FormItem = Form.Item
class LoginForm extends React.Component {

  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (err) {
        this.props.dispatch(routerRedux.push({
          pathname: '/dashboard'
        }))
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-container">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <h3 className="login-container-title">管理平台</h3>
          <FormItem>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form>
      </div>
    );
  }
}

export default connect(({ app, loading }) => ({ app, loading }))(Form.create()(LoginForm));
