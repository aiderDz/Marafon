function calc(objectA,objectB,oper) {
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
        if (oper !== [operation]) {
            return 'unknown operation'
        }
        if (typeof (objectA) !=='number' || typeof(objectB) !=='number' || typeof(oper) !== undefined) {
            return 'Errooooooor'
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
