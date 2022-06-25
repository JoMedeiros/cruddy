import React from "react";
import PropTypes from 'prop-types';
import { FaPlus, FaSave } from 'react-icons/fa';

function Form({ handleAdd, handleMudanca, novaCoisa, index }) {
    return (
        <form action="#" onSubmit={handleAdd} className="mt-4 flex items-center justify-center">
            <input onChange={handleMudanca} 
                    type="text"
                    value={novaCoisa}
                    className="h-10 px-5 text-lg border-4 border-stone-400 
                    rounded-lg bg-stone-700 m-2"></input>
            <button type="submit"
                className="rounded-xl h-10 w-10 bg-emerald-500 shadow shadow-emerald-500/80 
                text-black flex justify-center items-center">
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
