# Regras do Redux:

Uma aplicação tem apenas um Store.

# O que é um Reducer:

Um Reducer é uma função que recebe como parâmetro o atual estado da aplicação e retorma o estado atualizado da aplicação

Reducer é não pode realizar qualquer outro tipo de ação além de atualização de estado.

Parametros passados ao reducer se chamam actions

# 1º Passo - Primeira aplicação com Redux:

Slices = divisões de dados no store

# 2º Passo - Listando todas as Actions:

As actions em redux puro são objetos com atributo type, que será utilizado para o dispatch posteriormente, e atributo payload.

O payload é um objeto em que englobará o novo valor do estado;

estrutura padrão de action:

``` JS

{
    type:"ACTION_NAME",
    payload:{
        att:"value"
    }
}

```

# 3º Passo - Criando Função Redutora (Reducer):

# 4º Passo - Criar o Store:

Root Reducer = A compilação de todos os reducers 

Utilizar Root Reducer assim que tiver mais de um reducer;

# Acionando ações (Dispatch Actions):

A action, como citado anteriormeente se trata de um objeto com os parametros type e payload, sendo o payload um objeto que contém todos os dados para alteração do estado.

``` JS
    // action em formato de objeto:
    let action = {type:"NAME_ACTION", payload:{
        parametro1:"dado1",
        parametro2:"dado2",
        parametro3:"dado3"
    }}

    // action abstraida a uma função:

    export const nameAction({ parametro1, parametro2, parametro3 }){
        return {
            type:"NAME_ACTION",
            payload:{
                parametro1,
                parametro2,
                parametro3
            }
        }
    }

```

# Entendendo os métodos de inscrição e desinscrição:

O método de inscrição se trata de um watcher, em que assim que há uma mudança de estado no store aciona uma callback.

Este método é acionado utilizando a classe store.

``` JS

    store.subscribe(()=>{
        //exemplo de uso:
        console.log("Estado Atual: ", store.getState());
    });

```

O método de desinscrição quando acionado impede que o watcher funcione a partir da linha de declaração.

``` JS

    const unsubscribe = store.subscribe(()=>{
        //exemplo de uso:
        console.log("Estado Atual: ", store.getState());
    });

    store.dispatch(action()); // aciona a callback do método subscribe;
    unsubscribe();
    store.dispatch(action()); // não aciona a callback do método subscribe;

```

# Melhor Estrutura de Pastas para Redux:

``` YML
    # método antigo:
    src:
        store:
            - store.js
            slice1:
                - actions.js
                - reducer.js
                - actionTypes.js
            slice2:
                - actions.js
                - reducer.js
                - actionTypes.js
    # método novo:

    src:
        store:
            - store.js
            - slice1.js
            - slice2.js

```

# Introdução a Redux Thunk:

Thunk em programação é algum pedaço de código que atrasa o funcionamento do sistema.

é necessário utilizar o redux thunk para retartar o processo do redux quando se necessita utilizar as funções de forma assincrona

# Chamando uma API usando Redux-thunk:
``` JS
    // tem que ser feito no mesmo documento de declaração de  ações;
    // forma de fazer uma middleware para realizar uma chamada de API(thunk):

    function fetchData(){
        return async (dispatch, getState)=>{
            let response = await fetch("URL API");
            reponse = response.json();
            dispatch(funcaoAction(response)); // ao ser acionada realizará outro dispatch.
        } 
    }

    // chamada da função deve ser feita no arquivo de store:

    store.dispatch(fetchData());
```