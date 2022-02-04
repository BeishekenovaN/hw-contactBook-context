import * as React from 'react';
import { Box, Button } from '@mui/material';
import './AddContact.css'
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { contactContext } from '../Context/ContactContext';

export default function AddContact() {
    const [ form, setForm ] = React.useState({
        fullName: '',
        image: '',
        phoneNumber: '',
        mail: '',
        address: ''
    })

    const navigate = useNavigate()

    const { addContact } = React.useContext(contactContext)

    const handleChange =(e) => {
        const values = {
            ... form,
            [e.target.name]: e.target.value
        }
        setForm(values)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!form.fullName || !form.image || !form.phoneNumber || !form.mail || !form.address){
            alert('заполните поля')
            return
        }
        addContact(form)
        navigate('/')
    }

    return (
        <Box
        // component="form"
        // sx={{
        //     '& > :not(style)': { m: 1, width: '25ch' }, 
        // }}
        // noValidate
        flexGrow="1"
        display="flex" 
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        component="form"
        // sx={{
        //   '& > :not(style)': { mt: 2, width: '40ch', height: '5ch'}, 
        sx={{
            '& > :not(style)': { m: 11, width: '100ch' }, 
        }}
        
        noValidate
        >
            <div className='form-block'>
                <h2>Добавить контакт</h2>
            <TextField onChange={handleChange} name='fullName' value={form.fullName} className="filled-basic" label="FullName" 
            variant="filled"
            color="secondary" />
            <TextField onChange={handleChange} name='image' value={form.image} className="filled-basic" label="Image" variant="filled" 
            color="secondary"/>
            <TextField onChange={handleChange} name='phoneNumber' value={form.phoneNumber} className="filled-basic" label="Phone Number" variant="filled" 
            color="secondary"/>
            <TextField onChange={handleChange} name='mail' value={form.mail} className="filled-basic" label="Mail" variant="filled"
            color="secondary" />
            <TextField onChange={handleChange} name='address' value={form.address} className="filled-basic" label="Address" variant="filled"
            color="secondary" />
            <Button onClick={handleSubmit} variant="contained" color="success"> ДОбавить</Button>
            </div>
        </Box>
    );
}
