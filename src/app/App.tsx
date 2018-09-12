import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ToDo } from './components/ToDo';

export class App extends React.Component{
    render(){
        return(
            <div>
                <ToDo/>
            </div>
        )
    }
}
