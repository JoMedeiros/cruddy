import React from "react";
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import PropTypes from 'prop-types';

function List({ handleEdit, handleDelete, coisas }) {
    return (
    <ul className="mt-8">
        {coisas.map((coisa, index) => 
        <li key={coisa} className="flex items-center justify-between bg-stone-100 border-4 border-stone-400 px-4 py-1 rounded-lg m-1 hover:bg-red-300/50 dark:bg-stone-700 dark:hover:bg-red-700/30 transition-colors ease-in-out duration-700">
            {coisa}
            <span>
                <button onClick={(e) => handleEdit(e, index)} className="cursor-pointer mx-1 text-yellow-400">
                    <FaEdit></FaEdit>
                </button> 
                <button onClick={(e) => handleDelete(e, index)} className="cursor-wait mx-1 text-red-400">
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
