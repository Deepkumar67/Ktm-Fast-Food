import React, {useReducer, useContext, createContext} from 'react';
import App from '../App.js';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state,action) =>{
    switch(action.type){
        case "ADD":
            return [...state,action.item];
        default:
            throw new Error(`unknown action ${action.type}`)
         
    }
};
export const CartProvider = () => {
    const[state, dispatch] = useReducer(reducer, []);
    return (
        <CartDispatchContext.Provider value = {dispatch}>
            <CartStateContext.Provider value = {state}>
                <App/>
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    );
};


export const useCart = () => useContext(CartStateContext);
export const useDisptachCart = () => useContext(CartDispatchContext);