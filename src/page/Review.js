import React from 'react';


const Review = ({e}) => {
    const {displayName,email,photoURL,addReview}=e
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                              
                                 <img src={photoURL} alt="Avatar Tailwind CSS Component" />
                         
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{displayName}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                {addReview}
            </td>

        </tr>

    );
};

export default Review;