import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { contactContext } from '../../contexts/ContactContext';

const EditContact = () => {
    const {contactToEdit, saveContact} = useContext(contactContext);
    const[newEditContact, setNewEditContact] = useState(contactToEdit)

    useEffect(() => {
        setNewEditContact(contactToEdit)
    }, [contactToEdit])
    let history = useHistory()

    function handleEditInput(e){
        let newContact = { 
            ...newEditContact,
            [e.target.name]: e.target.value
        }
        setNewEditContact(newContact)
    }
    return (
        <div>
            {newEditContact ?
            <>
            <h1>Редактирование</h1>
                <input onChange={ handleEditInput} name={'contact'} value={newEditContact.contact} type="text"/>
                <input onChange={ handleEditInput} name={'surname'} value={newEditContact.surname} type="text"/>
                <input onChange={ handleEditInput} name={'phone'} value={newEditContact.phone} type="text"/>
                <Link to="/">
                
                <button onClick={() => saveContact(newEditContact, history)} >Save</button>
                </Link>
            </>
            : <h1>Загрузка</h1>}
        </div>
    );
};
export default EditContact;