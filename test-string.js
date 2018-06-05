console.time("string prep")

var strings = []

for (var i = 0; i < 1E6; ++i)
    strings.push('{ "value": ' + i + '}')

console.timeEnd("string prep")

console.time("string parse")

var res = []

for (var i = 0; i < 1E6; ++i)
    res.push(JSON.parse(strings[i]))

console.timeEnd("string parse")
	     
