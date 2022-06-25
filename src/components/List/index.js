import React from "react";
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import PropTypes from 'prop-types';
import './List.css';

function List({ handleEdit, handleDelete, coisas }) {
    return (
    <ul className="mt-8">
        {coisas.map((coisa, index) => 
        <li key={coisa} className="flex items-center justify-between 
        bg-stone-600 border-4 border-stone-400 px-4 py-1 rounded-lg m-1">
            {coisa}
            <span>
                <button onClick={(e) => handleEdit(e, index)} className="edit">
                    <FaEdit></FaEdit>
                </button> 
                <button onClick={(e) => handleDelete(e, index)} className="delete">
                    <FaWindowClose></FaWindowClose>
                </button>
            </span>
        </li>)}
    </ul>);
}

List.propTypes = {
    handleEdit: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    coisas: PropTypes.array.isRequired,
}

export default List;
