import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';

const StyledBox = styled.View`
  min-height: 100px;
  background-color: #fff;
  padding: 20px 10px;
  border-radius: 2px;
  margin-bottom: 10px;
  ${({center}) => center && 'justify-content: center; align-items: center'}
`;

const Box = ({ children, center }) => {
  return (
    <StyledBox center={center}>{children}</StyledBox>
  )
};



export default Box;
