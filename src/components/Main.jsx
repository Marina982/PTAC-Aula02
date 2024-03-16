import { useState } from "react";

export default function Main(){

    const [nome, setNome] = useState("")
    const [telefone, setTelefone] = useState("")

    return(<main>
  
<form>
<label For="nome">Nome:</label>
   <input type="text" name="" id="" onChange={
    (event)=> setNome(event.target.value)}/>
    {nome}

    </form>

<form>
<label For="telefone">Telefone:</label>
<input type="tel" name="" id="" onChange={
  (event)=> setTelefone(event.target.value)}/>
{telefone}

<button type="submit">Enviar</button>

</form>




    </main>);

    
  }