import{ Routes, Route } from "react-router-dom"
import Hooks from "./components/Hooks";
import Formss from "./components/Formss";
import FormikContainer from "./components/FormikContainer";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Hooks />} />
        <Route path="form" element={<Formss />} />
        <Route path="form1" element={<FormikContainer />} />
      </Routes>
    </>
  );
}

export default App;
