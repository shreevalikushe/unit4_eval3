import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./Components/AllRoutes";
import Navbar from "./Components/Navbar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <AllRoutes />
      </BrowserRouter>
    </div>
  );
}
