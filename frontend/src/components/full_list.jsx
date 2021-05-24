import React, {useState, useEffect} from 'react'
import Axios from 'axios'

export default function Full_list() {
    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
            Axios.get('http://localhost:5001/herewegoagain-e4302/us-central1/app/api/readall/')
                .then(res => {
                    const lista = res.data; 
                    setAlunos(lista)
        })
    }, [])


    return (
        <div>
            <ul>
                {alunos.map( aluno =>
                <div className="lista">
                    <li>{aluno.name}</li>
                    <li> {aluno.id} </li>
                    <button onClick={() => Axios.delete(`http://localhost:5001/herewegoagain-e4302/us-central1/app/api/delete/${aluno.id}`)}>Delete</button>
                </div>
                )}  
            </ul>
        </div>
    )
}
