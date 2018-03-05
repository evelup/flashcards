import React from 'react';
import styled from 'styled-components/native';
import { Text, TouchableOpacity } from 'react-native';

const StyledText = styled.Text`
  color: #00ffba;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 40px;
`;

const TextButton = ({ children, center, onPress }) => {
  return (
    <TouchableOpacity center={center} onPress={onPress}>
      <StyledText>
        {children}
      </StyledText>
    </TouchableOpacity>
  )
};



export default TextButton;
