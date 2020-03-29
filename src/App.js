import React from 'react';
import './App.css';
//include components
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

class App extends React.Component{

  componentDidMount(){
    
  
    
  let height = document.querySelector('.form-box').getBoundingClientRect().height;
  let pos = document.querySelector('.form-box').offsetTop;
  let footer = document.querySelector('footer');

  footer.style.top = height + pos + 'px';
  footer.style.padding = '1rem 0';

  }

  render = () => (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
