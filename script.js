// Array methods
// map -> changes every element in the array - the length 
// of the array does not get changed
// reduce -> this changes the array to one value
// filter -> filter out some element from the array
// sort -> we sort the array / change the order of the elements
// reverse -> reverses the array

// map

const numbers = [1, 2, 3, 4, 5]

function callback(el) {
	console.log(el)
	return el * 2
}

console.log(callback)

// const res = numbers.map(callback)
const res = numbers.map(function (number) {
	return number * 2
})

console.log(res)

function myMap(arr, callback) {
	const result = []
	for (let element of arr) {
		// console.log(element)
		const resultOfCallback = callback(element)
		result.push(resultOfCallback)
	}
	return result
}

const arr = [1, 2, 3]
const resultOfMap = myMap(arr, function (el) {
	return el * 3
})
console.log(resultOfMap)
console.clear()

const beatles = ['john', 'paul', 'george', 'ringo']

// 'mr john' 
const prefixed = beatles.map(function (beatle, i) {
	// this is the index of the current element
	console.log(i)
	return 'mr ' + beatle
})
console.log(prefixed)

const students = [
	{
		name: "Tony Parker",
		firstProject: 80,
		secondProject: 75
	},
	{
		name: "Marc Barchini",
		firstProject: 84,
		secondProject: 65
	},
	{
		name: "Claudia Lopez",
		firstProject: 45,
		secondProject: 95
	},
	{
		name: "Carolina Perez",
		firstProject: 85,
		secondProject: 72
	}
];
console.clear()
// 1. map over students and create an array containing only the names
// ['Tony Parker', 'Marc Barchini', etc]

const names = students.map(function (student) {
	return student.name
})
console.log(names)


// map over students and change the array to:
// [{name: <name of student>, total: <score of 1. and 2. projects added>}]
const scores = students.map(function (student, index) {
	return {
		name: student.name,
		total: student.firstProject + student.secondProject
	}
})
console.log(scores)

console.clear()

// reduce 

const nums1 = [2, 5, 7]
// accumulator : value that we create in the end - the value that we 
// reduce to
// value : current value in the array that we process
const sum = nums1.reduce(function (accumulator, value) {
	console.log('acc: ', accumulator)
	console.log('value: ', value)
	return accumulator + value
}, 0)
console.log(sum)

const words = ['foo', 'bar', 'baz']
// sum up all the string lengths

const lengths = words.reduce(function (acc, val) {
	return acc + val.length
}, 0)
console.log(lengths)
console.clear()

const people = [
	{ name: "Candice", age: 25 },
	{ name: "Tammy", age: 30 },
	{ name: "Allen", age: 49 },
	{ name: "Nettie", age: 21 },
	{ name: "Stuart", age: 17 }
];

// use reduce to sum up all the ages of the people
const ages = people.reduce(function (sum, val) {
	return sum + val.age
}, 0)

console.log(ages)
console.clear()

const product = {
	name: "AmazonBasics Apple Certified Lightning to USB Cable",
	price: 7.99,
	manufacter: "Amazon",
	reviews:
		[
			{
				user: "Pavel Nedved",
				comments: "It was really usefull, strongly recommended",
				rate: 4
			},
			{
				user: "Alvaro Trezeguet",
				comments: "It lasted 2 days",
				rate: 1
			},
			{
				user: "David Recoba",
				comments: "Awesome",
				rate: 5
			},
			{
				user: "Jose Romero",
				comments: "Good value for money",
				rate: 4
			},
			{
				user: "Antonio Cano",
				comments: "It broked really fast",
				rate: 2
			},
		]
}

// sum up all the rates of this product using reduce
console.log(product.reviews)
const rates = product.reviews.reduce(function (sum, product) {
	// console.log(val.rate)
	return sum + product.rate
}, 0)
console.log(rates)

console.clear()

// filter
const nums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// filter out the even numbers
const evens = nums3.filter(function (number) {
	// if the number is even -> return true 
	// if the number is odd -> return false
	// if (number % 2 === 0) {
	// 	return true
	// } else {
	// 	return false
	// }
	return number % 2 === 0
})
console.log(evens)

const greaterThanThree = nums3.filter(function (number) {
	return number > 3
})
console.log(greaterThanThree)
const persons = ['mom', 'dad', 'girlfriend']

const list = persons.filter(function (person, index) {
	return index !== 2
})


const places = [
	{
		title: "Awesome Suite 20' away from la Rambla",
		price: 200,
		type: "Private Room",
		pool: true,
		garage: false
	},
	{
		title: "Private apartment",
		price: 190,
		type: "Entire Place",
		pool: true,
		garage: true
	},
	{
		title: "Apartment with awesome views",
		price: 400,
		type: "Entire Place",
		pool: false,
		garage: false
	},
	{
		title: "Apartment in la Rambla",
		price: 150,
		type: "Private Room",
		pool: false,
		garage: true
	},
	{
		title: "Comfortable place in Barcelona´s center",
		price: 390,
		type: "Entire place",
		pool: true,
		garage: true
	}
];
console.clear()
// 1. filter out all the places with a price above 300 
const above300 = places.filter(function (place) {
	// if (place.price > 300) {
	// 	return true
	// }
	// return false
	return place.price > 300
})
console.log(above300)

console.clear()
// 2. create a function that returns an array that contains only the
// titles of the places with a pool -> filter first all the places with pools  
// then map over the result array to get the strings

function getTitlesWithPool(arr) {
	// filter out the pools
	const withPool = arr.filter(function (el) {
		if (el.pool === true) {
			return true
		}
		return false
		// return el.pool
	})
	// change to only strings
	const onlyTitles = withPool.map(function (place) {
		return place.title
	})
	return onlyTitles
}

const titles = getTitlesWithPool(places)
console.log(titles)

// reverse() -> reverses an array

const nums4 = [1, 2, 3, 4, 5]
// this reverses the array
nums4.reverse()
console.log(nums4)

// if you want to reverse a string we have to change the string to an 
// array first

// split()
const str = 'bobafett'
const ar = str.split('') // -> ['a', 'b', 'c', 'd', 'e', 'f', 'g']
const splitArr = str.split('')
console.log(splitArr)
// count the number of 'a's in the string
// 'afajaadaks'.split('a').length - 1

// this reverses the array
splitArr.reverse()
console.log(splitArr)
// changing an array to a string
const reversedString = splitArr.join('')
console.log(reversedString)

// sort - this sorts an array in place - it mutates the original array

const nums6 = [45, 23, 7, 12]
// this does not give us an error but does not sort
// correctly
// console.log(nums6.sort())
nums6.sort(function (a, b) {
	// this sorts ascending
	// return a - b
	// this sorts descending
	return b - a
	// if (b < a) {
	// 	return 1
	// }
	// if (a < b) {
	// 	return - 1
	// }
	// if (a === b) {
	// 	return 0
	// }
})

console.log(nums6)


const strings = ['ad', 'xddd', 'fxxxxxx', 'Asd', 'cfjdklsajfdk']

console.log(strings.sort(function (a, b) {

	return a.length - b.length
}))


const reviews = [
	{
		name: 'foo',
		rate: 9,
		score: 7
	},
	{
		name: 'bar',
		rate: 9,
		score: 5
	},
	{
		name: 'baz',
		rate: 5,
		score: 4
	}
]

// sort the array of reviews by the rate
// ascending

const sorted = reviews.sort(function (a, b) {
	// if (a.rate === b.rate) {
	// 	// we sort by score
	// 	return a.score - b.score
	// }
	// return a.rate - b.rate
	return a.rate - b.rate || a.score - b.score
})
console.log(sorted)