import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./components/Home/Home";
import Formulario from "./components/Formulario/Formulario";
import "./App.css";
import ContextFormLayout from "./layout/ContextFormLayout";

function App() {

  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route element={<ContextFormLayout />} >
            <Route path="/formularioIngreso" element={<Formulario />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
