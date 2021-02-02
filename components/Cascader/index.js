import React from "react";
import { Cascader, Form } from "antd";
import cx from "classnames";

import styles from "./Cascader.module.scss";
function filter(inputValue, path) {
  return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
}
export default ({
  type,
  classLabel,
  classCascader,
  size,
  placeholder,
  options,
  expandTrigger,
  onChange,
  loadData,
  width,
  label,
  ...props
}) => (
  <Form.Item label={label} className={cx(styles.FormItem, classLabel)}>
    <Cascader
      {...props}
      placeholder={placeholder}
      className={cx(styles[type], styles.Cascader, classCascader)}
      size={size}
      onChange={onChange}
      options={options}
      showSearch={{ filter }}
      style={{width: width || "100%"}}
    />
  </Form.Item>
);
