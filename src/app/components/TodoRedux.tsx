import * as React from 'react';
import './todo.scss';
import { connect } from "react-redux";
import { removeTodo, moveDown, moveUp, addTodo, search } from '../actions/index';
interface ITodoRedux{
    todo?:{
        id:number;
        text?:string;
    }[]
}
interface IState{
    term:string;
    search:string;
}


class TodoReduxImpl extends React.Component<ITodoRedux,IState>{
    state={
        term:'',
        search:''
    }
    handleaddTodo=()=>{
        addTodo(this.state.term)
        this.setState({
            term:''
        });
    }
   
    searchTodo=(e:React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({search:e.target.value})
       
    }
    render(){
        return(
            <div className='wrapper'>
            <input type="text" onChange={this.searchTodo} value={this.state.search} className='wrapper__search__input' />
                <ul className='wrapper__ul'>
                    {
                        this.props.todo.filter((fruit:any)=>
                        fruit.text.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1).map((todoItem,index) => {
                        return(
                                <li key={index} className='wrapper__ul__li'>
                                <span>
                                <button className='wrapper__ul__button__up' onClick={()=>moveDown(todoItem.id,index)}>&#8595;</button> 
                                <button className='wrapper__ul__button__up' onClick={()=>moveUp(todoItem.id,index)}>↑</button> 
                                    {todoItem.text}
                                </span>
                                    <button onClick={()=> removeTodo(todoItem.id)} className='wrapper__ul__button'>X</button>
                                </li> 
                        )          
                        })
                    }     
                </ul>
                <div className='wrapper__search'>
                    <input type="text" onChange={(e)=>this.setState({term:e.target.value})} value={this.state.term} className='wrapper__search__input' /> 
                    <button onClick={this.handleaddTodo} className='wrapper__search__button'>Add</button>
                </div>

            </div>
        )
    }
}
const mapStateToProps=(state:ITodoRedux)=>{
    return{
        todo:state.todo
    }
}

export const TodoRedux= connect(mapStateToProps,null)(TodoReduxImpl);