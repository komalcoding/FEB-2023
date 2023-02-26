import {BrowserRouter,Routes,Route} from "react-router-dom"
import Form from "./Component/Form";
import Home from "./Component/Home";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/form"element={<Form/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;