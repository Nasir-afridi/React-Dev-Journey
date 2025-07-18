import React, { useState } from 'react'

const AddDeleteUsers = () => {
    const [name, setName] = useState('') 
    const [list, setList] = useState([])

    function AddUser() {
        if(name.trim() !== '') {
            setList([...list, name]);
            setName('')
        }
    }

    function deleteHandler(indexDelete) {
        const newList = list.filter((item, index) => index !== indexDelete);
        setList(newList)
    }

    return ( 
        <>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
            <button onClick={AddUser}>ADD</button>

            <ul>
                {
                    list.map((item, index) => (
                        <li key={index}>
                            {item}
                            <button onClick={() => deleteHandler(index)}>Delete</button>
                        </li>
                    ))
                }    
            </ul>        
        </>
    )
}

export default AddDeleteUsers;
