function* thisGenerator() {
    for(let i=0; i < 5; i++) {
        yield i
    }
}

const iter = thisGenerator()

console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())

const p = new Promise(function(resolve, reject) {
    setTimeout(() => {
        const backendData = {
            user: 'Viktor',
            email: 'zale@e1.ru',
            pass: '******'
        }
        console.log(iter.next())
        resolve(backendData)
    }, 2000)
})

p.then(function(data) {
    console.log('Promise completed: ', data)
})