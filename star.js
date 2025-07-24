let count = 10;

for (let line = 1; line <= count; line++) {
    let text = '';
    for (let star = 1; star <= line; star++) {
        text += '* ';
    }
    console.log(text);
}

for (let line = count - 1; line >= 1; line--) {
    let text = '';
    for (let star = 1; star <= line; star++) {
        text += '* ';
    }
    console.log(text);
}
