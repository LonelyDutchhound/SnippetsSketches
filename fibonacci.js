function* fibonacci() { // функция-генератор
    let [prev, curr] = [0, 1];
    for (;;) {
        [prev, curr] = [curr, prev + curr];
        yield curr;
    }
}

for (let n of fibonacci()) {
    // ограничивает последовательность на 1000
    if (n > 1000)
        break;
    console.log(n);
}
