import React, { Component } from "react";
import container from "react-bootstrap/container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TodoInput from "../TodoInput/TodoInput";
import TodoList from "../TodoList/TodoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  addItem = (item) => {
    this.setState((prevState) => ({
      list: [...prevState.list, item],
    }));
  };

  deleteItem = (item) => {
    this.setState((prevState) => ({
      list: prevState.list.filter((item) => item.id !== id),
    }));
  };

  editItem = (item) => {
    this.setState((prevState) => ({
      list: prevState.list.map((item) =>
        item.id === id ? { ...item, value: newValue } : item
      ),
    }));
  };

  render() {
    return (
      <container>
        <Row className="justify-content-center">
          <h1>TODO LIST</h1>
        </Row>
        <hr />
        <Row>
          <col md={{ span: 5, offset: 4 }}>
            <TodoInput addItem={this.addItem} />
            <TodoList
              list={this.state.list}
              deleteItem={this.deleteItem}
              editItem={this.editItem}
            />
          </col>
        </Row>
      </container>
    );
  }
}

export default App;
