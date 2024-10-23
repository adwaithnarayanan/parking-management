import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Navbar />
      <div>
        <Header />
      </div>
    </div>
  );
}

export default App;
