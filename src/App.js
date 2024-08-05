
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
// import Login from './components/header/Login';
// import {Routes,Route } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
function App() {
  return (
    <div className="App">
      <Header/> 
      {/* <Login/>  */}
      <AppRoutes/>     
      <Footer/>

      {/* <BrowserRouter> */}
      {/* <Navi/> */}
             
      {/* <Footer/> */}
      {/* </BrowserRouter>    */}
    </div>
  );
}

export default App;
