const estudiar = true;
console.log(estudiar);
console.log(typeof estudiar);


const trabajo = false;
console.log(trabajo);
console.log(typeof trabajo);

const estudiar2 = "true";
console.log( typeof estudiar2);


console.log(estudiar === "true");

const auntenticado = false;
if(auntenticado){
    console.log('puedes acceder')
}else{
    console.log('debes autenticarte')
    
}

const loggin = true;
console.log(loggin ? `puedes entrar`: `no estás auntenticar`);