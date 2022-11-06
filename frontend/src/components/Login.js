import React, { useState } from "react";

export default function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function validate(){
        console.log(username, password);
    }

    return(
        <div>
            <form onSubmit={validate}>
                Username
                <input type="text" placeholder="Username" onChange={(e)=>{
                    setUsername(e.target.value);
                }}></input>
                <br></br>
                Password
                <input type="password" placeholder="Password" onChange={(e)=>{
                    setPassword(e.target.value);
                }}></input>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}