import React from "react";
import ListOfWords from "./get_word";

export default class RandWord extends (React.Component, ListOfWords) {
    render() {
        return (this.state.words.map((word) => <div key={word.id}>{word.description}</div>))
    };
}