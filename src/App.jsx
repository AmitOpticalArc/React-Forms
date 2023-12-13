import { Routes, Route } from "react-router-dom";
import Hooks from "./components/Hooks";
import Formss from "./components/Formss";
import FormikContainer from "./components/FormikContainer";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import MyForm from "./components/MyForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hooks />} />
        <Route path="form" element={<Formss />} />
        <Route path="form1" element={<FormikContainer />} />
        <Route path="loginform" element={<LoginForm />} />
        <Route path="regform" element={<RegistrationForm />} />
        <Route path="myform" element={<MyForm />} />
      </Routes>
    </>
  );
}

export default App;


// import React from "react";
// import RegistrationForm from "./RegistrationForm";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>User Registration</h1>
//       </header>
//       <main>
//         <RegistrationForm />
//       </main>
//     </div>
//   );
// }

// export default App;
