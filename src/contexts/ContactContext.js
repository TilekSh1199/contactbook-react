import axios from 'axios';
import React, { useReducer } from 'react';
export const contactContext = React.createContext();

const INIT_STATE = {
    contacts: [],
    contactToEdit: null
}

const reducer = (state=INIT_STATE, action) =>{
    switch(action.type){
        case "GET_CONTACTS_DATA":
            return{...state, contacts: action.payload}
        case "EDIT_CONTACT":
            return {...state, contactToEdit: action.payload }
        default: return state
    }
}

const ContactContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getContactsData = async () => {
        let {data} = await axios('http://localhost:8000/contacts')
        dispatch({
            type: "GET_CONTACTS_DATA",
            payload: data
        })
    }

    const addContact = async (newContact) => {
        await axios.post('http://localhost:8000/contacts', newContact)
        getContactsData()
    }

    const deleteContact = async (id) => {
        await axios.delete(`http://localhost:8000/contacts/${id}`)
        getContactsData()
    }

    const editContact = async (id, history) => {
        let {data} = await axios(`http://localhost:8000/contacts/${id}`)
        dispatch({
            type: "EDIT_CONTACT",
            payload: data
        })
        history.push('/edit')
    }

    const saveContact = async (newContact) => {
        await axios.patch(`http://localhost:8000/contacts/${newContact.id}`, newContact)
        getContactsData()
    }

    return (
        <contactContext.Provider value={{
            contacts: state.contacts,
            contactToEdit: state.contactToEdit,
            addContact,
            getContactsData,
            deleteContact,
            editContact,
            saveContact
        }}>
            {children}
        </contactContext.Provider>
    );
};

export default ContactContextProvider;