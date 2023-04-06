import {useState,useEffect} from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';

export default function Aboutus(){
const [loader,setLoader] = useState(true);
    const [aboutus,setAboutus] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8000/Aboutus')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setAboutus(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])



    return(
        <>
<Typography>Name: SHIVANI</Typography>
<Typography>Father Name: RAVINDER</Typography>
<Typography>Mother Name: MADHAVI</Typography>
<Typography>Email:shivani021101@gmail.com</Typography>
<Typography>Phone No.: 8297261818</Typography>
        </>
        
    )
    }