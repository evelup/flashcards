import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

const StyledHeading = styled.Text`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
  color: ${({primary}) => primary ? '#00ffba' : '#000'}
`;


const Heading = ({ children }) => {
  return (
    <StyledHeading>{children}</StyledHeading>
  )
};

export default Heading;
