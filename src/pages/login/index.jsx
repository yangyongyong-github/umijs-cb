import React, { useState } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import IconMap from 'components/common/IconMap';
import AccountLogin from './components/AccountLogin';
import ValidateCodeLogin from './components/ValidateCodeLogin';
import LogoImageUrl from 'images/logo.png';
import './style/login.scss';
import { useDispatch, useSelector } from 'umi';


const Login = ({ history }) => {
  
  const dispatch = useDispatch();
  const FormItem = Form.Item;
  const [form] = Form.useForm();

  // 判断登录类型：1账密 or 0验证码
  const [type, setType] = useState(0);
  const loading = useSelector((state) => state.loading);

  // 表单输入完成后的提交事件
  const submitUserInfo = (data) => {
    console.log('submitUserInfo : ', data);
    // 使用umi的dispatch 状态触发函数
    // params: type: login/resetPassword
    dispatch({ type: 'userLogin/login', payload: { ...data, type } });
  };

  const ComponentSelector = (props) =>
    !type ? <AccountLogin {...props} /> : <ValidateCodeLogin {...props} />;

  const loginTipText = ['使用手机号码登录', '使用账户名密码进行登录'];

  return (
    <div className="login-form-container">
      <div className="logo">
        <img src={LogoImageUrl} alt="" />
        <span>用户身份：</span>
        <span>Admin UserI UserII</span>
      </div>
      <Form form={form} onFinish={submitUserInfo}>
        {/* 选择展示当前的哪个组件：accountLogin or validateCodeLogin */}
        {ComponentSelector({ FormItem, Input, form })}

        <Row>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading.effects['userLogin/login']}
          >
            登录
          </Button>
        </Row>

        <Row>
          {/* col 栅格化布局 row:24col */}
          <Col span={6}>
            <p
              className="login-category"
              onClick={() => history.push('/login/forgetPassword')}
            >
              忘记密码？
            </p>
          </Col>
          <Col span={18}>
            <p
              className="login-category login-type"
              onClick={() => setType(!type ? 1 : 0)}
            >
              {!type ? loginTipText[0] : loginTipText[1]}
              {IconMap.arrowRight}
            </p>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

/**
 * 登录
 */
export default Login;
