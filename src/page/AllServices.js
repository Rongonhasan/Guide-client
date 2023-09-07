 import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import useTitle from '../hook/useTitle';

 
 const AllServices = ({e}) => {
    const {_id,tittle, Description,img, price, } = e;
    const short = Description ? Description.slice(0, 100) + "......." : "";

 
    useTitle("allService")
    return (
        <div>
        <div className="card card-compact w-96 bg-base-100 my-6  border border-gray-200 rounded-lg">
           <figure>
           <PhotoProvider>
              <PhotoView src={img}>
                <img className='w-auto h-72 rounded-md object-cover'
                  src={img}
                  style={{ objectFit: "cover" }}
                  alt=""/>
              </PhotoView>
            </PhotoProvider>
           </figure>
           <div className="card-body">
               <h2 className="card-title">{tittle}</h2>
               <p className='text-2xl text-orange-600 font-semibold'>${price}</p>
               
               <p>{short}</p>
               <div className="card-actions justify-end">

                   <Link to={`/services/${_id}`}>
                       <button className="btn btn-primary">Read More</button>
                   </Link>
                   
                  
               </div>
           </div>
       </div>
       <div>
      
       </div>
      </div>
    );
 };
 
 export default AllServices;