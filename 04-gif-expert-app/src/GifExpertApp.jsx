import { useState } from "react"
import { AddCategory } from "./Components/addCategory";
import { GifGrid } from "./Components/GifGrid";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch' ]);

    const onAddCategory = (newCategory) => {
        // console.log(newCategory);
        if (categories.includes(newCategory)) return;
        setCategories( [newCategory, ...categories] );
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory={ onAddCategory }
            ></AddCategory>

            { 
                categories.map( ( category ) => ( 
                    <GifGrid 
                        key={category} 
                        category={category}
                    ></GifGrid> 
                )) 
            }

            {/* Gif Item */}
        </>
    )
}