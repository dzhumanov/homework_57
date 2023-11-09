import "./App.css";
import ToolBar from "./Components/ToolBar/Toolbar";
import Users from "./Components/Users/Users";
import UsersForm from "./Components/UsersForm/UsersForm";

function App() {
  return (
    <>
      <header>
        <ToolBar/>
      </header>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <UsersForm/>
            </div>
            <div className="col-6">
              <Users/>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
