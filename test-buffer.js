console.time("buffer prep")

var buffers = []

for (var i = 0; i < 1E6; ++i)
    buffers.push(Buffer.from('{ "value": ' + i + '}'))

console.timeEnd("buffer prep")

console.time("buffer parse")

var res = []

for (var i = 0; i < 1E6; ++i)
  res.push(JSON.parse(buffers[i]))

console.timeEnd("buffer parse")
