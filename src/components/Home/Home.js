import React from 'react';
import { Link } from 'react-router-dom';
import AddContact from '../AddContact/AddContact';
import ContactList from '../ContactList/ContactList';

const Home = () => {
    return (
        <div>
            <AddContact/>
            <ContactList/>
        </div>
    );
};

export default Home;