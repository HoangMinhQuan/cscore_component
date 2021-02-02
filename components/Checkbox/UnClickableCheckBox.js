import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Row} from 'antd'

const UnClickableCheckbox = ({checked}) => {
  return (
    <Container>
      {/*<Box type="checkbox" disabled="true"/>*/}
      <Checkmark checked={checked}/>
    </Container>
  )
};

UnClickableCheckbox.propTypes = {
  checked: PropTypes.bool.isRequired,
};

const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  background-color: #ddd;
  
  &::after{
    content: "";
    position: absolute;
    display: ${props => props && props.checked ? "block" : "none"};
    left: 6px;
    top: 4px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

const Container = styled.label`
  position: absolute;
  //background: red;
  //height: 18px;
  //width: 18px;
  display: inline-block;
  margin-top: -10px;
`;

export default UnClickableCheckbox;