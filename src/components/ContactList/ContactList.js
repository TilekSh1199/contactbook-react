import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { contactContext } from '../../contexts/ContactContext';
import './ContactList.css'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';



const ContactList = (props) => {
    const { contacts, getContactsData, deleteContact, editContact } = useContext(contactContext)
    useEffect(() => {
        getContactsData()
    }, [])
    let history = useHistory()
    return (
        <div>
            <h1 className="title" >Контакты</h1>
            {contacts.map(item => (
                <div className="contact-item" key={item.id}>
                    <span>
                        name: {item.contact}
                    </span>

                    <span key={item.id}>
                        surname: {item.surname}
                    </span>

                    <span>
                        phone: {item.phone}
                    </span>
                    <IconButton onClick={() => deleteContact(item.id)} aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                    {/* <button onClick={() => deleteContact(item.id)} >delete</button> */}
                    <button onClick={() => editContact(item.id, history)} >Edit</button>
                </div>
            ))}
        </div>
    );
};

export default ContactList;