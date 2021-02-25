import React, { useState, useEffect } from 'react'
import './Orders.css'
import { db } from './firebase';
import { useStateValue } from './StateProvider';
import Order from './Order';


function Orders() {
    const [orders, setOrders] = useState([]);
    const [{basket, user}, dispatch] = useStateValue();
    
    // onSnapshot gives a real-time snapshot of database
    // which means if you push value, remove data from database, it will provide a real-time response
    useEffect(()=>{
        if(user){
            db.collection('users').doc(user?.uid).collection('orders').orderBy('created', 'desc')
            .onSnapshot(snapshot => (
              setOrders(snapshot.docs.map(doc => ({
                  id: doc.id,      // orderId
                  data: doc.data() // amount, basket
              })))
            ))
        }
        else{
            setOrders([]);
        }
    }, [user]) // because we are using [user] in if statement when user changes useEffect should run
    return (
        <div className="orders">
            <h1>Your orders</h1>
            <div className="orders__order">
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders