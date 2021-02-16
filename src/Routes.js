import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import AddContact from './components/AddContact/AddContact';
import ContactList from './components/ContactList/ContactList';
import EditContact from './components/EditContact/EditContact';
import Home from './components/Home/Home';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/add" component={AddContact}></Route>
                <Route path="/list" component={ContactList}></Route>
                <Route path="/edit" component={EditContact}></Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;