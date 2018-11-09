import { dispatch } from '../util';
const uuidv1 = require('uuid/v1');

export function addTodo(text: string) {
  return dispatch({
    type: 'ADD_TODO',
    id: uuidv1(),
    text
  });
}
export function removeTodo(id: number) {
  return dispatch({
    type: 'DELETE_TODO',
    id
  });
}
export function moveDown(id: number, index: number) {
  return dispatch({
    type: 'MOVE_DOWN',
    id,
    index
  });
}
export function moveUp(id: number, index: number) {
  return dispatch({
    type: 'MOVE_UP',
    id,
    index
  });
}
export function search(text: string) {
  return dispatch({
    type: 'SEARCH_TODO',
    text
  });
}
export function search100(text: string) {
  return dispatch({
    type: 'SEARCH_TODO',
    text
  });
}