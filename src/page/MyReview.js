import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import useTitle from '../hook/useTitle';


const MyReview = ({ e }) => {
    const { _id, addReview, displayName, email, service, servicesName, photoURL } = e
    console.log(_id, service)
    const handleDelete = (id) => {
        const proceed = window.confirm('are You sure,you want to cancel this order')
        if (proceed) {
            fetch(`https://guide-server.vercel.app/review/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json)
                .then(data => {
                    toast.error("delete review successfully")
                    window.location.reload(true)
                }) 
        }
    }
    useTitle("MyReview")
    const handleSubmit = (e) => {
        e.preventDefault()
        const updateData = e.target.data.value;
        const data = {
            addReview: updateData,
        }
        fetch(`https://guide-server.vercel.app/review/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                e.target.reset()
                if (data.modifiedCount > 0) {
                    window.location.reload(true)
                    toast('Review Update Successfully ', {
                        icon: '👏',
                    });
                }

            })
            .catch(error => console.log(error))
    }

    return (
        <div className='border-2 my-10 py-0 w-[80%] rounded-md flex'>
            <div className="card ">
                <div className="card-body  text-center">
                    <h2 className="card-title text-primary">{servicesName}</h2>
                    <div className='flex justify-around text-2xl'>
                        <p> You: <span className='text-error'>{displayName}</span></p>
                        <img src={photoURL} alt=""  className=' avatar w-10 rounded-full'/>
                    </div>
                    <p className='text-start text-error text-xl'>Your Review:{addReview}</p>
                    <div className="card-actions ">
                        <form onSubmit={handleSubmit} className='gap-2 flex'>
                            <input name='data' className='input input-bordered w-full max-w-xs' type="text" placeholder='Update Review ' />
                            <button type='submit' className="btn btn-secondary">update</button>
                        </form>
                        <button onClick={() => handleDelete(_id)} className="btn btn-ghost">Delete</button>
                        <Toaster />
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    );
};

export default MyReview;