import React from 'react';
import App from './App';
import Api from './utils/api'

import renderer from 'react-test-renderer';

describe('App', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<App />).toJSON();
    expect(rendered).toBeTruthy();
  });

});
