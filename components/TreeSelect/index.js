import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

//Styles
import styles from "./Tree_Select.module.scss";

import { TreeSelect, Form } from "antd";

const { SHOW_PARENT } = TreeSelect;

function onChange(val) {

}

export default function TreeSelectOptions({
  width,
  treeData,
  classLabel,
  classTreeSelect,
  Children,
  label,
  ...rest
}) {
  return (
    <div>
      <Form.Item label={label} className={cx(styles.FormItem, classLabel)}>
        <TreeSelect
          style={{ width: width || "100%" }}
          className={cx(classTreeSelect)}
          searchPlaceholder="Tìm kiếm"
          treeCheckable="true"
          allowClear="true"
          showCheckedStrategy={SHOW_PARENT}
          treeDefaultExpandAll
          onChange={onChange}
          treeData={treeData}
          {...rest}
        >
          {Children}
        </TreeSelect>
      </Form.Item>
    </div>
  );
}

TreeSelectOptions.propTypes = {
  width: PropTypes.number,
  treeData: PropTypes.array.isRequired
};
