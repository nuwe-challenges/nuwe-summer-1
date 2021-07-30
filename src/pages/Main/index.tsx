import React from "react";
import "./index.scss";
import NavBar from "../NavBar";
import Menu from "../Menu";
import UserProfile from "../UserProfile";
import Searching from "../../components/Searching";
import ProfileTabs from "../ProfileTabs";

const Main = (): JSX.Element => (
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

export default Main;
