import React from 'react';
import { View, Text } from 'react-native';
import { Card, Wrapper, Button } from '../components';
import styled from "styled-components/native/index";
import { setNotificationForTomorrow, clearAllNotifications } from '../utils/helpers';

const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: props.navigation.state.params.deck,
      index: 0,
      correctAnswers: 0,
      complete: false
    }
  }

  handleCorrect = e => {
    const count = this.state.deck.questions.length;
    const { index } = this.state;

    this.setState({
      index: this.state.index + (index + 1 < count ? 1 : 0),
      correctAnswers: this.state.correctAnswers + 1,
      complete: (index+1 === count)
    })
  };

  handleIncorrect = e => {
    const count = this.state.deck.questions.length;
    const { index } = this.state;
    this.setState({
      index: this.state.index + (index + 1 < count ? 1 : 0),
      complete: (index+1 === count)
    })
  };

  componentDidUpdate() {
    if (this.state.complete) {
      clearAllNotifications().then(() => {
        setNotificationForTomorrow()
      })
    }
  }

  render() {
    const { deck, index, correctAnswers, complete } = this.state;
    const { questions } = deck;
    return (
      <Wrapper>
        <Text style={{marginBottom: 10}}>{index+1}/{questions.length}</Text>
        {complete
          ? <Container>
              <Text style={{marginBottom: 40}}>Correct answers: {correctAnswers}</Text>
              <Button onPress={() => this.props.navigation.navigate('Quiz', {deck})}>Restart Quiz</Button>
              <Button ghost onPress={() => this.props.navigation.navigate('DeckDetail', {deck})}>Back to Deck</Button>
            </Container>
          : <Card
            question={questions[index].question}
            answer={questions[index].answer}
            onCorrect={this.handleCorrect}
            onIncorrect={this.handleIncorrect}
          />
        }
      </Wrapper>
    )
  }
}

export default Quiz;
