import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contex/AuthContex';

import MyReview from './MyReview';

const MyReviewAdmin = () => {
const {user}=useContext(AuthContext)
const [myReview,setMyReview]=useState([])
// console.log(myReview)

useEffect(()=>{
    fetch(`https://guide-server.vercel.app/review?email=${user?.email}`)
    .then(res=>res.json())
    .then(data=>setMyReview(data))
},[user?.email])

// console.log(myReview,user)
    return (
        <div className='grid sm:grid-cols-col md:grid-cols-2'>
            {
                myReview.map(e=><MyReview e={e} key={e._id} ></MyReview>)
            }
        </div>
    );
};

export default MyReviewAdmin;