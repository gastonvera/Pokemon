import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Formulario from "./components/Formulario/Formulario";
import "./App.css";
import ContextFormLayout from "./layout/ContextFormLayout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route element={<ContextFormLayout />} >
          <Route path="/formularioIngreso" element={<Formulario />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
