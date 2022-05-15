import React, { useState } from 'react';
import { Button, message } from 'antd';
import { loginRule } from 'utils/rules';
import IconMap from 'components/common/IconMap';
// import $http from 'api';

const validateCodeLogin = ({ FormItem, Input }) => {
  const [disabled, setDisabled] = useState(true);
  const [currentStatus, setCurrentStatus] = useState(true);
  // 验证码的倒计时
  let [currentTime, setCurrentTime] = useState(60);

  /**
   * 发送验证码组件内部进行发送
   */
  const _sendSmCode = async () => {
    setCurrentStatus(false);
    //- 获取当前用户输入的手机号码
    const mobile = form.getFieldValue('mobile');
    const res = await $http.getSmCode({ mobile });
    message.success(res.msg);
    setDisabled(true);
    runTime();
  };

  /**
   * 倒计时时间显示
   */
  const runTime = () => {
    const timer = setInterval(() => {
      if (currentTime === 0) {
        clearInterval(timer);
        setCurrentStatus(true);
        setDisabled(false);
        setCurrentTime(60);
        return;
      }
      setCurrentTime(--currentTime);
    }, 1000);
  };

  /**
   * 验证 发送验证码的手机号码是否正确
   */
  const mobileValChange = async () => {
    try {
      const status = await form.validateFiles(['mobile']);
      setDisabled(false);
    } catch (error) {
      setDisabled(true);
    }
  };

  return (
    <div>
      <FormItem name="mobile" rules={loginRule.mobileRule} hasFeedback>
        <Input
          prefix={IconMap.mobileIcon}
          placeholder="请输入您的手机号码"
          onChange={mobileValChange}
        />
      </FormItem>
      <FormItem name="code" rules={loginRule.smCodeRule}>
        <Input
          prefix={IconMap.smCodeIcon}
          addonAfter={
            <Button onClick={_sendSmCode} disabled={disabled}>
              {currentStatus ? '发送验证码' : `${currentTime}秒后重新发送`}
            </Button>
          }
          placeholder="请输入验证码"
        />
      </FormItem>
    </div>
  );
};

export default validateCodeLogin;
