function colorsArray() {
    let colors = ['verd', 'vermell', 'groc', 'blau', 'negre', 'blanc'];
    document.write(`<h1>Colors → ${colors}<br><br>`);
    document.write(`Tots els colors menors que 'marró' → ${colors.every(menorQueMarro)}<br>`);
    document.write(`Colors que són menors que 'marró' → ${colors.filter(menorQueMarro)}<br>`);
    document.write(`Darrers dos colors → ${colors.slice(colors.length - 2)}<br>`);
    colors.push('turquesa');
    document.write(`Afegit color 'turquesa' → ${colors}<br>`);
    colors.shift();
    document.write(`Eliminat color 'verd' → ${colors}<br>`);
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

Array.prototype.porDiez = function() {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i] * 10;
    }
};

function funcionsArray() {
    let numeros = ['1', '2', '3', '4'];

    // at()
    document.write(`<h3>[${numeros}].at(0) → ${numeros.at(0)}<br><br>`);

    // concat()
    let numeros2 = ['5', '6'];
    document.write(`[${numeros}].concat(${numeros2}) → ${numeros.concat(numeros2)}<br><br>`);

    // constructor
    document.write(`[${numeros}].constuctor → ${numeros.constructor}<br><br>`);

    // copyWithin()
    document.write(`[${numeros}].copyWithin(2, 0) → ${numeros.copyWithin(2,0)}<br><br>`);

    // entries()
    numeros = ['1', '2', '3', '4'];
    document.write(`[${numeros}].entries() → ${numeros.entries()}<br><br>`);

    // every()
    document.write(`[${numeros}].every(menorQueTres) → ${numeros.every(menorQueTres)}<br><br>`);

    // fill()
    document.write(`[${numeros}].fill('0') → ${numeros.fill('0')}<br><br>`);

    // filter()
    numeros = ['1', '2', '3', '4'];
    document.write(`[${numeros}].filter(menorQueTres) → ${numeros.filter(menorQueTres)}<br><br>`);

    // find()
    document.write(`[${numeros}].find(menorQueTres) → ${numeros.find(menorQueTres)}<br><br>`);

    // findIndex()
    document.write(`[${numeros}].findIndex(menorQueTres) → ${numeros.findIndex(menorQueTres)}<br><br>`);

    // flat()
    numeros = ['1', '2', ['3', '4']];
    document.write(`[${numeros}].flat() → ${numeros.flat()}<br><br>`);

    // flatMap()
    document.write(`[${numeros}].flatMap(menorQueTres) → ${numeros.flatMap(menorQueTres)}<br><br>`);

    // forEach()
    numeros = ['1', '2', '3', '4'];
    document.write(`[${numeros}].forEach(porDos) → `);
    numeros.forEach(porDos);
    document.write(`${numeros}<br><br>`);

    // from()
    numeros = ['1', '2', '3', '4'];
    document.write(`Array.from('1234') → ${Array.from('1234')}<br><br>`);

    // includes()
    document.write(`[${numeros}].includes('2') → ${numeros.includes('2')}<br><br>`);

    // indexOf()
    document.write(`[${numeros}].indexOf('2') → ${numeros.indexOf('2')}<br><br>`);

    // isArray()
    document.write(`Array.isArray([${numeros}]) → ${Array.isArray(numeros)}<br><br>`);

    // join()
    document.write(`[${numeros}].join() → ${numeros.join()}<br><br>`);

    // keys()
    document.write(`[${numeros}].keys() → ${numeros.keys()}<br><br>`);

    // lastIndexOf()
    document.write(`[${numeros}].lastIndexOf('2') → ${numeros.lastIndexOf('2')}<br><br>`);

    // length
    document.write(`[${numeros}].length → ${numeros.length}<br><br>`);

    // map()
    document.write(`[${numeros}].map(porDos) → `);
    numeros.map(porDos);
    document.write(`${numeros}<br><br>`);

    // pop()
    numeros = ['1', '2', '3', '4'];
    document.write(`[${numeros}].pop() → ${numeros.pop()}<br><br>`);

    // prototype
    numeros = ['1', '2', '3', '4'];
    document.write(`Array.prototype.porDiez[${numeros}] → `);
    numeros.porDiez();
    document.write(`${numeros}<br><br>`);

    // push()
    numeros = ['1', '2', '3', '4'];
    document.write(`[${numeros}].push('5', '6') → `);
    numeros.push('5', '6');
    document.write(`${numeros}<br><br>`);

    // reduce()
    numeros = ['1', '2', '3', '4'];
    document.write(`[${numeros}].reduce(porDos) → `);
    numeros.reduce(porDos);
    document.write(`${numeros}<br><br>`);

    // reduceRight()
    numeros = ['1', '2', '3', '4'];
    document.write(`[${numeros}].reduceRight(porDos) → `);
    numeros.reduceRight(porDos);
    document.write(`${numeros}<br><br>`);

    // reverse()
    document.write(`[${numeros}].reverse() → ${numeros.reverse()}<br><br>`);

    // shift()
    numeros = ['1', '2', '3', '4'];
    document.write(`[${numeros}].shift() → ${numeros.shift()}<br><br>`);

    // slice()
    numeros = ['1', '2', '3', '4'];
    document.write(`[${numeros}].slice(1, 3) → ${numeros.slice(1, 3)}<br><br>`);

    // some()
    document.write(`[${numeros}].some(menorQueTres) → ${numeros.some(menorQueTres)}<br><br>`);

    // sort()
    numeros = ['4', '3', '2', '1'];
    document.write(`[${numeros}].sort() → ${numeros.sort()}<br><br>`);

    // splice()
    document.write(`[${numeros}].splice(2, 2) → ${numeros.splice(1,2)}<br><br>`);

    // toString()
    numeros = ['1', '2', '3', '4'];
    document.write(`[${numeros}].toString() → ${numeros.toString()}<br><br>`);

    // unshift()
    document.write(`[${numeros}].unshift('5', '6') → ${numeros.unshift('5', '6')}<br><br>`);

    // valueOf()
    numeros = ['1', '2', '3', '4'];
    document.write(`[${numeros}].valueOf() → ${numeros.valueOf()}<br><br>`);

}
