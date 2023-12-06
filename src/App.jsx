import{ Routes, Route } from "react-router-dom"
import Hooks from "./components/Hooks";
import Form from "./components/Form";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Hooks />} />
        <Route path="form" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
