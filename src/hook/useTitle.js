import { useEffect } from "react";

const useTitle = title => {
   useEffect(()=>{
    document.title=`${title} -Guide`;
   },[title])
};

export default useTitle;