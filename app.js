const a = ['1', 1, {}, undefined, null]

for (let item of a) {
    // console.log(item)
}

a.forEach(item => {
    console.log(item)
})

console.log(a.length)
console.log(a)