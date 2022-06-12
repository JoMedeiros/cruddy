import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App Component', () => {
    it('should render title', () => {
        render(<App/>);
        expect( screen.getByText('Lista de Coisas')).toBeInTheDocument();    
    });

    it('should be able to add new item to the list', async () => {
        render(<App/>);
        const addButton = screen.getByRole('button');
        const textInput = screen.getByRole('textbox');
        const nomeDoItem = 'Teste';

        userEvent.type(textInput, nomeDoItem);
        expect(textInput).toHaveAttribute('value', nomeDoItem);
        userEvent.click(addButton);
        
        // Para o caso de uma chamada assíncrona do método adicionar
        await waitFor(() => {
            expect(textInput).toHaveAttribute('value', '');
        }).then(() => {
            expect(screen.getByText(nomeDoItem)).toBeInTheDocument();
        });
    });

    it('should be able to remove item from the list', async () => {
        // @TODO
    });
});
