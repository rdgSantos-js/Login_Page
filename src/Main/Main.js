import React from 'react';
import './Main.css';
import googleLogo from './img/icon.png';

class Main extends React.Component{

    render = () =>(

        <section className="main">
            
            <div className="sign-up-card">
                <div className="form-box">

                    <div className="social-options d-flex flex-column justify-content-center pb-5">
                        <h6 className="d-flex justify-content-center mt-2 mb-3">Sign up with</h6>

                        <div className="d-flex justify-content-center flex-column flex-md-row align-items-center">
                            <button className="d-flex mr-md-1 align-items-center justify-content-center">
                                <i className="fab fa-github"/><span>Github</span>
                            </button>

                            <button className="d-flex ml-md-1 align-items-center justify-content-center">
                                <img src={ googleLogo }/><span>Google</span>
                            </button>
                        </div>

                    </div>

                    <div className="limiter"></div>

                    <div className="login-option d-flex flex-column justify-content-center">
                        
                        <h6 className="d-flex justify-content-center mb-4">Or sign up with credentials</h6>

                        <form>
                            <div className="form-group">

                                <div className="input-group mb-3">
                                    <i className="fas fa-envelope"/>
                                    <input type="email" placeholder="Email"/>
                                </div>

                                <div className="input-group">
                                    <i className="fas fa-lock"/>
                                    <input type="password" placeholder="Password" />
                                </div>

                                <label className="input-group-check my-5">Remember Me
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>

                                <div className="d-flex flex-row justify-content-center mb-5">
                                    <button type="submit" className="btn-sign-in">Sign in</button>
                                </div>

                            </div>
                        </form>
                    </div>
                
                </div>

                <div className="end-links d-flex justify-content-between my-3">
                    <a href="">Forgot Password</a>
                    <a href="">Create new account</a>
                </div>

            </div>

        </section>

    );

}

export default Main;