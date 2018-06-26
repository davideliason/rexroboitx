import React, { Component } from 'react';
import './app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { name: null };
  }

  componentDidMount() {
    fetch('/api/getDavidName')
      .then(res => res.json())
      .then(user => this.setState({ name: user.name }));
  }

  render() {
    return (
      <div>
        {this.state.name ? (
          <h1>Hello {this.state.name}</h1>
        ) : (
        <p>bojour</p>
        )}
      </div>
    );
  }
}
