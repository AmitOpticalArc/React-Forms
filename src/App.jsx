import{ Routes, Route } from "react-router-dom"
import Hooks from "./components/Hooks";
import Formss from "./components/Formss";
import FormikContainer from "./components/FormikContainer";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Hooks />} />
        <Route path="form" element={<Formss />} />
        <Route path="form1" element={<FormikContainer />} />
        <Route path="loginform" element={<LoginForm />} />
        <Route path="regform" element={<RegistrationForm />} />
      </Routes>
    </>
  );
}

export default App;
