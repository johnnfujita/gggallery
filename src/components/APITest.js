import React, {useEffect, useState} from 'react';
import axios from 'axios';

const getApi = async () => {
    try {
      return await axios.get('http://localhost:8000/ggg_art/artworks/')
    } catch (error) {
      console.error(error)
    }
  }
  
  const printdata = async () => {
          const apidata = await getApi()
  
          if (apidata.data) {
              const result = apidata.data
                  return result 
          }
  }
  

  
  


const APITest = () => {

    useEffect(()=>
        {
            printdata().then((result)=>{ 
                console.log(result)
               
            })
        }
    )

    //var [appState, setAppState] = useState({loading: false, response: null});

    // useEffect(() => {
    //     setAppState({loading: true})
    //     const apiUrl = 'http://127.0.0.1:8000/ggg_art/artworks/';
        
    //     axios.get(apiUrl, {
    //         headers: {
    //         "Access-Control-Allow-Origin": "http://127.0.0.1:8000", 
    //         "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
    //         "Content-Type": "application/json;charset=UTF-8"                   
    //     }}).then((resp) => {
    //         const apiData = resp.data
    //         setAppState({
    //             loading: false,
    //             response: apiData
    //         })
    //     }).catch((err)=>{
    //         console.log(err)
    //     });
    //     console.log(appState.response)
    // }, [setAppState, appState])

    return (
        <div style={{background: "white", height: "100vh", width: '100vw'}}>
            <h1>NAOOOOOOO EXISTOOOO</h1>
        
        </div>
    )
}

export default APITest
