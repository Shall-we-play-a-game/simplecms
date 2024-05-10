import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./pages/User";
import CreateUser from "./pages/CreateUser";
import UpdateUser from "./pages/UpdateUser";
function App() {
  return (
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<User />} />
          <Route path='/create' element={<CreateUser />} />
          <Route path='/update/:id' element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
