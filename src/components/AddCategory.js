import { useState } from "react";
import PropTypes from 'prop-types'

const AddCategory = ({setCategory}) => {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim().length > 2 ) {

            setCategory( categ => [inputValue, ...categ])
            setInputValue('');
        }

    }
    return ( 
        <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        value={inputValue}
        onChange={handleInputChange}
        />
        </form>
        
     );
}
 

export default AddCategory;

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}