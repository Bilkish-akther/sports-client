import { useEffect, useState } from "react";
import PopulerInst from "../page/Home/PopulerIns/PopulerInst";
import useInstructor from "../hooks/useInstructor";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";



const Instructors = () => {
    const { data: users = [], refetch } = useQuery(["users"], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    });
    
    const [populers] = useInstructor()

    return (
        <div>

            <Helmet>
                <title>Sports   Club BD || Instructor</title>
            </Helmet>


        
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    populers.map(populer => <PopulerInst
                        key={populer.id}
                        item={populer}
                    ></PopulerInst>)
                }
           
     


          </div>
        </div >
    );
};

export default Instructors;