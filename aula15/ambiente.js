/* let num = [5, 7, 8, 9]
num[4] = 11
num.push(22)
num.push(3, 45, 132)
num.length
console.log(`Nosso vetor é o ${num.length}`) */

let valores = [8, 1, 7, 4, 2, 9]
/*
for (let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} do array tem o valor ${valores[pos]}`)
}*/

for (let pos in valores) {
    console.log(` posição ${pos} tem valor ${valores[pos]}`)
}