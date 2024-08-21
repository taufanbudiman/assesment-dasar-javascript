import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from "./index.js";

test('Should Correct', () => {
    const A = 1;
    const B = 1;

    const actualValue = sum(A, B)

    assert.equal(actualValue, 2);
})