import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { buyBook } from '../redux';

function HookBookContainer(){
    const numberOfBooks=useSelector(state=>state.numberOfBooks)
    const dispatch=useDispatch()
    return (
        <div>
          <h1>Hook container</h1>
          <h2>Number of Books={numberOfBooks}</h2>
          <button onClick={()=>dispatch(buyBook())}>BuyBook</button>
        </div>
    )
}

export default HookBookContainer;

