const R = require('ramda');


function mapToNumberObject(num) {
    return { value: num };
}

const arr = [-1, 50, 5, 10, -8, 20, 25, 0, 100, 14, -123];




// ExercÃ­cio 1: use map() para transformar 'arr' em objetos usando mapToNumberObject()

const arr2 = arr.map(elem =>{
    elem = mapToNumberObject(elem);
    return elem;
});
    console.log('SAIDA EXERCICIO 1' + '\n');

    console.log(arr2);

    console.log('\n');

// ExercÃ­cio 2: seguindo o modelo das 2 primeiras funÃ§Ãµes implemente as outras 4 funÃ§Ãµes

// function isEven(number) {                <---- função normal
//     const n = R.clone(number);
//     n.even = n.value % 2 == 0;
//     return n;
// }

// function positive(number) {              <---- função normal
//     const n = R.clone(number);
//     n.positive = n.value > 0;
//     return n;
// }

// function isOdd(number) {                 <---- função normal
//     // Implementar
//     const n = R.clone(number);
//     n.odd = n.value % 2 !== 0;
//     return n;
// }

// function negative(number) {              <---- função normal
//     // Implementar
//     const n = R.clone(number);
//     n.negative = n.value < 0;
//     return n;
// }

// function isZero(number) {                <---- função normal
//     // Implementar
//     const n = R.clone(number);
//     n.zero = n.value === 0;
//     return n;
// }

// function isPrime(number) {               <---- função normal
//     // Implementar
//     const n = R.clone(number);
//     let count = 2;
//     let aux = false;

//     for(let i = 2; i < n.value; i++){
//         if(n.value % i == 0){
//             count++;
//         }
//     }
//     if(count > 2){
//         aux = false;
//     }else{
//         aux = true;
//     }

//     n.prime = aux;
//     return n;

// }


// ExercÃ­cio 3: refatore todas as funÃ§Ãµes para a forma usando arrow function (=>)

const isEven = number =>{                  
    const n = R.clone(number);
    n.even = n.value % 2 == 0;
    return n;
}

const positive = number =>{
    const n = R.clone(number);
    n.positive = n.value > 0;
    return n;
}

const isOdd = number =>{
    const n = R.clone(number);
    n.odd = n.value % 2 !== 0;
    return n;
}

const negative = number =>{
    const n = R.clone(number);
    n.negative = n.value < 0;
    return n;
}

const isZero = number =>{
    const n = R.clone(number);
    n.zero = n.value === 0;
    return n;
}

const isPrime = number =>{

    const n = R.clone(number);
    let count = 2;
    let aux = false;

    for(let i = 2; i < n.value; i++){
        if(n.value % i == 0){
            count++;
        }
    }
    if(count > 2){
        aux = false;
    }else{
        aux = true;
    }

    n.prime = aux;
    return n;

}

// ExercÃ­cio 4: use R.pipe para compor as funÃ§Ãµes: isEven, positive, isOdd, negative, 
    // isZero, e isPrime. Teste a funÃ§Ã£o composta com um Ãºnico objeto

    const teste = R.pipe(
        isEven,
        positive,
        isOdd,
        negative,
        isZero,
        isPrime
    );
    
    console.log('SAIDA EXERCICIO 4' + '\n');

    const exercicio4 = {value: 13};
    console.log(teste(exercicio4));

    console.log('\n');

// ExercÃ­cio 5: use a funÃ§Ã£o composta do Ex. 4 para transformar os nÃºmeros em 'arr'
    console.log('SAIDA EXERCICIO 5' + '\n');
    console.log(arr2.map(teste));







