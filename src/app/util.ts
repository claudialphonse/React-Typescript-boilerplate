import { store } from './store';

export function dispatch(action: any) {
  return store.dispatch(action);
}
