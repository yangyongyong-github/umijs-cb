import React from 'react';
import IconMap from 'components/common/IconMap';
import { loginRule } from 'utils/rules';

const UpdatePassword = ({ FormItem, Input, form }) => {
  return (
    <div>
      <FormItem name="password" rules={loginRule.passwordRule} hasFeedback>
        <Input
          prefix={IconMap.passwordIcon}
          placeholder="new password"
          type="password"
        />
      </FormItem>
      <FormItem
        name="confirmPassword"
        rules={loginRule.confirmePasswordRule(form)}
        hasFeedback
      >
        <Input
          prefix={IconMap.passwordIcon}
          placeholder="confirme password"
          type="password"
        />
      </FormItem>
    </div>
  );
};

/**
 * 更新密码
 */
export default UpdatePassword;
