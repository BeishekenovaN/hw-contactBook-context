import { Button, Paper, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { contactContext } from '../Context/ContactContext';

const EditContact = () => {
    const params = useParams()
    const { getContactToEdit, contactToEdit, saveEditedContact } = useContext(contactContext)
    const [ form, setForm ] = React.useState({
        fullName: '',
        image: '',
        phoneNumber: '',
        mail: '',
        address: ''
    })
    const navigate = useNavigate()

    useEffect(() => {
        if(contactToEdit){
            setForm(contactToEdit)
        }
    }, [contactToEdit])

    useEffect(() => {
        getContactToEdit(params.id)
    }, [])

    function handleSubmit(e){
        let editedContact = {
            ...form,
            [e.target.name]: e.target.value
        }
        setForm(editedContact)
    }

    function handleSave(){
        saveEditedContact(form)
        navigate('/')
    }

    return (
        <Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
            m: '40px auto',
            maxWidth: 1000,
            height: 'auto',
            p: '10px'
            }
        }}
        >
        <Paper elevation={3}>
            <h1 style={{textAlign:'center'}}>Update Contact</h1>
            <div style={{display: 'flex', justifyContent: 'space-around', color: 'black'}}>
                <div>
                <img width='300px' src={form.image} alt={form.title}/>      
                </div>
                <div style={{
                    width: '450px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    flexDirection: 'column', 
                    justifyContent: 'center'
                    }}>
                     <form noValidate autoComplete='off'
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                    <TextField style={{padding: '10px'}}
                    name='fullName' onChange={handleSubmit} value={form.fullName} variant='outlined' label='Full Name'/>
                    <TextField style={{padding: '10px'}}
                    name='image' onChange={handleSubmit} value={form.image} variant='outlined' label='Image'/> 
                    <TextField style={{padding: '10px'}}
                    name='phoneNumber' onChange={handleSubmit} value={form.phoneNumber} variant='outlined' label='Phone Number'/> 
                    <TextField style={{padding: '10px'}}
                    name='mail' onChange={handleSubmit} value={form.mail} variant='outlined' label='eMail'/> 
                    <TextField style={{padding: '10px'}}
                    name='address' onChange={handleSubmit} value={form.address} variant='outlined' label='Address'/> 
                    <Button onClick={handleSave} variant='contained' color='success'>
                             Save   
                            </Button>
                        </form>
            </div>
            </div>
        </Paper>
    </Box>
    );
};

export default EditContact;