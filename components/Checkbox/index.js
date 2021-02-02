import React from "react";
import { Checkbox } from "antd";
import cx from "classnames";
import PropTypes from "prop-types";

import styles from "./Checkbox.module.scss";

export default function CheckboxGroup({
  width,
  className,
  dataSource,
  name,
  value,
  type,
  ...rest
}) {
  return (
    <Checkbox.Group
      className={cx(styles[type], styles.checkbox_group, className)}
      style={{ width: width || "100%" }}
      {...rest}
    >
      {dataSource.map(item => (
        <Checkbox value={item[value]} className={cx(styles.checkbox)}>
          {item[name]}
        </Checkbox>
      ))}
    </Checkbox.Group>
  );
}
CheckboxGroup.propTypes = {
  width: PropTypes.number,
  dataSource: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
