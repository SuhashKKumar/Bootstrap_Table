
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import StatusNavigation from "./components/StatusNavigation";
import Table from "./components/Table";


export default function App() {
  return (
    <div className="App">
      <div className="d-flex gap-5">
        <SideBar />
        <div className="container">
          <div className="row">
            <Navbar />
            <SearchBar />
            <StatusNavigation/>
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}
