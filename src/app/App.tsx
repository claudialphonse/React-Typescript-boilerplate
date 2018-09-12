import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TodoRedux } from './components/TodoRedux';

export class App extends React.Component{
    render(){
        return(
            <div>
                <TodoRedux/>
            </div>
        )
    }
}
