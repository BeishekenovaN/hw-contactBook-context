import { Grid } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { contactContext } from '../Context/ContactContext';
import ContactCard from './ContactCard/ContactCard';

const ContactList = () => {
    const { contacts, getContacts } = useContext(contactContext)

    useEffect(() => {
        getContacts()
    }, [])

    return (
        <Grid container spacing={{xs: 2, md:3}} columns={{xs: 4, sm: 8, md: 12}}>
          {
              contacts ? (
                  contacts.map((item, index) => (
                      <Grid key={index} style={{margin:'30px'}}>
                      <ContactCard item={item} key={index}/>
                        </Grid>
                      ))
              ) : (<h1>Loading...</h1>)
          }  
        </Grid >
    );
};

export default ContactList;