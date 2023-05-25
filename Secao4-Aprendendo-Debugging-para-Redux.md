# Configurar redux-devTools:

Instalar a extensão do redux devtools no Chrome

adicionar o código de conexão da extensão no método de criação de store da aplicação:

``` JS
    const store = createStore(
        reducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // linha de conexão
    );
```

os valores do estado estaram na aba redux na aba de inspeção do chrome (F12)

# Como usar o redux devTools:

1. clicar no dropdown da aplicação e selecionar a aplicação conectada;
2. Aba Log monitor registra todas as mudanças de valores da aplicação;
3. Aba Inspector mostra individualemente as actions acionadas e quais dados foram passadas no payload da action;
4. Aba test - serve para testar o comportamento da action de forma unitária;

# Como rastrear um código redux:

Por padrão a ferramenta de rastreamento de código é desativada, para habilitar esta função é necessário a configuração manual da função e a instalação da dependência __redux-dev-tools-extension__


Com esta dependência instalada podemos trocar a função de conexão com o navegador pelo módulo **devToolsEnhancer**

``` JS
    import { devToolsEnhancer } from 'redux-devtools-extension';

    const store = createStore(
        reducer,
        devtoolsEnhancer({ trace: true })
    );

```

Há uma forma de configurar a extensão para ela ter acesso ao seu código e te redirecionar exatamente para a linha onde está ocorrendo o erro.
