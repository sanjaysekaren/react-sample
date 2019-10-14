import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import HomeComponent from './Components/HomeComponent';
import AddProductComponent from './Components/AddProductComponent';

import './App.css';

// class App extends React.Component{
//   render(){
//     return(
//     <BrowserRouter>
//     <div>
//       <Route path="/" exact Component={HomeComponent}/>
//       <Route path="/product" Component={ProductComponent}/>

//     </div>
//     </BrowserRouter>
//     );
//   }
// }

const App = () => {
  console.log('in app')
  return (
    <BrowserRouter>
      <div>
        <Route path='/' exact component={HomeComponent}/>
        <Route path='/product' exact component={AddProductComponent} />
      </div>
    </BrowserRouter>
  )
  
}

export default App;
