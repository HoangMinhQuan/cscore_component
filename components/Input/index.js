import React from "react";
import {Input, Form} from "antd";
import cx from "classnames";
import PropTypes from "prop-types";

import styles from "./Input.module.scss";
import ViewField from "../ViewField";

const CustomizeInput = React.forwardRef(({
                                           width,
                                           label,
                                           classLabel,
                                           classInput,
                                           mandatory = true,
                                           type,
                                           mode = "editable",
                                           ...rest
                                         }, ref) => {
  const noteLabel = label => {
    return (
      <span>
        <span style={{color: "red"}}>* </span>
        {label}
      </span>
    );
  };

  return (
    mode !== "presentation" ? (
      <div>
        <Form.Item
          label={mandatory ? noteLabel(label) : label}
          className={cx(styles.FormItem, classLabel)}
        >
          <Input
            ref={ref}
            style={{width: width || "100%"}}
            className={cx(styles[type], styles.Input, classInput)}
            {...rest}
          />
        </Form.Item>
      </div>
    ) : (
      <ViewField label={label}>
        {rest.value}
      </ViewField>
    )
  );
});

CustomizeInput.propTypes = {
  width: PropTypes.string,
  mandatory: PropTypes.bool
};


export default CustomizeInput