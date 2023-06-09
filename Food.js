import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../actions/postAction'
import {bindActionCreators} from 'redux'

const Food = () => {
    const task = useSelector((state)=>state.cart.items.menu)
    const dispatch =useDispatch()
    const {deductFromCart,addToCart}= bindActionCreators(actionCreators,dispatch)
  return (
    <>
        {task && task.map((item)=>(
            <div>
                <p>{item.item}</p>
                <p>{item.price}</p>
                <button className="btn btn-primary mx-2" onClick={()=>deductFromCart(item.price)}>-</button>
                    Add to Cart
                <button className="btn btn-primary mx-2" onClick={()=>addToCart(item.price)}>+</button>
            </div>
        ))}
    </>
  )
}

export default Food