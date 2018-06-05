console.time("buffer prep")

var buffers = []

for (var i = 0; i < 1E6; ++i)
    buffers.push(Buffer.from('{ "value": ' + i + '}'))

console.timeEnd("buffer prep")

console.time("buffer tostring parse")

var res = []

for (var i = 0; i < 1E6; ++i)
    res.push(buffers[i].toString())

console.timeEnd("buffer tostring parse")
