// Dirbti su šiuo masyvu:
// [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];
 
// 1. Dirbant su šiuo masyvu eilės tvarka atlikti žemiau pateiktas užduotis. Naudoti metodus: pop, push, shift, unshift, splice.
// 1.1. Pašalinti pirmą masyvo narį.
// 1.2. Pašalinti paskutinį masyvo narį.
// 1.3. Rasti vidurinį masyvo narį ir jį pašalinti.
// 1.4. Pašalinti priešpaskutinį masyvo narį.
// 1.5. Pašalinti antrą masyvo narį.
// 1.6. Pašalinti 7 ir 8 masyvo narius.
// 1.7. Pašalinti 4, 5 ir 6 masyvo narius skaičiuojant nuo galo.
// 1.8. Pašalinti trečią masyvo narį ir į jo vietą įdėti skaičių 888.
// 1.9. Pašalinti dešimtą masyvo narį ir į jo vietą įdėti skaičius: 33, 789 ir 6543.
// 1.10. Pašalinti paskutinį masyvo narį į jo vietą įdėti skaičius: 321, 654, 987.
// 1.11. Tarp pirmo ir antro masyvo narių įdėti skaičių 11.
// 1.12. Tarp 13 ir 14 masyvo narių įdėti skaičių 1.
// 1.13. Tarp paskutinio ir priešpaskutinio masyvo narių įdėti skaičių -1.
// 1.14. Į masyvo pradžią pridėti skaičius: 1, 2, 3.
// 1.15. Į masyvo pabaigą pridėti skaičius: -333, -321, -312.
// 1.16. Į masyvo vidurį pridėti skaičių 0.
// 1.17. Pašalinti pirmą masyvo narį.
// 1.18. Pašalinti paskutinį masyvo narį.
// 1.19. Į masyvo pradžią pridėti žodį "start".
// 1.20. Į masyvo pabaigą pridėti žodį "end".
 
// Atlikus šias užduotis eilės tvarka masyvas turėtų atrodyti taip:
// ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']

let data = [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751]
data.splice(0, 1)
data.splice(-1, 1)
console.log(data.length)
data.splice(10, 1)
data.splice(-2, 1)
data.splice(7, 2)
data.splice(-6, 3)
data.splice(3, 1, 888)
data.splice(10, 1, 33, 789, 6543)
data.splice(-1, 1, 321, 654, 987)
data.splice(1, 0, 11)
data.splice(14, 0, 1)
data.splice(-1, 0, -1)
data.unshift(1, 2, 3)
data.push(-333, -321, -312)
data.splice(14, 0, 0)
data.splice(0, 1,)
data.splice(-1, 1,)
data.splice(4, 1)
data.unshift('Start')
data.push('End')
console.log(data)

// 2. Tęsiant darbą su šiuo masyvu atlikti šias užduotis naudojant slice metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina slice metodas, ir šį kintamąjį išvesti į konsolę:


// 2.1. Gauti pirmą masyvo narį.
let sliceddata1 = data.slice(0,1)
console.log(sliceddata1)

// 2.2. Gauti paskutinį masyvo narį.
let sliceddata2 = data.slice(-1)
console.log(sliceddata2)

// 2.3. Gauti antrą masyvo narį.
let sliceddata3 = data.slice(1, 2)
console.log(sliceddata3)

// 2.4. Gauti priešpaskutinį masyvo narį.
let sliceddata4 = data.slice(-2, -1)
console.log(sliceddata4)

// 2.5. Gauti aštuntą masyvo narį.
let sliceddata5 = data.slice(7, 8)
console.log(sliceddata5)

// 2.6. Gauti devintą masyvo narį skaičiuojant nuo galo.
let sliceddata6 = data.slice(-9, -8)
console.log(sliceddata6)

// 2.7. Gauti vidurinį masyvo narį.
// let sliceddata7 = data.slice(length)
// console.log(sliceddata7)
let sliceddata7 = data.slice(13, 14)
console.log(sliceddata7)

// 2.8. Gauti pirmus tris masyvo narius.
let sliceddata8 = data.slice(0, 3)
console.log(sliceddata8)

// 2.9. Gauti paskutinius tris masyvo narius.
let sliceddata9 = data.slice(-4, -1)
console.log(sliceddata9)

// 2.10. Gauti pirmus 10 masyvo narius.
let sliceddata10 = data.slice(0, 10)
console.log(sliceddata10)

// 2.11. Gauti paskutinius 10 masyvo narius.
let sliceddata11 = data.slice(-11, -1)
console.log(sliceddata11)

// 2.12. Gauti nuo 3 iki 8 masyvo nario (iš viso 6 nariai).
let sliceddata12 = data.slice(4, 10)
console.log(sliceddata12)

// 2.13. Gauti nuo 5 iki 9 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 5 nariai).
let sliceddata13 = data.slice(5, 10)
console.log(sliceddata13)

// 2.14. Gauti nuo 11 iki 19 masyvo nario (iš viso 9 nariai).
let sliceddata14 = data.slice(10, 19)
console.log(sliceddata14)

// 2.15. Gauti nuo 9 iki 17 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 9 nariai).
let sliceddata15 = data.slice(8, 17)
console.log(sliceddata15)

// 2.16. Gauti visus masyvo narius išskyrus pirmą.
let sliceddata16 = data.slice(1)
console.log(sliceddata16)

// 2.17. Gauti visus masyvo narius išskyrus paskutinį.
let sliceddata17 = data.slice(0, -1)
console.log(sliceddata17)

// 2.18. Gauti visus masyvo narius išskyrus pirmus 5.
let sliceddata18 = data.slice(5)
console.log(sliceddata18)

// 2.19. Gauti visus masyvo narius išskyrus paskutinius 5.
let sliceddata19 = data.slice(0, -6)
console.log(sliceddata19)

// 2.20. Gauti visus masyvo narius iki vidurinio masyvo nario, vidurinio nario neįskaičiuojant (iš viso 13 narių).
let sliceddata20 = data.slice(0, 13)
console.log(sliceddata20)

// 2.21. Gauti visus masyvo narius nuo vidurinio masyvo nario, vidurinio nario neįskaičiuojant, iki pabaigos (iš viso 13 narių).
let sliceddata21 = data.slice(-13)
console.log(sliceddata21)

// 2.22. Gauti visus narius išskyrus pirmą ir paskutinį.
let sliceddata22 = data.slice(1, -1)
console.log(sliceddata22)

// 2.23. Gauti visus narius išskyrus pirmus penkis ir paskutinius tris.
let sliceddata23 = data.slice(5, -3)
console.log(sliceddata23)

// 2.24. Gauti visus narius išskyrus pirmą ir paskutinius 8.
let sliceddata24 = data.slice(1, -8)
console.log(sliceddata24)

// 2.25. Gauti visus narius išskyrus pirmus 7 ir paskutinį.
let sliceddata25 = data.slice(7, -1)
console.log(sliceddata25)

// 2.26. Gauti visus narius išskyrus pirmus 9 ir paskutinius 12.
let sliceddata26 = data.slice(9, -12)
console.log(sliceddata26)

// 2.27. Gauti 9 narius skaičiuojant nuo 11.
let sliceddata27 = data.slice(11, 20)
console.log(sliceddata27)


