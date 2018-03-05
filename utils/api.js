import { AsyncStorage } from 'react-native';

function getStore() {
  return AsyncStorage.getItem('store').then(store => {
    if (!store) {
      return {
        decks: {}
      }
    }
    return JSON.parse(store)
  });
}

function getDecks() {
  return getStore().then(store => {
    if (store.decks) {
      return store.decks
    }
    return {}
  })
}

function getDeck(title) {
  return getStore().then(store => {
    return store.decks[title]
  })
}

function saveDeck(title) {
  return getStore().then(store => {
    store.decks[title] = {
      title,
      questions: []
    };
    return AsyncStorage.setItem('store', JSON.stringify(store)).then(() => {
      return getDeck(title)
    });
  })
}

function saveCard(title, question, answer) {
  return getStore().then(store => {
    store.decks[title].questions.push({
      question: question,
      answer: answer
    });
    return AsyncStorage.setItem('store', JSON.stringify(store))
  })
}

export default {
  getDecks,
  saveDeck,
  saveCard,
  getDeck,
}
