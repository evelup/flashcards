import React from 'react';
import { Wrapper, Button } from '../components';
import { Text, TextInput } from 'react-native';
import styled from "styled-components/native/index";
import Api from '../utils/api'

const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

const StyledTextInput = styled.TextInput`
  width: 100%;
  height: 40px;
  min-width: 300px;
`;

class NewDeck extends React.Component {
  state = {
    title: ''
  };

  handleSubmit = e => {
    Api.saveDeck(this.state.title).then(deck => {
      this.props.navigation.navigate('DeckDetail', {deck})
    })
  };

  render() {
    return (
      <Wrapper>
        <Container>
          <Text style={{marginBottom: 20}}>
            Add new deck
          </Text>
          <StyledTextInput
            placeholder="Deck title"
            onChangeText={(text) => this.setState({title: text})}
            style={{marginBottom: 40}}
          />
          <Button onPress={this.handleSubmit}>
            Submit
          </Button>
        </Container>
      </Wrapper>
    )
  }
}

export default NewDeck;
