import React from "react";
import { Input as AnInput, Input } from "antd";
import cx from "classnames";
import styles from "./styles.module.scss";

const { TextArea } = AnInput;

export default ({
                  label,
                  editable = false,
                  className,
                  textarea = false,
                  required,
                  error,
                  style,
                  placeholder = "",
                  type,
                  maxLength = textarea ? 65000 : 255,
                  prefixLeft,
                  inline,
                  disabled,
                  extendButton,
                  ...props
                }) => {
  const innerError = !disabled ? error : null;

  const nest = {
    className: cx(
      styles.input,
      { [styles.disabled]: !editable },
      { inputError: innerError }
    ),
    disabled: !editable || disabled,
    placeholder,
    ...props
  };
  const event =
    type === "number"
      ? {
        onKeyPress: function(evt) {
          if (
            (evt.which !== 8 && evt.which !== 0 && evt.which < 48) ||
            evt.which > 57
          ) {
            evt.preventDefault();
          }
        },
        onPaste: function(e) {
          let clipboardData, pastedData;

          e.stopPropagation();

          // Get pasted data via clipboard API
          clipboardData = e.clipboardData || window.clipboardData;
          pastedData = clipboardData.getData("text/plain");

          // Check if pastedData exists non-digit letter
          if(pastedData) {
            const hasNonDigit = pastedData.split("").some((_, i) => {
              const decimal = pastedData.charCodeAt(i);
              return decimal < 48 || decimal > 57;
            });
            if(hasNonDigit) e.preventDefault();
          }else{
            e.preventDefault();
          }
        }
      }
      : null;
  return (
    <div
      className={cx(className, { [styles.editable]: editable })}
      style={style}
    >
      {label && (
        <label className={cx(styles.label, { error: innerError })}>
          {label}
          {editable && required && !disabled && (
            <span style={{ color: "red" }}> *</span>
          )}
        </label>
      )}
      {textarea ? (
        <TextArea {...nest} maxLength={maxLength} />
      ) : (
        <div className={styles.inputWrap}>
          {prefixLeft && (editable || nest.value) && (
            <div className={styles.prefixLeft}>{prefixLeft}</div>
          )}
          {editable ||
          (!editable &&
            ((nest.value && nest.value.length < 100) || !nest.value)) ? (
            <>
              <Input
                disabled={disabled}
                {...nest}
                maxLength={maxLength}
                {...event}
                style={prefixLeft ? { paddingLeft: 45 } : null}
              />
              {extendButton && (
                <div className={styles.extendButtonWrap}>{extendButton}</div>
              )}
            </>
          ) : (
            <TextArea
              disabled={disabled}
              {...nest}
              maxLength={maxLength}
              rows={3}
            />
          )}
        </div>
      )}
      {!inline ? <div className="error">{innerError}</div> : null}
    </div>
  );
};
