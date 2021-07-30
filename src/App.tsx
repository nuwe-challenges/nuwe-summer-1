import React from "react";
import "./styles/App.scss";
import NavBar from "./pages/NavBar";
import Menu from "./pages/Menu";
import UserProfile from "./pages/UserProfile";
import Searching from "./components/Searching";
import ProfileTabs from "./pages/ProfileTabs";

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
        <UserProfile />
        <Searching />
        <ProfileTabs />
      </main>
    </div>
  </>
);

export default App;
