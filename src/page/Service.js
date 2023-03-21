import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AllServices from './AllServices';

const Service = () => {
    const service= useLoaderData()
    return (
        <div>
             <h1 className="text-3xl font-bold py-10 text-center ">Services</h1>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
              service.map(e=><AllServices key={e._id}
                 e={e}></AllServices>)  
            }
           
        </div>
       <div className='text-center my-5'>
      <Link to="/services"> <button className='btn btn-error'>See All</button></Link>
       </div>
       
    </div>
    );
};

export default Service;