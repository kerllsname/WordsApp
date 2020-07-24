import React from "react";
import axios from "axios";

function RandWord(props) {
  return (
    <div>
      <div>
        {props.word.value}
      </div>
      <div>
        {props.word.description}
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
    return (
      this.state.words.map(
        (word) => {
          return (
            <RandWord word={word} key={word.id} />
          )
        }
      )
    )
  }


  render() {
    return (
      <div> {
        this.renderWord()
        }
      </div>
    )
  }
}