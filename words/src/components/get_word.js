import React from "react";
import axios from "axios";

export default class ListOfWords extends React.Component {
  state = {
    words: []
  };

  componentDidMount() {
    axios.get("https://aliases.herokuapp.com/api/words").then((res) => {
      const words = res.data.data;
      this.setState({ words });
    });
  };

  render() {
    return <></>;
  };
}