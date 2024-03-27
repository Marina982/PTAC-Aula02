import { useState } from "react";

export default function Main(){

    const [nome, setNome] = useState("")
    const [telefone, setTelefone] = useState("")
    const [listaContatos, setListaContatos] = useState( [ ] ) // constante para uma lista 

    const registrar = (event) => {
      event.preventDefault()
       alert("Ok");

       setListaContatos([...listaContatos, {
        nomelista: nome,
        Telefonelista: telefone
       }])
    }
    console.table(listaContatos);
   

    return(<main>
  
<form onSubmit={registrar}>
<label For="nome">Nome:</label>
   <input type="text" name="contato" id="nome" 
   value={nome}
   
   onChange={
    (event)=> setNome(event.target.value)}/>
    {nome}

    
<label htmlFor="telefone">Telefone:</label>
<input type="tel" name="numero-telefone" id="telefone" 
value={telefone}

   onChange={
  (event)=> setTelefone(event.target.value)}/>
{telefone}

<button type="submit">Enviar</button>

</form>




    </main>);

    
  }