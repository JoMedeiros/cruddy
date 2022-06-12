import React from "react";
import PropTypes from 'prop-types';
import { FaPlus, FaSave } from 'react-icons/fa';
import './Form.css';

function Form({ handleAdd, handleMudanca, novaCoisa, index }) {
    return (
        <form action="#" onSubmit={handleAdd}>
            <input onChange={handleMudanca} 
                    type="text"
                    value={novaCoisa}></input>
            <button type="submit">
                {index === -1 ? <FaPlus/> : <FaSave/>}
            </button>
        </form>
    );
}

Form.propTypes = {
    handleMudanca: PropTypes.func.isRequired,
    handleAdd: PropTypes.func.isRequired,
    novaCoisa: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
}

export default Form;
