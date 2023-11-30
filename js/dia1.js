function colorsArray() {
    let colors = ['verd', 'vermell', 'groc', 'blau', 'negre', 'blanc'];
    document.writeln(`<h1>Tots els colors menors que 'marró' --> ${colors.every(menorQueMarro)}<br>`);
    document.write(`Colors que són menors que 'marró' --> ${colors.filter(menorQueMarro)}<br>`);
    document.write(`Darrers dos colors: ${colors.slice(colors.length - 2)}<br>`);
    colors.push('turquesa');
    document.write(`Afegit color 'turquesa': ${colors}<br>`);
    colors.shift();
    document.write(`Eliminat color 'verd': ${colors}<br>`);
}

function menorQueMarro(color) {
    return color < 'marró';
}

function menorQueTres(numero) {
    return numero < 3;
}

function porDos(numero, index, arr) {
    arr[index] = numero * 2;
}

function funcionsArray() {
    let numeros = ['1', '2', '3', '4'];

    // at()
    document.write(`<h3>[${numeros}].at(0) → ${numeros.at(0)}<br><br>`);

    let numeros2 = ['5', '6'];

    // concat()
    document.write(`[${numeros}].concat(${numeros2}) → ${numeros.concat(numeros2)}<br><br>`);
    // constructor
    document.write(`[${numeros}].constuctor → ${numeros.constructor}<br><br>`);
    // copyWithin()
    document.write(`[${numeros}].copyWithin(2, 0) → ${numeros.copyWithin(2,0)}<br><br>`);

    numeros = ['1', '2', '3', '4'];

    // entries()
    document.write(`[${numeros}].entries() → ${numeros.entries()}<br><br>`);
    // every()
    document.write(`[${numeros}].every(menorQueTres) → ${numeros.every(menorQueTres)}<br><br>`);
    // fill()
    document.write(`[${numeros}].fill('0') → ${numeros.fill('0')}<br><br>`);

    numeros = ['1', '2', '3', '4'];

    // filter()
    document.write(`[${numeros}].filter(menorQueTres) → ${numeros.filter(menorQueTres)}<br><br>`);
    // find()
    document.write(`[${numeros}].find(menorQueTres) → ${numeros.find(menorQueTres)}<br><br>`);
    // findIndex()
    document.write(`[${numeros}].findIndex(menorQueTres) → ${numeros.findIndex(menorQueTres)}<br><br>`);
    // flat()
    document.write(`[${numeros}].flat() → ${numeros.flat()}<br><br>`);
    // flatMap()
    document.write(`[${numeros}].flatMap(menorQueTres) → ${numeros.flatMap(menorQueTres)}<br><br>`);
    // forEach()
    document.write(`[${numeros}].forEach(porDos) → `);
    numeros.forEach(porDos);
    document.write(`${numeros}<br><br>`);

    numeros = ['1', '2', '3', '4'];

    // from()
    document.write(`Array.from('1234') → ${Array.from('1234')}<br><br>`);
    // includes()
    document.write(`[${numeros}].includes('2') → ${numeros.includes('2')}<br><br>`);
    // indexOf()
    document.write(`[${numeros}].indexOf('2') → ${numeros.indexOf('2')}<br><br>`);
    // isArray()
    document.write(`Array.isArray([${numeros}] → ${Array.isArray(numeros)}<br><br>`);
    // join()
    document.write(`[${numeros}].join() → ${numeros.join()}<br><br>`);
    // keys()
    document.write(`[${numeros}].keys() → ${numeros.keys()}<br><br>`);
    // lastIndexOf()
    document.write(`[${numeros}].lastIndexOf('2') → ${numeros.lastIndexOf('2')}<br><br>`);
    // length
    document.write(`[${numeros}]<br><br>`);
    // map()
    document.write(`[${numeros}]<br><br>`);
    // pop()
    document.write(`[${numeros}]<br><br>`);
    // prototype
    document.write(`[${numeros}]<br><br>`);
    // push()
    document.write(`[${numeros}]<br><br>`);
    // reduce()
    document.write(`[${numeros}]<br><br>`);
    // reduceRight()
    document.write(`[${numeros}]<br><br>`);
    // reverse()
    document.write(`[${numeros}]<br><br>`);
    // shift()
    document.write(`[${numeros}]<br><br>`);
    // slice()
    document.write(`[${numeros}]<br><br>`);
    // some()
    document.write(`[${numeros}]<br><br>`);
    // sort()
    document.write(`[${numeros}]<br><br>`);
    // splice()
    document.write(`[${numeros}]<br><br>`);
    // toString()
    document.write(`[${numeros}]<br><br>`);
    // unshift()
    document.write(`[${numeros}]<br><br>`);
    // vaueOf()
    document.write(`[${numeros}]<br><br>`);
}
