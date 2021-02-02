import React from 'react'
import {connect} from 'react-redux'
import styled from "styled-components";

export const TableDetail = ({children}) => {
  return (
    <TableCustom>
      <BodyDetail>
        {children}
      </BodyDetail>
    </TableCustom>
  )
};

export const RowTableDetail = ({title, children}) => {
  return (
    <TRDetail>
      <THDetail>{title}</THDetail>
      <TDDetail>{children}</TDDetail>
    </TRDetail>
  )
};

const TableCustom = styled.table`
  width: 100%;
`;

const BodyDetail = styled.tbody`
  border-bottom: 1px solid #e7e7e7;
`;

const TRDetail = styled.tr`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  display: table-row;
`;
const THDetail = styled.th`
    padding: 7px 14px 6px;
    background-color: #f3f3f3;
    font-weight: 400;
    vertical-align: top;
    width: 50%!important;
    white-space: normal;
    word-wrap: break-word;
    color: #555!important;
`;
const TDDetail = styled.td`
    color: #333;
    padding-left: 10px;
    vertical-align: top;
    width: 50%;
`;