import * as React from 'react';
/*import './style.css';*/
import './todo.scss';
const uuidv1 = require('uuid/v1');

interface IState {
    text:any;
    todo: string[];
    fruits:{id:number,text:string}[]
 }
 interface Update{
     target:{value:string}
 }
export class ToDo extends React.Component<{},IState>{
    state={
        text:'',
        todo:[] as string[],
        fruits: [
            {id: 0, text: 'apple'},
            {id: 1, text: 'orange'},
            {id: 2, text: 'banana'},
            {id: 3, text: 'apricot'},
            {id: 4, text: 'tangerine'},
            {id: 5, text: 'pomegranate'}
          ]  
    }
   //add item
  handleAddTodo  = () => {
    let term =this.state.text;
    let fruits=this.state.fruits;
    const idgen = uuidv1();
    term !== '' && this.setState({
        fruits:fruits.concat({
            id:idgen,
            text:term
        }),
        text:''
      })  
  }
 //remove items
 handleRemove =(id:any) => {
    this.setState({
      fruits: this.state.fruits.filter((todoItem) => {
        return todoItem.id !== id
      })
    })
  };

//update text
updateText=(e:Update)=>{
    this.setState({text:e.target.value});
}
//move element down
moveDown=(id:number,index:number)=>{
    let fruitsArr=this.state.fruits;
    let test =fruitsArr.filter(fruit =>fruit.id!==id);
    test.splice(index+1,0,fruitsArr[index]);//splice(start,amount to remove,numbers to enter)
    this.setState({
        fruits:test
    })
}
moveUp=(id:number,index:number)=>{
    let fruitsArr=this.state.fruits;
    let test=fruitsArr.filter(fruit =>fruit.id!==id);
    test.splice(index-1,0,fruitsArr[index]);
    this.setState({
        fruits:test
    })
}

    render(){
        const {text,todo,fruits}=this.state;
        return(
            <div className='wrapper'>
                <h1 className='wrapper__title'>Todo</h1>
                <ul className='wrapper__ul'>
                    {
                        fruits.map((fruitItem,index) => {
                        return(
                                <li key={fruitItem.id} className='wrapper__ul__li'>
                                 <span>
                                    <button className='wrapper__ul__button__up' onClick={()=>this.moveDown(fruitItem.id,index)}>&#8595;</button> 
                                    <button className='wrapper__ul__button__down' onClick={()=>this.moveUp(fruitItem.id,index)}>↑</button> 
                                    {fruitItem.text}   </span>
                                    <button onClick={()=>this.handleRemove(fruitItem.id)} className='wrapper__ul__button'>X</button>
                                </li> 
                        )          
                        })
                    }     
                </ul>
                <div className='wrapper__search'>
                    <input type="text" onChange={this.updateText} value={text} className='wrapper__search__input' /> 
                    <button onClick={this.handleAddTodo} className='wrapper__search__button'>Add</button>
                </div>
               
            </div>
        )
    }
}
