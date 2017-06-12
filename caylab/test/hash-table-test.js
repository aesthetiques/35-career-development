'use strict'

const HashTable = require('../models/hash-table.js')
const DLL = require('../models/doubly-linked-list.js')
const expect = require('chai').expect
const faker = require('faker')
let testHashTable = new HashTable()

describe('hash table functions', function(){

  describe('basic hash table properties', () => {
    it('should instantiate a new HashTable', done => {
      let watHashTable = new HashTable()
      expect(watHashTable).to.be.instanceOf(HashTable)
      done()
    })
    it('testHashTable should have a length of 8192', done => {
      expect(testHashTable.buckets.length).to.equal(8192)
      done()
    })
    it('testHashTable should be an instance of HashTable', done => {
      expect(testHashTable).to.be.instanceOf(Object, HashTable)
      done()
    })
    it('testHashTable should have a property of buckets, which is an array', done => {
      expect(testHashTable.buckets).to.be.instanceOf(Array)
      done()
    })
  })

  describe('setting a new value in the hash table', () => {
    it('should add the first value to the list', done => {
      testHashTable.set('scott')
      expect(testHashTable.buckets[557].head.val).to.equal('scott')
      done()
    })
    it('should add a second value to that list, and set it to the tail', done => {
      testHashTable.set('ttocs')
      expect(testHashTable.buckets[557].head.next.val).to.equal('ttocs')
      done()
    })
    it('should add a second value to that list, and set it to the tail', done => {
      expect(testHashTable.buckets[557].tail.val).to.equal('ttocs')
      done()
    })
  })

  describe('getting a value from the hash table', () => {
    it('should return the value in the linked list', done => {
      let retrieval = testHashTable.get('scott')
      expect(retrieval).to.be.instanceOf(Object, DLL)
      done()
    })
  })


})
