import React from "react";
import axios from "axios";

function GetWords(props) {

  return (
    <div>
      <div>{
        props.word.value
      }
      </div>
      <div>{
        props.word.description
      }
      </div>
    </div>
  )
}

export default class ListOfWords extends React.Component {

  state = {
    words: []
  }

  componentDidMount() {
    
    axios.get("https://aliases.herokuapp.com/api/words").then(
      (res) => {
        const words = res.data.data
        this.setState({ words })
      }
    )
  }
  
  renderWord() {

    const { words } = this.state;
    var index = Math.floor(Math.random() * Math.floor(words.length));
    const word = words[index];

    return (
      <GetWords word={word} key={word.id} />
    )
  }
  
  render() {

    const { words } = this.state;

    return (
      <div> {
        words.length
          ? this.renderWord()
          : undefined
      }
      </div>
    )
  }
}