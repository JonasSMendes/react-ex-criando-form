import { useState } from "react";

const App = () => {
 
 const [name , setName] = useState('pedro')
 const [sobrenome , setsobrenome] = useState('almeida')
 const [idade , setidade] = useState('10')
 

const ageNt = (e:React.ChangeEvent<HTMLInputElement>) => {
  setidade(e.target.value)
}
const nameNt = (e:React.ChangeEvent<HTMLInputElement>) => {
  setName(e.target.value)
}
const sobNt = (e:React.ChangeEvent<HTMLInputElement>) => {
  setsobrenome(e.target.value)
}

  return (
    <div>
      <div>
        Nome:
        <input type="text" value={name} onChange={nameNt} />
      </div>

      <div>
        Sobrenome:
        <input type="text" value={sobrenome} onChange={sobNt}/>
      </div>

      <div>
        Idade:
        <input type="text"  value={idade} onChange = {ageNt}/>
      </div>

      <hr/>

      Olá {`${name} ${sobrenome}`}, tudo bem?<br/>
      Você tem {idade} anos.
    </div>
  );
}

export default App;