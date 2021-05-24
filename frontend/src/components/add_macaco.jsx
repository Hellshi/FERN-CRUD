import React, {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Axios from 'axios'

export default function Add_macaco() {
    
    const [name, setName] = useState('Hell')
    const [age, setAge] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:5001/herewegoagain-e4302/us-central1/app/api/create', {"name": name, "age": age, "id":uuidv4()}) 
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="nome">Seu nome</label>
            <input 
                type="name" 
                id="nome" 
                value={name} 
                onChange={e => setName(e.target.value)}
            /><br/>
            <label htmlFor="idade">Sua idade</label>
            <input 
                type="number" 
                id="idade"
                value={age}
                onChange={e => setAge(e.target.value)}
            /><br/>
            <input type="submit" value="Enviar"/>
        </form>
    )
}
