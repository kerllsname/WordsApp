import React, { Component } from "react";
import axios from "axios";

export default class Words extends React.Component {
  state = {
    words: [],
  };

  componentDidMount() {
    axios.get("https://aliases.herokuapp.com/api/words").then((res) => {
      const words = res.data;
      this.setState({ words });
    });
  }

  render() {
    return this.state.words.map((word) => <div>{word.description}</div>);
  }
}
