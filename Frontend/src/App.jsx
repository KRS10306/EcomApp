// import React from "react";
// import ProductListing from "./Screens/ProductListing";
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Header from "./UtilityComponent/Header";
// import Cart from "./Screens/Cart";
// import SignIn from "./Screens/SignIn";

// const App = ({Firstt, Secondd, Thirdd}) => {
//   return (
//     <BrowserRouter>
//     <Header Firstt="Home" Secondd="Cart" />
//       <div className="bg-slate-200">
//         <Routes>
//           <Route path='/' element={<ProductListing/>}/>
//           <Route path='/cart' element = {<Cart/>}/>
//           <Route path="/sign" element={<SignIn/>} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductListing from "./Screens/ProductListing";
import Cart from "./Screens/Cart";
import Header from "./UtilityComponent/Header";
import Registeration from "./Screens/Registeration";
import Login from "./Screens/Login";

// Wrapper component for pages with different Header props
const PageLayout = ({ Firstt, Secondd, Thirdd, Component }) => {
  return (
    <>
      <Header First={Firstt} Second={Secondd} Third={Thirdd} />
      <div className="bg-slate-200">
        <Component />
      </div>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PageLayout
              Firstt="Home"
              Secondd="Cart"
              Thirdd="Login"
              Component={ProductListing}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <PageLayout
              Firstt="Back to Shopping"
              Secondd="Checkout"
              Thirdd="Sign Out"
              Component={Cart}
            />
          }
        />
        <Route
          path="/login"
          element={
            <PageLayout
              Firstt="Home"
              Secondd="Register"
              Thirdd="Help"
              Component={Login}
            />
          }
        />
        <Route
          path="/register"
          element={
            <PageLayout
              Firstt="Home"
              Secondd="Login"
              Thirdd="Help"
              Component={Registeration}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

