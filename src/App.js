import logo from "./logo.svg";
import "./App.css";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import First from "./components/screens/firstDesign/First";
import SecondDesign from "./components/screens/secondDesign/SecondDesign";
import ApiScreen from "./components/screens/ApiScreen/ApiScreen";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/first" element={<First />} />
          <Route path="/second" element={<SecondDesign />} />
          <Route path="/" element={<ApiScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
