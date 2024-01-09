const Challenge = () => {
    const x=3, y=4;
    return(
        <div>
            <h1>Valores:</h1>
            <p>Valor 1: {x}</p>
            <p>Valor 2: {y}</p>
            <button onClick={console.log(x+y)}>Clique aqui</button>
        </div>
    );
}

export default Challenge;
