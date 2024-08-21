function factorial(n) {
    if (n < 0) {
        return 'Factorial is not defined for negative numbers';
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Jangan hapus kode di bawah ini!
export default factorial;
