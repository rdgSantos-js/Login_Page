import React from 'react';
import './Header.css'

class Header extends React.Component{

    toggleMenuBtn(){

        let header = document.querySelector('header');

        let openMenuBtn = header.querySelector('.open-menu');
        let closeMenuBtn = header.querySelector('.close-menu');
        let menuMobile = header.querySelector('.nav-menu');
        let menuLi = header.querySelectorAll('.nav-menu ul a li');
        
        openMenuBtn.addEventListener('click', e=>{

            menuMobile.style.display = "block";
            this.menuIconsHeightSet();
           
            setTimeout(()=>{
                menuMobile.style.opacity = "1";
                menuMobile.style.top = '10px';
                menuMobile.style.left = '10px';
                menuMobile.style.right = '10px';
                menuLi.forEach(element => {

                    element.style.paddingBottom = '1.2rem';

                });
                
            }, 1);

        });

        closeMenuBtn.addEventListener('click', e=>{

            menuMobile.style.opacity = "0";
            menuMobile.style.top = '20px';
            menuMobile.style.left = '60px';
            menuMobile.style.right = '60px';
            menuLi.forEach(element => {

                element.style.paddingBottom = '0rem';

            });
            setTimeout(()=>{
            menuMobile.style.display = "none";
            }, 100);

        });

    }

    menuIconsHeightSet(){

        let header = document.querySelector('header');
        let icons = header.querySelectorAll('.nav-menu ul i');

        icons[1].style.fontSize = '.7rem';

    } 
       
    componentDidMount(){

        this.toggleMenuBtn();

    }

    render = () => (

            <header>

                <nav className="nav-bar d-md-flex d-none" style={{ height: '14vh' }}>
                    
                    <div className="d-flex brand-logo align-items-center mr-auto">
                        <p>Brand</p>
                    </div>

                    <ul className="d-flex align-items-center">

                        <a href="">
                            <li className="d-inline-flex align-items-center mx-2">
                                <i className="fas fa-chart-line"/>
                                <span>Dashboard</span>
                            </li>
                        </a>

                        <a href="">
                            <li className="d-inline-flex align-items-center mx-2">
                                <i className="fas fa-users"/>
                                <span>Register</span>
                            </li>
                        </a>

                        <a href="">
                            <li className="d-inline-flex active align-items-center mx-2">
                                <i className="fas fa-sign-in-alt"></i>
                                <span>Login</span>
                            </li>
                        </a>

                        <a href="">
                            <li className="d-inline-flex align-items-center mx-2">
                                <i className="fas fa-user-alt"/>
                                <span>Profile</span>
                            </li>
                        </a>
                        
                    </ul>

                </nav>

                <nav className="d-flex d-md-none justify-content-between px-5" style={{ height: '12vh' }}>
                    
                    <div className="d-flex brand-logo align-items-center">
                        <p>Brand</p>
                    </div>

                    <button className="open-menu align-items-center">
                        <i className="fas fa-bars"/>
                    </button>

                </nav>

                <div className="nav-menu" style={{ display: 'none', opacity: '0'}}>

                    <div className="menu-top d-flex justify-content-between">
                        <div className="brand-logo-menu d-inline-block">
                            <p>Brand</p>
                        </div>
                        
                        <button className="close-menu d-inline-block">
                            <i className="fas fa-times"/>
                        </button>
                    </div>

                    <div className="limiter"></div>

                    <ul>

                        <a href="">
                            <li>
                                <i className="fas fa-chart-line"/>
                                <span>Dashboard</span>
                            </li>
                        </a>

                        <a href="">
                            <li>
                                <i className="fas fa-users"/>
                                <span>Register</span>
                            </li>
                        </a>

                        <a href="">
                            <li>
                                <i className="fas fa-sign-in-alt"></i>
                                <span>Login</span>
                            </li>
                        </a>

                        <a href="">
                            <li>
                                <i className="fas fa-user-alt"/>
                                <span>Profile</span>
                            </li>
                        </a>
                        
                    </ul>

                </div>

                <div className="container welcome">
                    <h2>Welcome!</h2>
                    <p>Use these awesome forms to login or create new account in your project for free.</p>
                </div>

            </header>

    );

}

export default Header;