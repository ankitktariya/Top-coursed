import React, { useEffect, useState } from "react";
import { filterData, apiUrl } from "./data";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import Spinner from "./Components/Spinner"
import { toast } from "react-toastify"


function App(){
  const [courses,setCourses]=useState()
  const [loading,setloading]=useState(true);
  const [category,setcategory]=useState(filterData[0].title);
  useEffect(()=>{
    async function fetchData(){
      setloading(true);
      try{
        let res=await fetch(apiUrl)
        let output=await res.json();
        //Save data
        console.log(output);
        setCourses(output.data);

      }
      catch(e){
        toast.error(" error found");
      }
      setloading(false);
    }
    fetchData()
  },[])
  return (
    <div className="flex flex-col min-h-screen bg-gray-300">
      <div >
      <Navbar></Navbar>
      </div>

      <div className="bg-gray-300">
      <div>
      <Filter filterData={filterData} setcategory={setcategory} category={category}></Filter>
      </div>

      <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center flex-wrap  items-center min-h-[50%]">
      {
        loading?(<Spinner/>):(<Cards courses={courses} category={category}/>)
      }

      </div>
      
      </div>
      
    </div>
  )
}
export default App;