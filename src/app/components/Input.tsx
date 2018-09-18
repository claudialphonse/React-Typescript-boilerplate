import * as React from 'react';
import './todo.scss';

interface IProps {
  onChange: (value: string) => void;
  placeholder?: string;
  searchterm?: string;
  reset?: boolean;
  text?: string;
}

interface IState {
  term: string;
  reset: boolean;
}
export default class Input extends React.Component<IProps, IState> {
  state = {
    term: '',
    reset: this.props.reset,
  };
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ term: e.target.value });
    this.props.onChange(e.target.value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.props.reset ? '' : this.state.term}
          className="wrapper__search__input"
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}
