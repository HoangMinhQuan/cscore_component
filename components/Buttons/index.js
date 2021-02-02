import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { Button } from "antd";
import styles from "./buttons.module.scss";

const CustomBtn = ({ className, type = "primary", children, ...rest }) => {
  return (
    <Button className={cx(styles.button, styles[type], className)} {...rest}>
      {children}
    </Button>
  );
};

CustomBtn.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default CustomBtn;
