import React from 'react';
import cx from "clsx";
import styles from "./select.module.scss";
import { Select, Form } from "antd";
import ViewField from "../ViewField";
import "./styles/index.scss";
class SelectProps extends React.Component {

  render() {
    const { width,
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
      modeSelect } = this.props
    const getFieldValueFromID = (id, array, field = "ten") => {
      if (id && !isEmpty(array)) {
        const item = array.find((item) => item.id === id);
        return item[field]
      }
      return null;
    }
    return (
      <div>
        {mode !== "presentation"
          ? (<Form.Item
            label={
              mandatory ? (
                <span style={{ fontWeight: labelFontWeight }}>
                  <span style={{ color: "red" }}>* </span>
                  {label}
                </span>
              ) : labelFontWeight ? (
                <span style={{ fontWeight: labelFontWeight }}>{label}</span>
              ) : label
            }
            className={styles.FormStyles}
          >
            <Select
              showSearch
              style={{ width: width || 300 }}
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
        }
      </div>
    );
  }
}

export default SelectProps;
