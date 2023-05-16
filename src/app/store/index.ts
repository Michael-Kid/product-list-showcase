import { createStore, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
import { Action, StoreState } from "./interface";
import reducer from "./rootReducer";

type DispatchType = (args: Action) => Action;

const store: Store<StoreState, Action> & {
    dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))

export default store;