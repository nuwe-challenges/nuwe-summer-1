import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../../pages/Main'
import { getUser } from "../../redux/reducers/user.reducer";

const App = (): JSX.Element => {
    const user = useSelector(getUser)
    return (
        <Router>
            <Switch>
                <Route exact path={`/${user.userName}`} render={() => <Main />} />
                <Route path="/" render={() => <Main />} />
            </Switch>
        </Router>
    )
};

export default App;
