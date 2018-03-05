import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';

const StyledWrapper = styled.View`
  flex: 1;
  padding: 10px;
  background-color: ${({bg}) => bg ? '#EFEFF4' : '#fff'};
`;

const Wrapper = ({ children, bg }) => {
  return (
    <StyledWrapper bg={bg}>{children}</StyledWrapper>
  )
};



export default Wrapper;
