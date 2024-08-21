function fibonacci(n) {
    if (n < 1) {
        return 'Please enter a positive integer';
    }
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, n);
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
