function calc(objectA,objectB,oper) {
    if (typeof (objectA) !=='number' || typeof(objectB) !=='number' || typeof(oper) == undefined) {
        return 'Errooooooor'
    }
    if (oper==='sum') {
        return objectA+objectB
    }
        else if (oper==='minus') {
            return objectA-objectB
        }
        else if (oper==='multi') {
            return objectA*objectB
        }
        else if (oper==='div') {
            return objectA/objectB
        }
        else if (oper==='resDiv') {
            return objectA%objectB
        }
        else if (oper==='expon') {
            return objectA**objectB
        }
        else {
            return 'unknown operation'
        }
}
console.log (calc(20, 10, 'sum'))
console.log (calc(20, 10, 'minus'))
console.log (calc(20, 10, 'multi'))
console.log (calc(20, 10, 'div'))
console.log (calc(20, 10, 'resDiv'))
console.log (calc(20, 10, 'expon'))
console.log (calc(10, 'div'))
console.log (calc(20, 10, 'sd' ))