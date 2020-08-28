import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import {useSelector, useDispatch } from 'react-redux';

import { authLogin } from '../store/actions/auth';
import { Formik, Field } from 'formik';

import { withStyles, createMuiTheme } from "@material-ui/core/styles";
import { TextField, Button, InputAdornment, IconButton } from "@material-ui/core"
import { AccountCircle, Visibility, VisibilityOff } from "@material-ui/icons"
import { yellow } from "@material-ui/core/colors"


  
  const theme = createMuiTheme({
    palette: {
      primary: yellow,
    },
  });

  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(yellow[700]),
      backgroundColor: yellow[700],
      width: "100px",
      '&:hover': {
        backgroundColor: yellow[800],
      },
    },
  }))(Button);


const Login = ({history}) => {
    

    const dispatch = useDispatch();
    const token = useSelector( state => state.auth.auth_token)
    const warning = useSelector(state => state.errors.error)
    
    const [state, setstate] = useState({ 
        username: "",
        password: "",
        showPassword: false,
        isRendered: false
    })
    console.log("Token Here", token)
    
    useEffect(()=> {
        dispatch(authLogin(state.username, state.password))
        setstate({
            ...state,
            isRendered: true
        })
    }, [state.isRendered])
    

    
   
    const handleMouseDownPassword = (e) => {
        e.preventDefault();
      };

    const handleClickShowPassword = (e) => {
        e.preventDefault();
        setstate({...state, showPassword: !state.showPassword });
    }
    
    return (
        <div className="auth-container">
            <div className="title-and-form">
                <div className="title">Login</div>

                <div className={state.isRendered ? "auth-box auth-box-rendered" : "auth-box"}>
                    <div className="logo-container">

                        <img className="login-logo-vidas" src={require("../assets/virtualdemocracies-association.jpg")}/>

                    </div>
                    <Formik

                        initialValues={{ username: '', password: ""}} 
                        onSubmit={(data, {setSubmitting, resetForm}) => {
                            setSubmitting(true);
                            console.log(data, "adjso");
                            dispatch(authLogin(data.username, data.password))
                            setSubmitting(false);
                            resetForm()
                    }}
                    >
                        {({values, isSubmitting, handleSubmit}) => (
                            <form className="form-container" onSubmit={handleSubmit}>
                                <Field 
                                    required
                                    name="username" 
                                    as={TextField} 
                                    type="input" 
                                    label="username" 
                                    variant="outlined" 

                                />
                                <Field
                                    required
                                    style={{marginTop: "12px"}}
                                    variant="outlined"
                                    as={TextField}
                                    name="password"
                                    label="password"
                                    type={state.showPassword ? 'text' : 'password'}
                                    InputProps={{
                                        endAdornment: (
                                      <InputAdornment position="end">
                                        <IconButton

                                          onClick={handleClickShowPassword}
                                          onMouseDown={handleMouseDownPassword}
                                        >
                                          {state.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                      </InputAdornment>
                                    ),}}
                                />
                                <div className="login-button-container">   
                                    <ColorButton color="primary"  disable={isSubmitting.toString()} type="submit">SUBMIT</ColorButton>
                                <div className="login-forget-register">
                                    <div className="login-issues-item-container"><p>Não é membro?&nbsp; &nbsp;</p><Link to="/vidas/register/"> Registre Aqui</Link></div>
                                    <div className="login-issues-item-container"><p>Esqueceu a Senha?</p><Link to="/vidas/password-reset/"> Recupere Aqui</Link></div>
                                </div>
                                </div>
                            </form>

                        )}

                    </Formik>
                                        
                </div>
            </div>    
            <div className="login-bottom-content">
                  
                <p>The source code is licensed MIT, available at <a href="https://github.com/johnnfujita/virtualdemocracies-backend">Github</a></p>                             
                <p><a href="https://virtualdemocracies.com">Virtual Democracies</a> by <a href="https://microappollis.com">Microappollis</a>.</p>
            </div>
            
        </div>
       
    )
}

export default Login;
