let num = 0;
let chess = '';

for (let i = 0; i < 8; i++){
    for (let g = 0; g < 8; g++){
        if (num % 2 === 0) {
            chess += '██';
        } else {
            chess += '  ';
        }
        num++;
    }
    num++;
    chess += '\n';
}

console.log(chess);