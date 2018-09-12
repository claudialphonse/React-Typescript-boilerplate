 interface ITodo{
    id:number;
    text?:string;
 }
 var fruits=[
    {id: 0, text: 'apple'},
    {id: 1, text: 'orange'},
    {id: 2, text: 'banana'},
    {id: 3, text: 'apricot'},
    {id: 4, text: 'tangerine'},
    {id: 5, text: 'pomegranate'}
  ] ;
const todos = (state:any = fruits, action:any) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            id: action.id,
            text: action.text
          }
        ]
        case 'DELETE_TODO':
        return  state.filter((fruit:ITodo)=>fruit.id!== action.id)

        case 'MOVE_DOWN':
        const test =state.filter((fruit:ITodo) => fruit.id !== action.id);
            test.splice(action.index+1,0,state[action.index]);
            console.log(test);
        return test

        case 'MOVE_UP':
        const test1 =state.filter((fruit:ITodo) => fruit.id !== action.id);
            test1.splice(action.index-1,0,state[action.index]);
        return test1

      default:
        return state
    }
  }
  export default todos;