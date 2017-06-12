'use strict'

const HashTable = require('./models/hash-table.js')
const DLL = require('./models/doubly-linked-list.js')

let testTable = new HashTable()

testTable.set('scott')
testTable.set('ttocs')

console.log(testTable.buckets[557])
