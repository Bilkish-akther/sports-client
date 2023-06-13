import { useEffect, useState } from "react";




const useClass = () => {

    const [classes, setClasses]= useState([])
    const [loading, setLoading]=useState(true)
    
    useEffect(()=>{
      fetch('https://sports-academi-server-nrx8uamts-bilkish-akther.vercel.app/addClasses')
      .then(res=>res.json())
      .then(data=>{
        setLoading(false)
        setClasses(data)
      })
    },[])
    return [classes,loading]
};

export default useClass;