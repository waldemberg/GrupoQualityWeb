function ListFunctions(){
    return(
        <ul className="flex">
            <NameFunctions />
        </ul>
    )
}

function NameFunctions() {
    return (
        functions.map( element => {
           return <li className="ml-10 font-semibold text-lg cursor-pointer">{element}</li>  
        })
    )
}


const functions = [
    "Suporte TI",
    "SAC",
    "Sistema de Tarefas",
    "Estoque"
]

export default ListFunctions;