import React from "react";
import { Input, Form } from "antd";
import cx from "classnames";
import PropTypes from "prop-types";

import styles from "./textArea.module.scss";

export default function InputTextArea({
  width,
  label,
  classLabel,
  children,
  type,
  classInput,
  mandatory = true,
  ...rest
}) {
  const noteLabel = label => {
    return (
      <span>
        <span style={{ color: "red" }}>* </span>
        {label}
      </span>
    );
  };

  return (
    <div>
      <Form.Item
        label={mandatory ? noteLabel(label) : label}
        className={cx(styles.FormItem, classLabel)}
      >
        <Input.TextArea
          style={{ width: width || "100%" }}
          className={cx(styles[type], styles.textArea, classInput)}
          {...rest}
        >
          {children}
        </Input.TextArea>
      </Form.Item>
    </div>
  );
}
InputTextArea.propTypes = {
  width: PropTypes.string,
};
