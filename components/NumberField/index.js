import React from "react";
import {InputNumber, Form} from "antd";
import cx from "classnames";
import PropTypes from "prop-types";

import styles from "./number.module.scss";

export default function NumberField({
                                      width,
                                      label,
                                      classLabel,
                                      classInput,
                                      mandatory = true,
                                      type,
                                      color,
                                      ...rest
                                    }) {
  const noteLabel = label => {
    return (
      <span>
        <span style={{color: "red"}}>* </span>
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
        <InputNumber
          type="number"
          style={{width: width || "100%", color: color || "#000000a6"}}
          className={cx(styles[type], styles.Input, classInput)}
          {...rest}
        />
      </Form.Item>
    </div>
  );
}
NumberField.propTypes = {
  width: PropTypes.string,
};
