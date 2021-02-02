import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import styles from "./select.module.scss";
import {Select, Form, Row} from "antd";
import styled from "styled-components";
import ViewField from "../ViewField";
import helper from '../../../helper/helper'

const {Option} = Select;

/*
 * Selection from ant
 * Props:
 * dataSource: [{key: "", value: ""}]*/
const getFieldValueFromID = (id, array, field = "ten") => {
  if (id && !isEmpty(array)) {
    const item = array.find((item) => item.id === id);
    return item[field]
  }
  return null;
};
export default function SelectOptions({
                                        width,
                                        dataSource,
                                        classSelect,
                                        classOption,
                                        label,
                                        labelFontWeight,
                                        mandatory = true,
                                        name,
                                        name_value,
                                        mode = "editable",
                                        defaultValue,
                                        modeSelect,
                                        ...rest
                                      }) {
  const noteLabel = label => {
    return (
      <Label fontWeight={labelFontWeight}>
        <span style={{color: "red"}}>* </span>
        {label}
      </Label>
    );
  };

  return (
    mode !== "presentation"
      ? (<Form.Item
        label={
          mandatory ? (
            noteLabel(label)
          ) : labelFontWeight ? (
            <Label fontWeight={labelFontWeight}>{label}</Label>
          ) : label
        }
        className={styles.FormStyles}
      >
        <Select
          showSearch
          style={{width: width || 300}}
          mode={modeSelect ? modeSelect : ""}
          className={cx(styles.select, classSelect)}
          optionFilterProp="children"
          dropdownMatchSelectWidth={false}
          defaultValue={defaultValue !== 0 ? defaultValue : undefined}
          {...rest}
        >
          {!dataSource
            ? null
            : dataSource.map(item => (
              <Option
                key={item.id}
                value={item[name_value]}
                className={cx(styles.selectOption, classOption, 'select-option')}
              >
                {item[name]}
              </Option>
            ))}
        </Select>
      </Form.Item>)
      : (
        <ViewField label={label}>
          {getFieldValueFromID(rest.defaultValue, dataSource, name)}
        </ViewField>
      )
  );
}

const Label = styled.span`
  font-weight: ${props => props.fontWeight};
`;

SelectOptions.propTypes = {
  width: PropTypes.string,
  name: PropTypes.string.isRequired,
  name_value: PropTypes.string.isRequired
};
