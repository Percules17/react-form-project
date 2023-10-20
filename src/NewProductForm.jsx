import React, { useState } from 'react';


// State Initialization
// Here, I use React's 'useState' hook to initialize and 
// manage state for each form field
const NewProductForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Product Info:");
        console.log("Name:", name);
        console.log("Description:", description);
        console.log("Category:", category);
        console.log("Quantity:", quantity);
        console.log("Price:", price);
        setName('');
        setDescription('');
        setCategory('');
        setQuantity('');
        setPrice('');
    };

    const handleCancel = () => {
        setName('');
        setDescription('');
        setCategory('');
        setQuantity('');
        setPrice('');
    };

    return (
        //onChange: Event handler that updates the state with the user's
        // input when the value of the input field changes.
        // This helps ensure that React is in control of the Form's data
        // at all times
        <div>
            <h2>New Product</h2>
            
            <form onSubmit={handleSubmit}>
                
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
                <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                <button type="submit">SUBMIT</button>
                <button type="button" onClick={handleCancel}>CANCEL</button>
            </form>
        </div>
    );
};

export default NewProductForm;
