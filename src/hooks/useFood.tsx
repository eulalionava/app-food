import React, { useState } from 'react'

export const useFood = ()=> {

    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

    const selecionarCategoria = (index:number)=>{
        console.log(index);
        setSelectedCategoryIndex(index);
    }

    return {
        selectedCategoryIndex,
        selecionarCategoria
    }
}
