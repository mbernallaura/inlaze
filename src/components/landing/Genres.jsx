'use client'
import { useState } from "react"

const options =[
    {title: 'horror', value: '1'},
    {title: 'Research', value: '2'}
]

export const Genres = () => {
    const [optionSelect, setOptionSelect] = useState('');

    const handleSelect = (event) =>{
        setOptionSelect(event.target.value);
    }
    return (
        <div className="flex flex-col mt-8">
            <label >Genres</label>
            <select className="form-select mt-4 p-4 pr-8 rounded bg-blackDark" onChange={ handleSelect }>
                {
                    options.map(option =>(
                        <option key={option.value}>{option.title}</option>
                    ))
                }
            </select>
        </div>
    )
}

