import "./App.css";
import SidebarKiri from "./components/sidebarLeft/SidebarKiri";
import UtamaKanan from "./components/utamakanan/UtamaKanan";

const App = () => {
  return (
    <>
      <div className="App">
        <div className="sideApp">
          <SidebarKiri />
        </div>
        <div className="utamaApp">
          <UtamaKanan />
        </div>
      </div>
    </>
  );
};

export default App;
