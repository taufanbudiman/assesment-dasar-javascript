import { test } from 'node:test';
import assert from 'node:assert';
import sum from "./index.js";

test('Parameter Must be number', () =>{
    const A = 0
    const B = "1"

    let expectedValue = 0
    let testValue = sum(A, B)

    assert.equal(testValue, expectedValue)

    const C = "1"
    const D = 0

    expectedValue = 0
    testValue = sum(C, D)

    assert.equal(testValue, expectedValue)
})

test('Parameter must be positive', () =>{
    const A = 0
    const B = -1

    let expectedValue = 0
    let testValue = sum(A, B)

    assert.equal(testValue, expectedValue)

    const C = -1
    const D = 0

    expectedValue = 0
    testValue = sum(C, D)

    assert.equal(testValue, expectedValue)
})

test('Should be true', () =>{
    const A = 1
    const B = 5

    const expectedValue = 6
    const testValue = sum(A, B)

    assert.equal(testValue, expectedValue)
})