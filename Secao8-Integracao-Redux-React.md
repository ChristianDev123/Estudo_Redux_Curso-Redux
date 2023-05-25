# Configurar Store no React:

Temos duas formas de configurar store no React:

1. Escrevendo todo o código manualmente;
2. Utilizando a lib react-redux;

useContext -> é um hook que passa a todos os components child o valor como parâmetro, mesma lógica do componente Provider do react-router-dom.

``` JS
    // Utilização dos Contexts:
    // em um arquivo na pasta contexts:
    export default createContext()

    // Propagação de informações do context:
    // em um component ou app.jsx
    import xContext from 'context/x';
    [...]
    return (
        <xContext.provider value={valor}>
            /* todos os childs que irão ter acesso aos valores */
        <xContext.provider>
    )

    // Puxar as informações do context:
    // dentro de um componente filho:
    import xContext from 'context/x';
    const value = useContext(xContext);
```

# Conectando com redux usando react-redux:

Utilizar redux com react é muito complicado e exige um grande código confuso para funcionar, por isso deve-se utilizar o react-redux;

