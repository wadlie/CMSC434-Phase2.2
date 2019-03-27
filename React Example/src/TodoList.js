import React, {Component} from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css"

class TodoList extends Component {

  constructor(props){
    super(props);

    this.state = {
      items: []
    }

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    var itemArray = this.state.items;

    if (this._inputElement.value !== "" && this._inputAdress !== "" && this._inputNumber !== "") {
      itemArray.unshift({
        text: this._inputElement.value,
        address: this._inputAdress.value,
        number: this._inputNumber.value,
        key: Date.now()
      });

      this.setState({
        items: itemArray
      });

      this._inputElement.value = "";
      this._inputAdress.value = "";
      this._inputNumber.value = "";

    }

    console.log(itemArray);
    //every time we enter an item, the page will re-render
    e.preventDefault();
  }

  deleteItem(key) {

    var filteredItems = this.state.items.filter(function(item) {
    return (item.key !== key);
  });

  this.setState({
    items: filteredItems
  });
}

  render() {
    return(
      <div className="todoListMain">
      <div className="header">
        <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a} placeholder="enter task">
            </input>
            <button type="submit">add</button>
            <br/>
            <input ref={(a) => this._inputNumber = a} placeholder="enter number">
            </input>
            <br/>
            <br/>
            <input ref={(a) => this._inputAdress = a} placeholder="enter address">
            </input>
          </form>
        </div>
        <TodoItems entries={this.state.items} delete={this.deleteItem} />
      </div>
    )
  }

}


export default TodoList;
