import React from "react";
import Card from "./Card";
class TodoItem extends React.Component {
    render() {
        const { completed, id, title } = this.props.todo
        return (
            <Card className="todo-item" index={id} title={title}>
                <input
                    type="checkbox"
                    
                    onChange={() => this.props.handleChange(id)}
                />
                <span >
                    {title}
                </span>
                <button className="btn-style" onClick={() => this.props.deleteTodo(id)}> X </button>
            </Card>
        );

    }
}
export default TodoItem;
