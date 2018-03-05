import React from 'react';
import { Wrapper, Box, Heading } from '../components';
import { Text, TouchableOpacity, ScrollView, Platform, View } from 'react-native';
import DeckDetail from './DeckDetail';
import Api from '../utils/api'

class Decks extends React.Component {
  state = {};

  componentDidMount() {
    this._sub = this.props.navigation.addListener(
      'didFocus',
      this.updateView
    );

    this.getDecks()
  };

  componentWillUnmount() {
    this._sub.remove();
  };

  updateView = () => {
    this.getDecks()
  };

  getDecks = () => {
    Api.getDecks().then(decks => {
      this.setState({ decks })
    })
  };

  handleDeck = deck => e => {
    this.props.navigation.navigate('DeckDetail', { deck })
  };

  render() {
    const { decks } = this.state;

    return (
        <ScrollView>
          <Wrapper bg>
            {decks && Object.keys(decks).map(deck => {
              const count = decks[deck].questions.length;
              return (
                <TouchableOpacity key={deck} onPress={this.handleDeck(decks[deck])}>
                  <Box center>
                    <Heading>{deck}</Heading>
                    <Text>{count} cards</Text>
                  </Box>
                </TouchableOpacity>
              )
            })}
            <View style={{height: Platform.OS === 'ios' ? 120 : 80}}/>
          </Wrapper>
        </ScrollView>
    )
  }
}

export default Decks;
