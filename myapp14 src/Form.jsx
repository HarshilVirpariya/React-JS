import React, { useState } from 'react';
import './App.css';

function App() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirm_password: '',
    });

    const [errors, setErrors] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = [];
        if (formData.username.trim() === '') {
            newErrors.push('Username is required');
        }

        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.push('Invalid email address');
        }

        // Password validation
        if (formData.password === '') {
            newErrors.push('Password is required');
        } else if (formData.password.length < 6) {
            newErrors.push('Password must be at least 6 characters long');
        }

        setErrors(newErrors);
        if (newErrors.length === 0) {
            console.log('Form submitted:', formData);
        }
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <h2>Registration Form</h2>
                <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" /><br />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" /><br />
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" /><br />
                <input type="submit" value="Submit" />
            </form>
            {errors.length > 0 && (
                <div className="error">
                    <h3>Error!</h3>
                    <ul>
                        {errors.map((error, index) => (
                            <li key={index}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default App;
