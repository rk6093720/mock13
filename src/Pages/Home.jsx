import { Box, Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import  axios  from 'axios';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Home = () => {
     const [data,setData]= useState([]);
     
   
        const  handleC =(item)=>{
            console.log(item);
          localStorage.setItem("category",item);
    
        }

  
      const getdata=async()=>{
        return await axios.get("https://dummyjson.com/products/categories")
        .then((r)=>{
             setData(r.data);
             
           
           })
        .catch((e)=>{
            console.log("e",e)
        })
      }


     useEffect(()=>{
         getdata()
     },[])
  

console.log(data);
    return (
        <div   className='item'>
          
                 { data.map((item)=>{
                    return <Box  border={"1px solid green"}   key={item.id}>
                        <Link to={"/product"}>
                        <Button textAlign={"center"} onClick={()=>handleC(item)} box-shadow={ "rgba(0, 0, 0, 0.35) 0px 5px 15px"} marginTop={"15px"}>{item}</Button>
                        </Link>
                        </Box>
                 })}
            </div>
       
    )
}

export default Home
