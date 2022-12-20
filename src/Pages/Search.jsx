import React, { useEffect, useState } from 'react'
import {Box, Input, Button, Heading, SimpleGrid} from "@chakra-ui/react"
import axios from 'axios';

const Search = () => {

    const [data,setData]= useState([])
    const[searchValue,setSearchValue]= useState("");
    const [load,setLoad]= useState(false);
     const [flag,setFlag]= useState(false);
    
    const handleSearch=(e)=>{

        e.preventDefault();
        console.log(searchValue);
        setLoad(true)
         axios.get(`https://dummyjson.com/products/search?q=${searchValue}`)
        .then((r)=>{
          console.log(r.data.products.length);
          if(r.data.products.length===0)
          {
            
            setFlag(true);
          }
          else{
            setData(r.data.products)
            setFlag(false)
          }
         
          console.log(r)
          setSearchValue("");
          setLoad(true)
        })
     
        .catch((e)=>{
          console.log(e);
        })
  
     }

    
    console.log(flag);
    return (
        <>
        <Box>
        <h1>Search</h1>
        <form onSubmit={handleSearch}>
          <Input width={"50%"}   type="text"
          placeholder='techstack'
          value={searchValue}
          onChange={(e)=> setSearchValue(e.target.value)}
            />
            <Button type='submit'>Search</Button>
            {/* <Button onClick={handleReset} >Reset</Button> */}
        </form>
    </Box>

  {flag===false ? (



    <Box>
       <SimpleGrid columns={3} spacing={5}>
       {
           data.map((item)=>{
                return <Box border={"1px solid black"} key={item.id}>
                        <Box ><img width={"200px"} height={"200px"}  src={item.thumbnail} alt="" /></Box>
                       <Box>{item.brand}</Box>
                       <Box>{item.title}</Box>
                       <Box>{item.description}</Box>
                       <Box>{item.price}</Box>
                      

                    </Box>
            })

        }
      </SimpleGrid>
    </Box>
  ) :(
         <Box>
              <Heading>Oops! No Result Available</Heading>
         </Box>
  )}
    </>
    )
}

export default Search
