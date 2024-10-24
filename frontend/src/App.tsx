import Header from "./components/Header";
import MainBody from "./components/MainBody";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex h-screen bg-gray-50 ">
      <Navbar />
      <div className="flex flex-col w-full md:w-3/4 lg:w-4/5 xl:w-5/6">
        <Header />
        <MainBody />
      </div>
    </div>
  );
}

export default App;
