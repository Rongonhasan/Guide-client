// import React from 'react';

// const Contact = () => {
//     return (
//         <div>
//             <h1 className="text-3xl font-bold py-10 text-center ">Contact</h1>
//                <section className="bg-gray-200">
//                 <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
//                     <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
//                         <div className="lg:col-span-2 lg:py-12">
//                             <p className="max-w-xl text-lg">
//                                 Do you have any query? Feel free to contact us anytime. We are always ready to help you.
//                             </p>
//                             <div className="mt-8">
//                                 <h1 className="text-2xl font-bold text-blue-600">
//                                     01793324222
//                                 </h1>
//                                 <address className="mt-2 not-italic">
//                                     House 101,  Main Road , Pti Mor  Bogura-5800
//                                 </address>
//                             </div>
//                         </div>
//                         <div className="rounded-lg  p-8 shadow-lg lg:col-span-3 lg:p-12">
//                             <form  className="space-y-4">
//                                 <div>
//                                     <label className="sr-only" htmlFor="name">Name</label>
//                                     <input  className="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Name" type="text" id="name" name="name" />
//                                 </div>
//                                 <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                                     <div>
//                                         <label className="sr-only" htmlFor="email">Email</label>
//                                         <input className="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Email address" type="email" id="email" name="email" />
//                                     </div>
//                                     <div>
//                                         <label className="sr-only" htmlFor="phone">Phone</label>
//                                         <input className="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Phone Number" type="tel" id="phone" name="phone" />
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <label className="sr-only" htmlFor="message">Message</label>
//                                     <textarea className="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Message" rows={8} id="message" defaultValue={""} name="message" />
//                                 </div>
//                                 <div className="mt-4">
//                                     <button type="submit" className="inline-flex w-full items-center justify-center rounded-lg bg-[#1254be]  px-5 py-3 text-white sm:w-auto">
//                                         <span className="font-medium"> Send Enquiry </span>
//                                         <svg xmlns="http://www.w3.org/2000/svg" className="ml-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                                         </svg>
//                                     </button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Contact;
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";


const Contact = () => {
 

  return (
    <>
 

    {/* map */}
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-black text-center mb-12" data-aos="fade-up">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address */}
          <div
            className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg flex items-start space-x-4"
            data-aos="fade-right"
          >
            <FaMapMarkerAlt className="text-4xl text-blue-600" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Our Address</h3>
              <p className="text-gray-700">Pti Mor, Bogura, Bangladesh</p>
            </div>
          </div>
          
          {/* Phone */}
          <div
            className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg flex items-start space-x-4"
            data-aos="fade-up"
          >
            <FaPhoneAlt className="text-4xl text-green-600" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Call Us</h3>
              <p className="text-gray-700">01793324222</p>
            </div>
          </div>
          
          {/* Email */}
          <div
            className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg flex items-start space-x-4"
            data-aos="fade-left"
          >
            <FaEnvelope className="text-4xl text-red-600" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Email Us</h3>
              <p className="text-gray-700">rongonhasan2@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>

        <div className="mt-8">
          <iframe
            className="w-full h-96 rounded-lg"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=bogura+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
    </>
   
  );
}

export default Contact;
