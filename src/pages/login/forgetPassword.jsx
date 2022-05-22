import React, { useState } from 'react';
import { Button, Row, Input, Form, message } from 'antd';
import './style/login.scss';

import $http from 'api';

import ValidateCodeLogin from './components/ValidateCodeLogin';
import UpdatePassword from './components/UpdatePassword';

// [用法报错]：必须放到 函数里面，不能把 hook当作func调用，而是应该hook comp调用
// const FormItem = Form.Item; // 创建表单项
// const [form] = Form.useForm();


const forgetPassword = ({ history }) => {

  const FormItem = Form.Item;
  const [form] = Form.useForm();

  // 当前展示组件的标识：
  // 1: 忘记密码（step1）
  // 2: 重置按钮（step2）
  const [currentStep, setCurrentStep] = useState(1);

  // 提交选择框
  const submitSelect = async (data) => {
    // 校验用户输入的验证码是否正确
    currentStep === 1
      ? _checkCode(data.code)
      : _updatePassword(data.confirmPassword);
  };

  /**
   * 用户输入的验证码检测
   */
  const _checkCode = async (smCode) => {
    const { data, msg } = await $http.checkedCode({ smCode });
    if (data) {
      setCurrentStep(2);
    } else {
      message.error(msg);
    }
  };

  /**
   * 更新密码
   */
  const _updatePassword = async (newPassword) => {
    const { data, msg } = await $http.resetPassword({ newPassword });
    if (data) {
      message.success(msg);
      history.replace('/login');
    } else {
      message.error(msg);
    }
  };

  /**
   * 选择展示组件
   */
  const ComponentSelector = (props) =>
    currentStep === 1 ? (
      <ValidateCodeLogin {...props} />
    ) : (
      <UpdatePassword {...props} />
    );

  return (
    <div className="login-form-container forget-password">
      <div className="forget-password-title">
        {currentStep === 1 ? '忘记密码' : '重置密码'}
      </div>

      <Form form={form} onFinish={submitSelect}>
        {ComponentSelector({ FormItem, Input, form })}
        <Row>
          <Button type="primary" htmlType="submit">
            {currentStep === 1 ? '下一步' : '重置'}
          </Button>
        </Row>
      </Form>
    </div>
  );
};

/**
 * 忘记密码
 */
export default forgetPassword;
