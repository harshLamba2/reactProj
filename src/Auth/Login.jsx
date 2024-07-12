import { useEffect, useState } from "react"


export default function Login(){
    
const charterIcon='/charterIcon.png';
    
const [pageHeight, setPageHeight]=useState(window.innerHeight);



useEffect(()=>{
    setPageHeight(window.innerHeight);

}, []);



// Styling

    return(
        <div style={{height:pageHeight, width:'100%', backgroundColor:'#3156A4'}} className="container-fluid d-flex justify-content-center ">
            <div className="row w-100 py-4 px-sm-0 px-2 ">

                <div className="col-sm-8 col-md-6 offset-sm-2 offset-md-3 p-2 text-center bg-white rounded-lg" >
                <img alt="Icon" src={charterIcon} className="m-auto loginImgLogo"/>
                <br/>
                <input className="w-75 p-1 p-md-2 rounded-md"/>
                </div>

            </div>
        </div>
    )
}