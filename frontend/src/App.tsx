import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Identifiers from "./components/Identifiers";
import MainBody from "./components/MainBody";
import Navbar from "./components/Navbar";
import PageNotFound from "./components/PageNotFound";
import ANPREvents from "./components/ANPREvents";
import AccessReport from "./components/AccessReport";

function App() {
  return (
    <div className="flex h-screen bg-gray-50 ">
      <Navbar />
      <div className="flex flex-col w-full md:w-3/4 lg:w-4/5 xl:w-5/6">
        <Header />
        <div className="overflow-y-auto h-full">
          <Routes>
            <Route path="/ANPRsettings" element={<MainBody />} />
            <Route path="/identifiers" element={<Identifiers />} />
            <Route path="/ANPRevents" element={<ANPREvents />} />
            <Route path="/accessReport" element={<AccessReport />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
