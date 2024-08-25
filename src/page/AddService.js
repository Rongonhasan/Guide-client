import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useTitle from '../hook/useTitle';


const AddService = () => {
    const navigate=useNavigate()

    const handleAddService = (e) => {
        e.preventDefault()
        const form = e.target;
        const tittle = form.tittle.value;
        const price = form.price.value;
        const img = form.img.value;
        const Description = form.Description.value;
        console.log(tittle, price, img, Description);

        const newService = {
            tittle,
            img,
            price,
            Description
        }
  
        fetch('https://guide-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                   toast.success('Service Add Successfully')
                    form.reset();
                    navigate('/services')
                }
            })
            .catch(error => console.error(error));


    }
    useTitle("AddService")
    return (

       <div>
                    <Toaster/>
         <form  onSubmit={handleAddService} >
                <div className='grid grid-cols-1 gap-5 my-10 '>
                    <input name="tittle" type="text" placeholder="Service Name" required className="input input-bordered input-error w-full " />
                    <input name="img" type="text" placeholder="Service Photo Url  " required className="input input-bordered input-error w-full" />
                    <input name="price" type="text" placeholder="price" required className="input input-bordered input-error w-full" />
                </div>
                <textarea name="Description" className="textarea textarea-bordered textarea-error  h-24 w-full" placeholder="Describe Your service" required></textarea>
                <div className='text-center my-5'>
                    <input className='btn btn-warning' type="submit" value="Add Service" />
                </div>
            </form>
       </div>
    );
};

export default AddService;