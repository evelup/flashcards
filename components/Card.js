import React from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { Button, Box, TextButton, Heading } from './';

const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

class Card extends React.Component {
  state = {
    back: false,
  };

  handleFlip = e => {
    this.setState({ back: !this.state.back })
  };

  handleCorrect = e => {
    this.setState({ back: false });
    this.props.onCorrect();
  };

  handleIncorrect = e => {
    this.setState({ back: false });
    this.props.onIncorrect();
  };

  render() {
    const { question, answer } = this.props;
    return (
      <Box>
        <Container>
          {!this.state.back
            ? <Heading>{question}</Heading>
            : <Heading>{answer}</Heading>
          }
          <TextButton onPress={this.handleFlip}>
            {this.state.back ? 'QUESTION' : 'ANSWER'}
          </TextButton>
          <Button onPress={this.handleCorrect}>Correct</Button>
          <Button onPress={this.handleIncorrect} ghost>Incorrect</Button>
        </Container>
      </Box>
    )
  }
}

export default Card;
