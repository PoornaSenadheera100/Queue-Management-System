import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let token = sessionStorage.getItem("qmSystemTokKey");

    useEffect(()=>{
        
        if(token === null){
            console.log("Token is null");
        }else{
            console.log("Token is here.");
            window.location.replace(`http://localhost:3000/${token}/menu`);
        }
    }, [token]);

    function validate(){
        axios.get(`http://localhost:8070/user/validate/${username}`).then((res)=>{
            if (res.data.length === 0){
                console.log("No Account");
            }else{
                if (res.data[0].password === password){
                    console.log("Success");
                    generateToken();
                    window.location.replace(`http://localhost:3000/${token}/menu`);
                }else{
                    console.log("Fail");
                }
            }
        })
    }

    function generateToken(){
        let generatedToken = Math.random();
        generatedToken = generatedToken.toString();
        sessionStorage.setItem("qmSystemTokKey", generatedToken);
    }

    return(
        <div className="text-center container d-flex justify-content-center p-3 mb-2 bg-dark text-white" style={{width:"50%"}}>
            <form className="form-signin">
                <h2>Queue Management Portal</h2>
                <br></br>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" placeholder="Username" className="form-control" onChange={(e)=>{
                        setUsername(e.target.value);
                    }}></input>
                </div>
                <br></br>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" placeholder="Password" className="form-control" onChange={(e)=>{
                        setPassword(e.target.value);
                    }}></input>
                </div>
                <br></br>
                <br></br>
                <button style={{width:"100%"}} className="btn btn-lg btn-success btn-block" type="button" onClick={validate}>Login</button>
                <br></br>
                <br></br>
            </form>
        </div>
    )
}