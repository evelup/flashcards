import React from 'react';
import styled from 'styled-components/native';
import { Text, TouchableOpacity } from 'react-native';

const StyledButton = styled.TouchableOpacity`
  padding: 10px 30px;
  background-color: ${({ghost}) => ghost ? 'transparent' : '#00ffba'};
  border: ${({ ghost }) => ghost ? '1px solid #00ffba' : 0};
  border-radius: 6px;
  margin-bottom: 10px;
  min-width: 160px;
`;

const StyledText = styled.Text`
  color: ${({ghost}) => ghost ? '#00ffba' : '#fff'};
  text-align: center;
  font-weight: 600;
`;

const Button = ({children, ghost, onPress, ...rest}) => {
  return (
    <StyledButton onPress={onPress} ghost={ghost} {...rest}>
      <StyledText ghost={ghost}>
        {children}
      </StyledText>
    </StyledButton>
  )
};

export default Button;
