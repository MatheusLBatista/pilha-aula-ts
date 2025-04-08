const expressao = "1 5 + 2 /";
const elementos = expressao.split(' ');

console.log(elementos);

let stack: number[] = [];

for (let elemento of elementos) {

    if(elemento === "+" || elemento === "-" || elemento === '*' || elemento === '/'){
        let ultimoValor = stack.pop() || 0;
        let penultimoValor = stack.pop() || 0;
    

    switch(elemento){
        case '+':
        stack.push(penultimoValor + ultimoValor);
        break;
        
        case '-':
        stack.push(penultimoValor - ultimoValor);
        break;

        case '*':
        stack.push(penultimoValor * ultimoValor);
        break;

        case '/':
        stack.push(penultimoValor / ultimoValor);
        break;
    }

    } else {
        stack.push(parseInt(elemento))
    }
}

console.log(stack)

