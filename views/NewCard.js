import React from 'react';
import { Wrapper, Button } from '../components';
import { Text, TextInput } from 'react-native';
import styled from 'styled-components/native/index';
import Api from '../utils/api';

const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

const StyledTextInput = styled.TextInput`
  width: 100%;
  height: 40px;
  min-width: 300px;
`;

class NewCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      question: '',
      answer: '',
      title: this.props.navigation.state.params.title
    };
  }

  handleSubmit = e => {
    const { title, question, answer } = this.state;
    Api.saveCard(title, question, answer);
    this.props.navigation.goBack();
  };

  render() {
    return (
      <Wrapper>
        <Container>
          <Text style={{marginBottom: 20}}>
            Add new card
          </Text>
          <StyledTextInput
            placeholder="Question"
            onChangeText={(text) => this.setState({question: text})}
            style={{marginBottom: 40}}
          />
          <StyledTextInput
            placeholder="Answer"
            onChangeText={(text) => this.setState({answer: text})}
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

export default NewCard;
