import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password:"" ,
        phone: "",
        role: ""
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
            const response = await axios.post('http://localhost:8080/app/save',user);
            console.log('User created:', response.data);
            // Optionally, reset form or handle success
        } catch (error) {
            console.error('There was an error creating the user!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>name:</label>
                <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Phone:</label>
                <input
                    type="tel"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="text"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Role:</label>
                <input
                    type="text"
                    name="role"
                    value={user.role}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
