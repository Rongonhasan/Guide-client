import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AllServices from './AllServices';
import SyncLoader from "react-spinners/SyncLoader";

const Service = () => {
    const service= useLoaderData()
    const [loading, setLoading] = useState(false);

    useEffect(() =>{
  setLoading(true);
  setTimeout(() =>{
setLoading(false);
  },60)
    },[])
    return (

        <div>
            <div>
            {
                loading ?
                <SyncLoader
               className='flex justify-center items-center '
                loading={loading}
                size={10}
                />
              :
              <div>
<h1 className="text-3xl font-bold py-10 text-center ">Services</h1>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  '>
            {
              service.map(e=><AllServices key={e._id}
                 e={e}></AllServices>)  
            }
           
        </div>
       <div className='text-center my-5'>
      <Link to="/services"> <button className='btn btn-primary'>See All</button></Link>
       </div>
              </div>
            }
            </div>       
    </div>
    );
};

export default Service;