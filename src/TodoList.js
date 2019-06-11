import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component { 

	constructor(props) {
		super(props);

		this.state = {
			items: []
		};

		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}

	addItem(e) {
        // console.log("TodoList::addItem");
		var itemArray = this.state.items;

		if (this._inputElement.value !== "") {
			itemArray.push({
				text: this._inputElement.value,
				key: Date.now()
			});

			this.setState({
				items: itemArray
			});

			this._inputElement.value = "";
		}

		// console.log(itemArray);

		e.preventDefault();
	}

    deleteItem(key) {
        console.log("TodoList::deleteItem-1");
		var filteredItems = this.state.items.filter(function(item) {
			return (item.key !== key);
		});
        this.setState({
			items: filteredItems
		});
        console.log("TodoList::deleteItem-2");
	}

    // shouldComponentUpdate(nextProps, nextState) {
    // 	console.log("TodoList::shouldComponentUpdate");
    //     console.log(nextProps);
    //     console.log(nextState);
    // 	return true;
    // }
    //
    // componentWillUpdate() {
    // 	console.log("TodoList::componentWillUpdate");
    // }

	render() {
        console.log("TodoList::render");
		return (
			<div className="todoListMain">
				<div className="header"> 
					<form onSubmit={this.addItem}>
						<input
							ref={(text) => this._inputElement = text}
							placeholder="enter task">
						</input>
						<button type="submit">add</button>
					</form>
				</div>
				<TodoItems entries={this.state.items}
						   delete={this.deleteItem}/>
			</div> 
		);
	}

    // componentDidUpdate() {
    //     console.log("TodoList::componentDidUpdate");
    // }
}

export default TodoList;
