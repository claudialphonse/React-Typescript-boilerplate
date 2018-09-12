# REACT BOILERPLATE WITH TYPESCRIPT


class TodoApp extends React.Component {
  
  state = {
    term: '',
    fruits: [
      {id: 0, text: 'apple'},
      {id: 1, text: 'orange'},
      {id: 2, text: 'banana'},
      {id: 3, text: 'apricot'},
      {id: 4, text: 'tangerine'},
      {id: 5, text: 'pomegranate'}
    ]
  };

  render() {
    const {term,fruits}=this.state;
    return (
      <div>
        <div>
          <AddButton onClick={this.handleAddTodo(term)}/>
          <InputBox onChange={this.handleTextChange} terms={term}/>
        </div>
        <ul>
          {
            fruits.map((fruitItem,index) => {
              return <TodoItem
                key={fruitItem.id}
                id={index}
                text={fruitItem.text}
                handleRemove={this.handleRemove(fruitItem.id)}/>
            })
          }
        </ul>
      </div>
    );
  };
  //add item
  handleAddTodo = (terms) => () => {
  terms !== '' && this.setState({
      fruits: this.state.fruits.concat({
        id: this.state.fruits.length,
        text: terms,
      })
    })  
  };
  //change input value
  handleTextChange = (e) => { 
    this.setState({term: e.target.value})
  };
  //remove items
  handleRemove = (id) => () => {
    this.setState({
      fruits: this.state.fruits.filter((todoItem) => {
        return todoItem.id !== id
      })
    })
  };
}
<button onClick={this.handleAddTodo(text)}>Add</button>

class AddButton extends React.Component {
  
  render() {
    return <div>
      <button onClick={this.props.onClick}>ADD</button>
      <br/>
    </div>
  }
}

class InputBox extends React.Component {
  
  render() {
    return <div>
      <input onChange={this.props.onChange} value={this.props.term} />
      <br/>
    </div>
  }
}

class TodoItem extends React.Component {
  
  state = {
    showUpdateStyle: false
  };
  
  render() {
    return <li >
      {this.props.text} 
      <button onClick={this.props.handleRemove}>
       X
      </button> 
    </li>
  }
} 

React.render(<TodoApp />, document.body);
