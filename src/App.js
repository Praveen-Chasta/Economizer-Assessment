import { Component } from "react";
import SideContainer from "./component/SideContainer";
import Topsection from "./component/Topsection";
import Profilesection from "./component/Profilesection";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Topsection />
        <div className="app-container">
          <SideContainer />
          <Profilesection />
        </div>
      </>
    );
  }
}
export default App;
