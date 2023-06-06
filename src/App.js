import { Home } from "./components/home";
import { AllEntries } from "./components/allEntries";
import { SingleEntry } from "./components/singleEntry";
import { NewEntry } from "./components/newEntry";
import { NoPage } from "./components/noPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new_entry" element={<NewEntry />} />
        <Route path="/entries" element={<AllEntries />} />
        <Route path="/entries/:id" element={<SingleEntry />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
