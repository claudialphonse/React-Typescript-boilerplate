import * as React from 'react';
import { connect } from 'react-redux';
import { addTodo, moveDown, moveUp, removeTodo, search } from '../actions/index';
import Input from './Input';
import './todo.scss';
import TodoItem from './TodoItem';
interface ITodoRedux {
  todo?: Array<{
    id: number;
    text?: string;
  }>;
  searchterm?: string;
  index?: number;
}
interface IState {
  term: string;
  search: string;
  reset?: boolean;
}
const task = 'enter task';

class TodoReduxImpl extends React.Component<ITodoRedux, IState> {
  state = {
    term: '',
    search: '',
    reset: false,
  };
  // add todo
  handleaddTodo = (e: any) => {
    e.preventDefault();
    if (this.state.term !== '') {
      addTodo(this.state.term);
      console.log('before reset', this.state.term);
    }
    this.setState({
      term: '',
      reset: true,
    });
  };

  updateInput = (textinput: string) => {
    this.setState({ term: textinput, reset: false });
  };
  updateChange = (textinput: string) => {
    this.setState({ term: textinput });
  };
  render() {
    return (
      <form className="wrapper" onSubmit={this.handleaddTodo}>
        <Input onChange={this.updateChange} />
        <ul className="wrapper__ul">
          {this.props.todo
            .filter((fruit: any) => fruit.text.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)
            .map((todoItem, index) => {
              return <TodoItem index={index} todoItem={todoItem} key={index} />;
            })}
        </ul>
        <div className="wrapper__search">
          <Input reset={this.state.reset} onChange={this.updateInput} placeholder="enter task" />

          <button type="submit" className="wrapper__search__button">
            Add
          </button>
        </div>
      </form>
    );
  }
}
const mapStateToProps = (state: ITodoRedux) => {
  return {
    todo: state.todo,
  };
};

export const TodoRedux = connect(
  mapStateToProps,
  null,
)(TodoReduxImpl);
