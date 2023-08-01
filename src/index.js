module.exports = function reverse (n) {
    let arr = String(n).split('');
    if (arr[0] == '-') {
        arr.shift()
    }
    arr = arr.reverse('');
    arr = Number(arr.join(''));
    return arr
}
