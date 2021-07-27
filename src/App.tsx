import React from "react";
import "./styles/index.scss";
import NavBar from "./pages/NavBar";
import Menu from "./pages/Menu";
import UserProfile from "./pages/UserProfile";
import Searching from "./components/Searching";
import ProfileTabs from "./pages/ProfileTabs";
import Cromo from "./pages/Cromo";

const App = (): JSX.Element => (
  <>
    <nav>
      <NavBar />
    </nav>
    <div id="app">
      <aside>
        <Menu />
      </aside>
      <main>
        <Cromo />
        <UserProfile />
        <Searching />
        <ProfileTabs />
      </main>
    </div>
  </>
);

export default App;
