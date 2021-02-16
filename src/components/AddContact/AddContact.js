import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { contactContext } from '../../contexts/ContactContext';
import './AddContact.css'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(5),
        width: '25ch',
      },
    },
  }));

const AddContact = () => {
    const [inpName, setInpName] = useState('')
    const [inpSurname, setInpSurname] = useState('')
    const [inpPhone, setInpPhone] = useState('')
    const { addContact } = useContext(contactContext)
    const classes = useStyles();

    function handleClick() {
        let newObj = {
            contact: inpName,
            surname: inpSurname,
            phone: inpPhone

        }
        addContact(newObj)
        setInpName('')
        setInpSurname('')
        setInpPhone('')
    }
    
    return (
        <div >
            <h1 className="title">Новый контакт</h1>
            <div className="block">
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField value={inpName} onChange={(e) => setInpName(e.target.value)} id="standard-basic" label="Имя" />
                    <TextField value={inpSurname} onChange={(e) => setInpSurname(e.target.value)} id="standard-basic" label="Фамилия" />
                    <TextField value={inpPhone} onChange={(e) => setInpPhone(e.target.value)} id="standard-basic" label="Номер телефона" />
                </form>    
                    {/* <input value={inpName} onChange={(e) => setInpName(e.target.value)} type="text" placeholder="Имя" />
                    <input value={inpSurname} onChange={(e) => setInpSurname(e.target.value)} type="text" placeholder="Фамилия" />
                    <input value={inpPhone} onChange={(e) => setInpPhone(e.target.value)} type="number" placeholder="Номер телеофона" /> */}
                    <button onClick={handleClick}>Add contact</button>
            </div>
            </div>
    );
};


export default AddContact;