for(let i = 1; i <= 10; i++){
    console.log(i);
}

for(let i = 2; i <= 20; i = i+2){
    console.log(i);
}

for(let i =  10; i >= 1; i--){
    console.log(i);
}

let sum = 0;
for(let i = 1; i <= 100; i++) {
    sum = sum + i;
}
 console.log(sum)

 let i = 1
 do{
    console.log(i)
    i++
 }while(i <= 3)


let table = 5;

for(let i = 1; i <= 10; i++) {
  console.log(`${table} x ${i} = ${table * i}`)   
}