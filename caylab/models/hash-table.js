'use strict'

const DLL = require('./doubly-linked-list.js')

const HashTable = module.exports = function(size = 8192){
  this.size = size
  this.buckets = [...Array(this.size)]
}

HashTable.prototype.hashKey = function(key){
  //reduce takes an array of values and reduces it to a single value
  let hash = key.split('').reduce((acc, curr) => acc + curr.charCodeAt(0), 0) % this.size
  return hash
}

HashTable.prototype.set = function(key){
  let hash = this.hashKey(key) //557
  if(!this.buckets[hash]) this.buckets[hash] = new DLL()
  if(this.buckets[hash]) this.buckets[hash].append(key)

  return this.buckets[hash].tail
}

HashTable.prototype.get = function(key){
  let hash = this.hashKey(key)
  return this.buckets[hash]
}

HashTable.prototype.remove = function(key){
  let address = this.hashKey(key)
  this.buckets[address] ? delete this.buckets[address] : new Error('invalid key address')
}
