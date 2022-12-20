import { Box, SimpleGrid } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Product = () => {
      const item =localStorage.getItem("category")
      const [pro,setPro]= useState([])
    const getProduct=async()=>{
      return await axios.get(`https://dummyjson.com/products/category/${item}`)
      .then((r)=>{
        setPro(r.data.products)
          console.log(r.data.products);
      })
      .catch((e)=>{
        console.log(e);
      })
    }


    useEffect(()=>{
      getProduct()
   },[])
   
    return (
      <>
         <SimpleGrid columns={3} spacing={5}>
            {
              pro?.map((item)=>{
                return <div key={item.id}>
                       <div ><img width={"200px"} height={"200px"}  src={item.thumbnail} alt="" /></div>
                       <div>{item.brand}</div>
                       <div>{item.title}</div>
                       <div>{item.description}</div>
                       <div>{item.price}</div>
                </div>
              })
            }
         </SimpleGrid>
      
      
      </>

         
    )
}

export default Product
