import React from "react";
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import PropTypes from 'prop-types';
import './List.css';

function List({ handleEdit, handleDelete, coisas }) {
    return (
    <ul>
        {coisas.map((coisa, index) => 
        <li key={coisa}>
            {coisa}
            <span>
                <button onClick={(e) => handleEdit(e, index)} className="edit"><FaEdit></FaEdit></button> 
                <button onClick={(e) => handleDelete(e, index)} className="delete"><FaWindowClose></FaWindowClose></button>
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
