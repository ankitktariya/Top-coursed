
import React from "react";
import {FcLike,FcLikePlaceholder} from 'react-icons/fc'
import { toast } from "react-toastify"

function Card({course ,liked,setLinked}){
    
    function clickHandler(){
        if(liked.includes(course.id)){
            //phle set hi present;
            setLinked((prev)=>prev.filter((cid)=>(cid!==course.id)));
            toast.warning("like removed");
        }
        else{
            //phle se like nhi hai
            //So i have to insert i
           
            setLinked((prev)=>[...prev,course.id]);

            
            toast.success("Linked")
        }

    }
    console.log(course)
    return (
        <div  className="w-[300px] bg-gray-600 rounded-md overflow-hidden">
            <div className="relative ">
                <img src={course.image.url} alt={course.title} />


                <div className="absolute w-[40px] h-[40px] bg-white rounded-full right-2 bottom-3 grid place-items-center">
                    <button onClick={clickHandler}>
                        {liked.includes(course.id)?
                        <FcLike fontSize="1.75rem"/>:
                        <FcLikePlaceholder fontSize="1.75rem"/>}
                    </button>

                </div>
            </div>
            <div className="p-4 ">
                <p className="text-white font-semibold text-lg loading-6">{course.title}</p>
                <p className="text-white mt-2 ">{
                    course.description.length>100?
                    (course.description.substring(0,100))+"...":
                    (course.description)
                }



                </p>
    
                </div>


        </div>
    )
}
export default Card;