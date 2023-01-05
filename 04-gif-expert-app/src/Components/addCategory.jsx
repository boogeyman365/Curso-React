import { useState } from "react"


export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setCategories( categories => [inputValue, ...categories ]);
        console.log(inputValue);
    }

    return (
        <form onSubmit={ (event) => onSubmit(event) }>
            <input
                type="text"
                placeholder="Buscar GIF"
                value={inputValue}
                onChange={ onInputChange }
                >
            </input>
        </form>
    );
}