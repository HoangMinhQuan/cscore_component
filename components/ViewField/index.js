import React from 'react'
import {Row, Col, Input, Form, Typography} from 'antd'

const {Text, Title} = Typography;

const ViewField = ({label, children}) => {

  return (
    <Row>
      <Form.Item
        label={label}
      >
        <Text>{children}</Text>
      </Form.Item>
    </Row>
  )
};

export default ViewField