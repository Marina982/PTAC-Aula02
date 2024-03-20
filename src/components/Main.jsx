import { useState } from "react";

export default function Main(){

    const [nome, setNome] = useState("")
    const [telefone, setTelefone] = useState("")

    return(<main>
  
<form>
<label For="nome">Nome:</label>
   <input type="text" name="contato" id="nome" 
   value={nome}
   
   onChange={
    (event)=> setNome(event.target.value)}/>
    {nome}

    </form>

<form>
<label For="telefone">Telefone:</label>
<input type="tel" name="numero-telefone" id="telefone" 
value={telefone}


onChange={
  (event)=> setTelefone(event.target.value)}/>
{telefone}

<button type="submit">Enviar</button>

</form>




    </main>);

    
  }