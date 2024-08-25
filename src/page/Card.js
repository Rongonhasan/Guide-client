import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../contex/AuthContex';
import Review from './Review';
import toast, { Toaster } from 'react-hot-toast';
import useTitle from '../hook/useTitle';


const Card = () => {

    const { user } = useContext(AuthContext)
    const { photoURL, displayName, email } = user

    const services =useLoaderData();
    const {_id,tittle, Description, img, price, } = services;

    const [review, setReview] = useState([])
    useEffect(() => {
        fetch(`https://guide-server.vercel.app/review?service=${_id}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [_id])

    useTitle("Service Details")
    const handleSubmit = (e) => {
        e.preventDefault()
        const review = e.target.review.value;
        const reviewData = {
            service: _id,
            servicesName: tittle,
            photoURL,
            displayName,
            addReview: review,
            email
        }

        fetch("https://guide-server.vercel.app/review", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Review Submit Successfully')
                    e.target.reset();
                    window.location.reload(true)

                }
            })
        console.log(reviewData);
    }
    return (
        <div>
               <Toaster/>
               <h1 className='mb-4'>..</h1>
           <div>
       <div>
       <div className="my-10 border-5">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <img src={img} alt='' className=" rounded-lg shadow-2xl" />
                        <div className='px-5 mt-10'>
                            <h1 className="text-5xl font-bold">{tittle}</h1>
                            <div className="badge badge-secondary">BDT:{price}</div>
                            <p className="py-6">{Description}</p>

                        </div>
                    </div>
                </div>
                {/* service details ok end now */}
       </div>


                    <div>
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            <thead>
                                <tr>

                                    <th>User</th>
                                    <th>Review & Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    review.map(e=><Review e={e} key={e._id}></Review>)
                                }
                                
                            </tbody>
                        </table>
                    </div>
                </div>

      </div>

      <form onSubmit={handleSubmit}>
                <div className='border-2  rounded-2xl mx-auto my-10'>
                    <div className='text-center my-2'><h2 className='text-4xl  font-bold'>Please Review our Service</h2></div>
                    <div className='flex px-10 my-5 py-2 gap-2'>
                        <label className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt='' src={user?.photoURL} />
                            </div>
                        </label>
                        <h2 className='text-3xl'>{displayName}</h2>
                    </div>
                    
                    <div className=' w-[80%] mx-auto mb-10 '>
                        <input name="review" type="text" placeholder="Type here" className="input input-bordered input-primary w-full px-10 mb-3 gap-2" /><br />
                        <button className='btn btn-outline btn-secondary' type='submit'>Post</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Card;