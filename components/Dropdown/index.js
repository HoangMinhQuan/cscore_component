import React from "react";
import {Row, Icon} from "antd";
import {Dropdown, Menu} from "antd";
import cx from "classnames";

export default ({
                  renderItem = (item, idx) => <div>{item}</div>,
                  placeholder,
                  data,
                  className,
                  seletedIdx = -1,
                  onSeleted,
                  label,
                  required,
                  error,
                  renderValue = o => <div>{o}</div>,
                  onFocus = () => {
                  },
                  onBlur = () => {
                  },
                  style,
                  selectedValue,
                  disabled,
                  ...props
                }) => {
  return (
    <div className={cx(className, {error})} style={style} key={selectedValue}>
      <div style={{fontSize: 14, color: "#a5a5a5"}}>
        {label}
        {required && !disabled && <label className="error"> *</label>}
      </div>
      <Dropdown
        trigger={["click"]}
        overlay={() => (
          <Menu>
            {data.map((o, idx) => (
              <Menu.Item
                key={idx}
                onClick={() => {
                  onSeleted(idx, o);
                }}
              >
                {renderItem(o, idx)}
              </Menu.Item>
            ))}
          </Menu>
        )}
        onVisibleChange={visi => (visi ? onFocus() : onBlur())}
        disabled={disabled}
        {...props}
      >
        <div className={cx("ant-input", {inputError: error})}>
          <Row type="flex" justify="space-between">
            <div>
              {seletedIdx === -1 ? (
                !selectedValue ? (
                  <span style={{color: "#ccc"}}>{placeholder}</span>
                ) : (
                  <span style={{color: "black"}}>{selectedValue}</span>
                )
              ) : (
                <span>{renderValue(data[seletedIdx])}</span>
              )}
            </div>
            <div>
              <Icon type="down"/>
            </div>
          </Row>
        </div>
      </Dropdown>
      {error && <label className="error">{error}</label>}
    </div>
  );
};
