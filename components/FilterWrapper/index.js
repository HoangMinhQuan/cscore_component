import React from 'react'
import {Row, Col, Icon} from 'antd'
import PropTypes from 'prop-types'
import Button from '../Buttons'
import {Formik} from "formik";
import styled from "styled-components";

const FilterWrapper = ({children, handleApplyFilter, initialValues, searchTitle, styleButton, hideButton}) => {
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={(values, formikActions) => {
        handleApplyFilter(values)
      }}
      render={(props) => (
        <form action="" onSubmit={props.handleSubmit}>
          <Row type="flex" justify="start">
              {children(props)}
              {hideButton ? undefined :
              <Col span={4} style={styleButton}>
                <SearchBox>
                    <Button type="submit" onClick={props.handleSubmit}><Icon type="search" style={{marginLeft: '0px'}}/>{searchTitle ? searchTitle : "Tìm kiếm"}</Button>
                </SearchBox>
              </Col>
              }
          </Row>
          {/* <DisplayFormikState values={props.values}/> */}
        </form>
      )}/>
  )
};
const SearchBox = styled.div`
  margin-left: 10px;
`;

FilterWrapper.propTypes = {
  handleApplyFilter: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
};

export default FilterWrapper