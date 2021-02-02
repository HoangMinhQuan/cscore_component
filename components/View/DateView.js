import React from 'react'
import {Typography} from 'antd'
import moment from "moment";
import PropTypes from 'prop-types'

const {Text, Title} = Typography;

const DateView = ({
                  value,
                  format = "DD/MM/YYYY"
                }) => {
  return (
    <Text>{moment(value).format(format)}</Text>
  )
};

DateView.propTypes = {
  value: PropTypes.string.isRequired,
  format: PropTypes.string,
};

export default DateView


