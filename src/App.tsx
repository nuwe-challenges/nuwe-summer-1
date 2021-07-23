import React from "react";
import './styles/index.scss'
import NavBar from './pages/NavBar'
import { ThemeProvider } from 'styled-components';
import UserProfile from "./pages/UserProfile";
import Searching from "./components/Searching";
import ProfileTabs from "./components/ProfileTabs";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./styles/index.scss');

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <NavBar />
    <UserProfile />
    <Searching />
    <ProfileTabs />
  </ThemeProvider>
);

export default App;
