import{ Routes, Route } from "react-router-dom"
import Hooks from "./components/Hooks";
import Formss from "./components/Formss";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Hooks />} />
        <Route path="form" element={<Formss />} />
      </Routes>
    </>
  );
}

export default App;
