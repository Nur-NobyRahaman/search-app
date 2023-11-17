import logo from "./logo.svg";
import "./App.css";
import SearchItems from "./features/serchApp/SearchItems";
import UsersView from "./features/users/UsersView";
import Multifilter from "./features/multiFilter/Multifilter";

function App() {
  return (
    <div className="App">
      {/* <SearchItems></SearchItems> */}
      <UsersView></UsersView>
      {/* <Multifilter></Multifilter> */}
    </div>
  );
}

export default App;
