import React from 'react';
import './Footer.css';

class Footer extends React.Component{

    render = () => (

        <footer>

            <div className="d-block d-md-none">
                <div className="d-flex justify-content-center my-2">
                    <p>&copy; 2020  
                        <a href="https://www.linkedin.com/in/rodrigo-s-silva-5706b1192/">  Rodrigo Santos</a>
                    </p>
                </div>

                <div className="links d-flex justify-content-between">
                    <a href="#">Creative Tim</a>
                    <a href="#">About Us</a>
                    <a href="#">Blog</a>
                </div>

                <div className="row">
                    <a className="col-12 d-flex justify-content-center" href="#">License MIT</a>
                </div>
            </div>

            <div className="d-none d-md-block container">
                <div className="py-2 d-flex mb-5">
                    <p className="mr-auto">&copy; 2020  
                        <a href="https://www.linkedin.com/in/rodrigo-s-silva-5706b1192/">  Rodrigo Santos</a>
                    </p>

                    <a className="mx-3" href="#">Creative Tim</a>
                    <a className="mx-3" href="#">About Us</a>
                    <a className="mx-3" href="#">Blog</a>
                    <a className="mx-3" href="#">License MIT</a>
                </div>
            </div>

        </footer>


    );

}

export default Footer;