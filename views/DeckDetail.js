import React from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { Button, Wrapper, Heading } from '../components';
import NewCard from './NewCard';
import Quiz from './Quiz';
import Api from '../utils/api';

const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

class DeckDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: props.navigation.state.params.deck
    }
  }

  // static navigationOptions = ({ navigation }) => {
  //   const { deck } = navigation.state.params;
  //
  //   return {
  //     title: deck.title
  //   }
  // };

  componentDidMount() {
    this._sub = this.props.navigation.addListener(
      'didFocus',
      this.updateView
    );
  }

  componentWillUnmount() {
    this._sub.remove();
  };

  updateView = () => {
    Api.getDeck(this.state.deck.title).then(deck => {
      this.setState({ deck })
    });

  };

  handleNewCard = title => e => {
    // console.log('deck title', title);
    this.props.navigation.navigate('NewCard', {title: title})
  };

  handleQuiz = deck => e => {
    this.props.navigation.navigate('Quiz', {deck})
  };

  renderDeck = () => {
    const { deck } = this.state;
    if(!deck) {
      return (
        <Text>Loading...</Text>
      )
    }
    return (
      <Container>
        <Heading>{deck.title}</Heading>
        <Text style={{marginBottom: 40}}>{deck.questions.length} cards</Text>
        <Button ghost onPress={this.handleNewCard(deck.title)}>
          Add Card
        </Button>
        {this.state.deck.questions.length !== 0 && <Button onPress={this.handleQuiz(deck)}>
          Start Quiz
        </Button>}
      </Container>
    )
  };

  render() {
    const { deck } = this.state;

    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        {this.renderDeck()}
      </View>
    )
  }
}

export default DeckDetail;
