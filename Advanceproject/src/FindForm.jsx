import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [user, setUser] = useState({
        id:""
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(e.target)
        setUser({
            ...user,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get('http://localhost:8080/app/find?id=1');
            console.log("User Data", response.data);
            // Optionally, reset form or handle success
            setUser(response.data)
        } catch (error) {
            console.error('There was an error creating the user!', error);
        }
    };

    return (
        <section>
 <form onSubmit={handleSubmit}>
           <label>Id:</label>
           <input type="number" name="id" id=""  onChange={handleChange} />
        <button onSubmit={handleSubmit}>Signup</button>
        </form>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.role}</p>
        <p>{user.phone}</p>
        </section>
       
       
    );
};

export default Form;
