import * as React from 'react';
import { addTodo, moveDown, moveUp, removeTodo, search } from '../actions/index';
export interface IProps {
  index?: number;
  todoItem?: {
    id: number;
    text?: string;
  };
}

export default class TodoItem extends React.Component<IProps, any> {
  render() {
    const { todoItem, index } = this.props;
    return (
      <div>
        <li key={this.props.index} className="wrapper__ul__li">
          <span>
            <button className="wrapper__ul__button__up" onClick={() => moveDown(todoItem.id, index)}>
              &#8595;
            </button>
            <button className="wrapper__ul__button__up" onClick={() => moveUp(todoItem.id, index)}>
              ↑
            </button>
            {todoItem.text}
          </span>
          <button onClick={() => removeTodo(todoItem.id)} className="wrapper__ul__button">
            X
          </button>
        </li>
      </div>
    );
  }
}
