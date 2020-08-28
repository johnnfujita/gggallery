import React, { useState, useEffect } from 'react';
import { Link, Redirect } from "react-router-dom";

import {connect } from 'react-redux';

import { register } from '../store/actions/auth';
import { Formik, Field } from 'formik';

import { withStyles} from "@material-ui/core/styles";
import { TextField, Button, InputAdornment, IconButton } from "@material-ui/core"
import {  Visibility, VisibilityOff } from "@material-ui/icons"
import { cyan } from "@material-ui/core/colors"


const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: cyan[800],
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: cyan[500]
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: "aaa",
        },
        '&:hover fieldset': {
          borderColor: cyan[500],
        },
        '&.Mui-focused fieldset': {
          borderColor: cyan[500],
        },
      },
    },
  })(TextField);
  
  

  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(cyan[300]),
      backgroundColor: cyan[300],
      width: "100px",
      borderRadius: '20px',
      '&:hover': {
        backgroundColor: cyan[500],
      },
    },
  }))(Button);


const Register = ({ register, history}) => {
    
    
    const [stateRender, setStateRender ] = useState({isRendered: false});
    useEffect(()=> {
       
        setStateRender({
            
            isRendered: true
        })
    }, [stateRender.isRendered])
    

    const [statePasswd, setStatePasswd ] = useState({showPassword:false});
    const [accountCreated, setAccountCreated] = useState(false);

    
  
    if (accountCreated) {
        return <Redirect to="/vidas/login" />
    }
   
    // const handleChange = (event) => {
    //     event.preventDefault();
    //     setFormData({
    //         ...formData,
    //         [event.target.name]: event.target.value
    //     })
       
    // };
    

    
   
    const handleMouseDownPassword = (e) => {
        e.preventDefault();
      };

    const handleClickShowPassword = (e) => {
        e.preventDefault();
        setStatePasswd({...statePasswd, showPassword: !statePasswd.showPassword });
    }
    
    return (
        <div className="register-auth-container">
            <div className="register-title-and-form">
                <div className="register-title">Cadastro</div>

                <div className={stateRender.isRendered ? "register-auth-box register-auth-box-rendered" : "register-auth-box"}>
                    <div className="register-logo-container">

                        <img className="register-login-logo-microappollis" src={require("../assets/microappollis-black-letters.jpg")}/>

                    </div>
                    <Formik

                        initialValues={{  
                            email: "", 
                            password: "", 
                            re_password: "",
                            name: "",
                            cpf: "",
                            address_street:"",
                            address_number: "",
                            complement: "",
                            card_holder_name: "",
                            card_number: "",
                            card_expiration: "",
                            card_type: "",
                            card_security_code: "",
                            card_brand: "" 
                    }} 
                        onSubmit={(data, {setSubmitting, resetForm}) => {
                            
                            setSubmitting(true);
                            console.log(data, "adjso");
                            
                                register(data.email, 
                                    data.password, 
                                    data.re_password,
                                    data.name,
                                    data.cpf,
                                    data.address_street,
                                    data.address_number,
                                    data.complement,
                                    data.card_holder_name,
                                    data.card_number,
                                    data.card_expiration,
                                    data.card_type,
                                    data.card_security_code,
                                    data.card_brand)
                            setSubmitting(false);
                            
                            resetForm()
                            setAccountCreated(true)
                            
                    }}
                    >
                        {({values, isSubmitting, handleSubmit}) => (
                            <form className="register-form-container" onSubmit={handleSubmit}>
                              
                                <Field 
                                    required
                                    name="email" 
                                    as={CssTextField} 
                                    type="input" 
                                    label="email" 
                                    variant="outlined" 
                                    
                                />
                               
                                <Field
                                    required
                                    style={{marginTop: "12px"}}
                                    variant="outlined"
                                    as={CssTextField} 
                                    name="password"
                                    label="Senha"
                                    type={statePasswd.showPassword ? 'text' : 'password'}
                                    InputProps={{
                                        endAdornment: (
                                      <InputAdornment position="end">
                                        <IconButton

                                          onClick={handleClickShowPassword}
                                          onMouseDown={handleMouseDownPassword}
                                        >
                                          {statePasswd.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                      </InputAdornment>

                                    ),}}
                                />

                                <Field
                                    required
                                    style={{marginTop: "12px"}}
                                    variant="outlined"
                                    as={CssTextField} 
                                    name="re_password"
                                    label="Confirme a senha"
                                    type={statePasswd.showPassword ? 'text' : 'password'}
                                    InputProps={{
                                        endAdornment: (
                                      <InputAdornment position="end">
                                        <IconButton

                                          onClick={handleClickShowPassword}
                                          onMouseDown={handleMouseDownPassword}
                                        >
                                          {statePasswd.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                      </InputAdornment>
                                      
                                    ),}}
                                />
                                <div className="register-section-title-container">
                                    <p className="register-section-title">Perfil</p>
                                </div>
                                <Field 
                                    required
                                    name="name" 
                                    style={{marginTop: "12px"}}
                                    as={CssTextField}  
                                    type="input" 
                                    label="Nome Completo" 
                                    variant="outlined"
                                    

                                />

                                <Field 
                                    required
                                    style={{marginTop: "12px"}}
                                    name="cpf" 
                                    as={CssTextField}  
                                    type="input" 
                                    label="CPF" 
                                    variant="outlined" 

                                />

                                <Field 
                                    required
                                    name="address_street" 
                                    style={{marginTop: "12px"}}
                                    as={CssTextField}  
                                    type="input" 
                                    label="Nome da Rua" 
                                    variant="outlined" 

                                />

                                <Field 
                                    required
                                    name="address_number" 
                                    style={{marginTop: "12px"}}
                                    as={CssTextField} 
                                    type="input" 
                                    label="Número" 
                                    variant="outlined" 

                                />

                                <Field 
                                    required
                                    name="complement" 
                                    style={{marginTop: "12px"}}
                                    as={CssTextField} 
                                    type="input" 
                                    label="Complemento (e.g. apto500)" 
                                    variant="outlined" 

                                />
                                <div className="register-section-title-container">
                                    <p className="register-section-title">Informação de Cobrança</p>
                                </div>
                                {/* <ThemeProvider theme={theme}>
                                <FormControl style={{marginTop: "10px"}}>
                                    <InputLabel id="demo-simple-select-label">Forma de Pagamento</InputLabel>
                                    <Select
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      name={"card_type"}
                                      value={formData.card_type}
                                      onChange={handleChange}
                                    >
                                      <MenuItem value="CreditCard">Crédito</MenuItem>
                                      <MenuItem value="DebitCard">Débito</MenuItem>
                
                                    </Select>
                                </FormControl>

                                <FormControl style={{marginTop: "20px"}}>
                                    <InputLabel id="demo-simple-select-label">Bandeira Cartão</InputLabel>
                                    <Select
                                    
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      name={"card_brand"}
                                      value={formData.card_type}
                                      onChange={handleChange}
                                    >
                                      <MenuItem value="Visa">Visa</MenuItem>
                                      <MenuItem value="MasterCard">Master Card</MenuItem>
                
                                    </Select>
                                </FormControl>
                                
                                </ThemeProvider> */}
                                <Field 
                                    required
                                    name="card_type" 
                                    style={{marginTop: "12px"}}
                                    as={CssTextField} 
                                    type="input" 
                                    label="Forma de pagamento" 
                                    variant="outlined"
                             

                                />
                                <Field 
                                    required
                                    name="card_brand" 
                                    style={{marginTop: "12px"}}
                                    as={CssTextField} 
                                    type="input" 
                                    label="Bandeira Cartão" 
                                    variant="outlined" 

                                />
                                <Field 
                                    required
                                    name="card_holder_name" 
                                    style={{marginTop: "12px"}}
                                    as={CssTextField} 
                                    type="input" 
                                    label="Dono do cartão" 
                                    variant="outlined" 

                                />

                                <Field 
                                    required
                                    style={{marginTop: "12px"}}
                                    as={CssTextField} 
                                    type="input" 
                                    name="card_number"
                                    label="Número do cartão" 
                                    variant="outlined" 

                                />

                                <Field 
                                    required
                                    name="card_expiration" 
                                    style={{marginTop: "12px"}}
                                    as={CssTextField} 
                                    type="input" 
                                    label="Validade" 
                                    variant="outlined" 

                                />

<Field 
                                    required
                                    name="card_security_code" 
                                    style={{marginTop: "12px"}}
                                    as={CssTextField} 
                                    type="input" 
                                    label="Código de Segurança" 
                                    variant="outlined" 

                                />

                                

                                <div className="register-button-container">   
                                    <ColorButton color="primary"  disable={isSubmitting.toString()} type="submit">Registrar</ColorButton>
                                <div className="register-forget-register">
                                    <div className="register-issues-item-container"><p>Não é membro?&nbsp; &nbsp;</p><Link to="/vidas/register/"> Registre Aqui!</Link></div>
                                    <div className="register-issues-item-container"><p>Esqueceu a Senha?&nbsp; &nbsp;</p><Link to="/vidas/password-reset/"> Recupere Aqui!</Link></div>
                                </div>
                                </div>
                            </form>

                        )}

                    </Formik>
                                        
                </div>
            </div>    
            <div className="register-bottom-content">
                  
                <p>The source code is licensed MIT, available at <a href="https://github.com/johnnfujita/virtualdemocracies-backend">Github</a></p>                             
                <p> by <a href="https://microappollis.com">Microappollis</a>.</p>
            </div>
            
        </div>
       
    )
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { register})(Register);
