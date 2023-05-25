# O que é Redux-Toolkit:

Redux Toolkit é uma biblioteca para simplificação do código do redux.

O Redux Core (puro), tem um grande problema de repetição de códigos, em vários documentos, o toolkit simplifica esta questão:

# Configurando o store do toolkit:

Por padrão o devtool está habilitado no redux toolkit, e a questão de middlewares para realização de chamadas de api não é necessário utilizando redux toolkit;

# Definindo actions:

Para Criar actions utiizando a função createAction basta importar exportar uma constante que irá receber a função de callback, esta função de callback contém o type e o payload da action.

O parâmetro da função createAction é o type da action:

``` JS
    // basta esta linha para definir a action
    export const addTask = createAction("NOME_DA_ACTION");
```

# Definindo Reducers:

Para Criar um reducer temos que utilizar a função createReducer.

O primeiro parâmetro a ser passado é o estado inicial da aplicação.

O segundo parâmetro a ser passado são de fato as funções redutoras.
As funções redutoras tem que ter o mesmo nome que o type da action.
Uma forma utilizada para deixar dinâmica a troca de nomes de funções é utilizar um array no nome da função.

para alterar o estado das funções deve-se usar forma mutável, ou seja mudar diretamente o valor do estado

``` JS

    export default createReducer([
        // estado inicial
    ], {
        // funções redutoras
        [act1.type]: (state, action)=>{
            //code
        },
        [act2.type]: (state, action)=>{
            // code
        },
        [act3.type]: (state, action)=>{
            // code
        }
    });

```

# Criando Slices com Redux Toolkit:

Slice serve para criação conjunta de actions e reducers, desta forma temos um código mais limpo, fazendo mais sentido com o conceito de duck module.

No Slice o nome das funções redutoras define o nome da action.

Sintaxe:

``` JS
    const slice = createSlice({
        name:"Ao_que_se_refere_o_slice",
        initialState:[
            // Estado inicial da aplicação
        ],
        reducers:{
            // funções redutoras:
            // action: funcao redutora
        }
    });
    export const { acts } = slice.actions;
    export default slice.reducer;
```

# Combinando Reducers usando Redux-toolkit:

RootReducer é o reducer principal da aplicação, ele concentra todos os reducers da aplicação.