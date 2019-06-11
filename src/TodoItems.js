import React, { Component } from "react";
// import FlipMove from 'react-flip-move';

class TodoItems extends Component { 

	constructor(props) {
		super(props);

		this.createTasks = this.createTasks.bind(this);
	}

	delete(key) {
        console.log("TodoItems::delete-1");
        this.props.delete(key);
        console.log("TodoItems::delete-2");
	}

	createTasks(item) {
        console.log("TodoItems::createTasks");
		return <li onClick={() => this.delete(item.key)}
				 key={item.key}>{item.text}</li>
	}

    componentWillReceiveProps() {
    	console.log("TodoItems::componentWillReceiveProps");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("TodoItems::shouldComponentUpdate");
        console.log(nextProps);
        console.log(nextState);
        return true;
    }

    componentWillUpdate() {
    	console.log("TodoItems::componentWillUpdate");
    }

	render() {
        console.log("TodoItems::render");
		var todoEntries = this.props.entries;
		var listItems = todoEntries.map(this.createTasks);

		return (
			<ul className="theList">
		 		{/*<FlipMove duration={250} easing="ease-out">*/}
		 			{listItems}
		 		{/*</FlipMove>*/}
		 	</ul>
		);
	}

    // componentDidUpdate() {
    //     console.log("TodoItems::componentDidUpdate");
    // }
};

export default TodoItems;