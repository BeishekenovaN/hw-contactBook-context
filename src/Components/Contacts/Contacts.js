import { Button } from '@mui/material';
import { height } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import ContactList from '../ContactList/ContactList'

const Contacts = () => {
    return (
        <div style={{backgroundColor: "#BDE28B"}}>
            <h1 style={{
                backgroundColor: 'yellow',
                height: '5ch',
                margin: '0px',
                color: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            
                }}>
                Главная страница
                <Link style={{textDecoration: "none", marginLeft: "90px"}} to={`add/`} >
                <Button   variant="contained" color="primary">
                      Добавить
                </Button>
                </Link>
            </h1>
            
            <ContactList />
        </div>

    );
};

export default Contacts;

