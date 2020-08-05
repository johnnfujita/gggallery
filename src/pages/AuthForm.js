import React, {useState, useContext} from 'react'
import axios from 'axios';
import { HOST } from '../apiConfig';
import AuthContext  from '../context/AuthContext';
import { Redirect } from 'react-router-dom';

const AuthForm = ({role, history}) => {

    const Auth = useContext(AuthContext)

    const [authInfo, setAuthInfo] = useState({
        username: "",
        password: "",
    })
    
    const handleChange = e => {
        setAuthInfo({
            ...authInfo,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        axios.post(`${HOST}/ggg_art/accounts/${role}/`, authInfo)
            .then(res => {
                localStorage.setItem("token", res.data.token.access)
                console.log(res.data.token)
                history.push("/")
            })
            .catch(err => console.log(err))        
    }

    return (
        !Auth.auth ? (
        <>
        <h1 style={{color: "white"}}>{role}</h1>
        <form style={{background: "black" , display: "flex", alignItems: "center", justifyContent: "center", height:"100vh", width: "100vw" }} onSubmit={handleSubmit}>
            <input
                name="username"
                value={authInfo.username}
                onChange={handleChange}
                
            />
            <input
                name="password"
                type="password"
                value={authInfo.password}
                onChange={handleChange}
            />
            <button type="submit">SUBMIT</button>
        </form>
        </>
        ) : (<Redirect to="/profile" />)
    )
}

export default AuthForm
