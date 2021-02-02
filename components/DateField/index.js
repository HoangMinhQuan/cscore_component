import React from "react";
import {DatePicker, Form} from 'antd';
import PropTypes from 'prop-types'
import cx from "classnames";
import styles from "../Input/Input.module.scss";
import ViewField from "../ViewField";
import DateView from "../View/DateView";

const { MonthPicker, RangePicker } = DatePicker;

const dateFormat = 'DD/MM/YYYY';
const monthFormat = 'MM/YYYY';
const rangeFormat = 'DD-MM-YYYY HH:mm:ss';


const DateField = React.forwardRef(({width, mandatory = true, label, classLabel, type, mode = "editable", ...rest}, ref) => {

  const noteLabel = label => {
    return (
      <span>
        <span style={{ color: "red" }}>* </span>
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
        {(type === 'date' || !type) &&
        <DatePicker format={dateFormat} ref={ref} {...rest} style={{ width: width || "100%" }}/>}
        {type === 'month' &&
        <MonthPicker format={monthFormat} ref={ref} {...rest} style={{ width: width || "100%" }}/>}
        {type === 'range' &&
        <RangePicker format={rangeFormat} ref={ref} {...rest} style={{ width: width || "100%" }}/>}
      </Form.Item>
    </div>
    ) : (
      <ViewField label={label}>
        <DateView value={rest.value}/>
      </ViewField>
    )
  )
});

DateField.propTypes = {
  width: PropTypes.string,
  mandatory: PropTypes.bool
};

export default DateField;