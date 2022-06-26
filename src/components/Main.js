import React, {Component } from "react";
import Form from './Form';
import List from './List';

class Main extends Component {
    state = {
        novaCoisa: '',
        coisas: [ ],
        index: -1,
    };

    componentDidUpdate(prevProps, prevState) {
        const { coisas } = this.state;
        if (coisas === prevState.coisas) return;
        localStorage.setItem('coisas', JSON.stringify(coisas));
    }

    componentDidMount() {
        const coisas = JSON.parse(localStorage.getItem('coisas'));
        if (!coisas) return;
        this.setState({ coisas });
    }

    handleMudanca = (e) => {
        this.setState({
            novaCoisa: e.target.value,
        });
    };

    handleAdd = (e) => {
        e.preventDefault();
        const { coisas, index } = this.state;
        let { novaCoisa } = this.state;
        novaCoisa = novaCoisa.trim();

        if (coisas.indexOf(novaCoisa) !== -1 || !novaCoisa) return;

        const novasCoisas = [...coisas];

        if (index === -1) {
            this.setState({
                coisas: [...novasCoisas, novaCoisa],
                novaCoisa: '',
            });
        } else {
            novasCoisas[index] = novaCoisa;
            this.setState({
                coisas: [...novasCoisas],
                novaCoisa: '',
                index: -1,
            });
        }
    }

    handleEdit = (e, index) => {
        const { coisas } = this.state;
        this.setState({
            index,
            novaCoisa: coisas[index]
        })
    }

    handleDelete = (e, index) => {
        const novasCoisas = [...(this.state.coisas)];
        novasCoisas.splice(index, 1);
        this.setState({
            coisas: [...novasCoisas],
        });    
    }    

    render() {
        const { novaCoisa, coisas, index } = this.state;
        return (
            <main className="bg-stone-200 rounded-lg shadow shadow-stone-900/50 lg:w-6/12 md:mx-auto md:w-9/12  my-10 p-8  mx-4 dark:bg-stone-800 dark:text-white">
                <h1 className="text-3xl text-center">Lista de Coisas</h1>
                
                <Form 
                    handleAdd={this.handleAdd}
                    handleMudanca={this.handleMudanca}
                    novaCoisa={novaCoisa}
                    index={index}
                />

                <List
                    handleEdit={this.handleEdit}
                    handleDelete={this.handleDelete}
                    coisas={coisas}
                />

            </main>
        );
    }
}

export default Main;
