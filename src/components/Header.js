import { Component } from "react";

class Header extends Component {
    render() {
        return (
            <nav className="py4 flex bg-stone-400 justify-between items-center px6 text-sm font-medium dark:bg-stone-800">
                <ul className="sm:flex justify-end space-x-3 p-4">
                    <li><a href="/" className="block px-3 py-2 rounded-md bg-red-500 text-white border border-slate-900">Crud Genérico</a></li>
                </ul>
                <button className="p-2 mx-4 bg-slate-800 text-white dark:bg-slate-200 dark:text-black" 
                onClick={() => { document.getElementsByTagName('html')[0].classList.toggle('dark')} }>
                    Dark/Light
                </button>
            </nav>
        );
    }
}

export default Header;
