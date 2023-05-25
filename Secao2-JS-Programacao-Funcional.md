# Função de alta ordem (High Order Function):

Funções que recebem parâmetros como argumento e/ou retornam funções

# Composição de funções:

Passar uma funçao, para ser executada e o retorno entrar como parametro de outra função

Exemplo:

```JS
    function ex1(){
        return "test";
    }

    function ex2(word){
        console.log(`this is my ${word}!`);
    }
    // Esta é a composição de funções
    ex2(ex1());

```

OBS: Este método polui muito o código!

# Simplificacao com composição e Pipe:

dependencia instalada: lodash;

com a função compose todas as funções passíveis de composição são transformadas em uma unica função:

Exemplo:

``` JS
    import {compose, pipe} from 'lodash/fp';

    const ex1 = (text)=> text.trim();
    const ex2 = (text)=> `This is my ${text}`;
    const ex3 = (text)=> console.log(text);

    // jeito poluido:
    ex3(ex2(ex1()));
    
    // jeito limpo:
    // problema ainda encontrado: leitura da direita para a esquerda
    let newFunc = compose(ex3, ex2, ex1);

    // leitura da esquerda para a direita:
    newFunc = pipe(ex1, ex2, ex3);

    newFunc();
```

# Currying em programacao funcional:

Currying é um conceito de desestruturação de parametros de funções, só é aplicado em funções com mais de um parâmetro. Converte os parametros em funções que recebem o parametro seguinte e são retornadas pela função de alta ordem:

Exemplo:

```JS
    import {pipe} from 'lodash/fp';
    // problema:

    const ex1 = (text) => text.trim();
    const ex2 = (text) => `This is my ${text}`;
    let ex3 = (templateMsg, text)=> console.log(`${templateMsg} ${text}`); // este método necessita de 2 parâmetros;

    let newFunc = pipe(ex1, ex2, ex3); 
    newFunc("teste"); // retorna: this is my teste undefined
    
    // ex3 necessita de dois parâmetros para funcionar corretamente;

    // forma de consertar (Currying):
    ex3 = (templateMsg)=>{
        return (text)=>{
            console.log(`${templateMsg} ${text}`);
        }
    }
    
    // Simplificação do método:

    ex3 = (templateMsg) => (text) => console.log(`${templateMsg} ${text}`);
    const returnEx3 = ex3("este é meu ")("teste");

    newfunc = pipe(ex1, ex2, ex3("Este é meu,"));  
    newFunc("teste"); // retorno: Este é meu, This is my teste;

```

# Pure Functions:

Pure Functions são funções que sempre tem a mesma saída se dermos o mesmo argumeto;

funções puras não podem depender de:

- data ou tempo atual;
- valores randomicos;
- estados globais;
- conexões de banco de dados;

funções do reducer tem que ser puras.


# Imutabilidade em objetos:

O operador spread pode mudar dados no objeto pai, então sempre que mudar um dado em objeto que é originado com spread é necessário alterar o dado na declaração do objeto filho, a mudança posteriormente impacta os dados do objeto pai por estarem em mesmo endereço de memoria.

``` JS

const obj1 = {name:"teste", age:18};

// jeito errado:
let obj2 = {...obj1};
obj2.name = "teste2" // isso aqui irá mudar o dado do obj1 e obj2

// jeito certo:

let obj2 = {
    ...obj1,
    name:"teste2"
}

```

# Atualizações de objetos usando Immer:

dependência: Immer

Exemplo de código:

``` JS

import { produce } from 'immer';

const testObj = {name:"teste", age:33};

const newTestObj = produce(testObj, (draftState)=>{
    draftState.age = "19";
    draftState.name = "Eu"
});

console.log(testObj);
console.log(newTestObj);

```