import { useState } from "react";

export default function Main(){

    const [nome, setNome] = useState("")
    const [telefone, setTelefone] = useState("")
    const [CPF, setResgistrogeral] = useState("")
    const [listaContatos, setListaContatos] = useState( [ ] ) // constante para uma lista 

    const registrar = (event) => {
      event.preventDefault()
       alert("Ok");

       setListaContatos([...listaContatos, {
        nomelista: nome,
        Telefonelista: telefone,
        CpfSalvo: CPF
       }])
    }
    console.table(listaContatos);
   

    return(<main>
  
<form onSubmit={registrar}>
<label htmlFor="nome">Nome:</label>
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


<label htmlFor="CPF">CPF:</label>
<input type="cp" name="numero-CPF" id="Cpf" 
value={CPF}

   onChange={
  (event)=> setResgistrogeral(event.target.value)}/>
{CPF}

<button type="submit">Enviar</button>




</form>


{listaContatos.map((contato, index)=> 
<div key={index}>
<p>{contato.nomelista}</p>
<p>{contato.Telefonelista}</p>
<p>{contato.CpfSalvo}</p>
</div>)}

    </main>);

    
  }