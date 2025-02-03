import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: "",
        };
    }

    updateInput = (value) => {
        this.setState({ userInput: value });
    };

    handleAdd = () => {
        const { userInput } = this.state;
        if (userInput.trim()) {
            const newItem = {
                id: Math.random(),
                value: userInput,
            };
            this.props.addItem(newItem);
            this.setState({ userInput: ''});
    }
 };
  
  render() {
    <InputGroup 
  }
};