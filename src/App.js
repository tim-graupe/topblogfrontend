import { Home } from "./components/home";
import { AllEntries } from "./components/allEntries";
import { SingleEntry } from "./components/singleEntry";
import { NewEntry } from "./components/newEntry";
import { NoPage } from "./components/noPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { SignUp } from "./components/signup";
import { Login } from "./components/login";
function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new_entry" element={<NewEntry />} />
        <Route path="/entries" element={<AllEntries />} />
        <Route path="/entries/:id" element={<SingleEntry />} />
        {/* <Route path="/sign_up" element={<SignUp />} /> */}
        {/* remove signup for now */}
        <Route path="/log_in" element={<Login />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
