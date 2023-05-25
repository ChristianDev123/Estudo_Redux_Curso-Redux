# Fazendo chamadas a API utilizando método de funções simples:

OBS: se houver retorno dentro de uma função reducer o valor retornado passará a ser o estado da aplicação. isso será necessário para a chamada da API.

``` JS
    // reducer getTask
    {
        getTasks:(state, action)=>{
            return action.payload.task;
        }
    }
    // Método para requisição de dados: 
    function gettingTasks(){
        axios.get("http://localhost:5000/api/tasks")
        .then(({data})=>(store.dispatch(getTasks({ task:data }))))
        .catch((error)=>(store.dispatch({type:"SHOW_ERROR", payload:{error: error.message}})));
    }
```

# Fazendo chamadas a API utilizando método thunk:

Para criarmos um thunk precisamos utilizar o método createAsyncThunk.

Este método necessita de dois parâmetros:

1. Nome da action (type);
2. callback que realizará a requisição.

No callback do thunk é necessário retornar os dados da api passando o nome do slice:

```JS
    export const fetchTask = createAsyncThunk("fetchTasks", async ()=>{
        const response = await axios.get("http://localhost:5000/api/task");
        return { task:response.data };
    })
```

Utilizando um thunk, sempre haverá o acionamento de dois estados da requisição, tendo três tipos de estados:

- Pending (em processamento);
- Fulfilled (executado com sucesso);
- Rejected (erro);

Extras reducers tem o mesmo objetivo dos reducers, mas eles tem como função ser um watcher de funções thunk

Para o caso de erro na requisição é importante acionar a função rejectWithValue, por conta que no reducer não há método exato para receber o erro, sendo assim sem esta função o estado se tornaria o erro.
Resumindo, a função rejectWithValue retorna um spread do estado com o erro.

Exemplo:

``` JS
    export const fetchTask = createAsyncThunk("fetchTasks", async ()=>{
        // Exemplo de requisição:
        try{
            const response = await axios.get("http://localhost:5000/api/tasks");
            return { task:response.data };
        }catch({message}){
            return rejectWithValue({ error: message });
        }
    })

    createSlice({
        name:"",
        initialState:{},
        reducers:{},
        extraReducers:{
            [fetchTask.fulfilled]:(state, action)=>{
                state.var = action.payload.task;
            }
        }
    })

```

# Fazendo chamadas a API utilizando middlewares:

# Criando action geral de API:

No caso de utilizar o método de middleware para realizar a requisição, para padronizar a action deve-se usar, em um arquivo separado, o método createAction.

# Criando ActionCreators:

Action Creator é uma abstração da action, isso serve para deixar dinâmico os dados necessários para acionar a middleware da api.

