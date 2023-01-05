import { useState } from "react"
import { AddCategory } from "./Components/addCategory";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch', 'Dragon Ball' ]);

    const onAddCategory = () => {
        setCategories( ['valorant', ...categories] );
    }

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory setCategories={setCategories}></AddCategory>

            {/* Listado Gifs */}
        {/* <button onClick={onAddCategory}>Agregar</button> */}
            <ol>
                { categories.map( category => {
                    return <li key={ category }>{category}</li>
                }) }
            </ol>
                {/* Gif Item */}
        </>
    )
}