# Como criar uma middleware:

Guardamos todas as middlewares do redux na pasta middleware dentro da pasta src.

Uma Middleware recebe três parametros: 
- state (estado da aplicação);
- next (aciona a promima middleware na pilha ou envia o dado diretamente ao root reducer);
- action (os dados de entrada do dispatch);

O método tem que ser escrito no formato Currying, de forma que desconstrua os parâmetros:

``` JS
    // exemplo currying:
    const func1 = (arg1)=>(arg2)=>(arg3)=>{
        return(arg1, arg2, arg3);
    }
```
para adicionar mais de uma middleware no configureStore tem que ser criada uma função, tendo como retorno todas as middlewares, mais a middleware a ser adicionada.

``` JS
    const store = configureStore({
        reducer:{
            slice1:[],
            slice2:[]
        },
        middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), log]
    });
```

# Redux Logger:

É uma biblioteca para simplificação de criação de middleware com objetivo de criar logs do redux.

basta adicionar da mesma forma que qualquer outra middleware.
