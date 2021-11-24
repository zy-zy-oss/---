function maxLong(arr) {
    let count = new Array(arr.length);
    count.fill(0)

    let flag = new Array(arr.length)
    for (var i = 0; i < arr.length; i++) {
        symbol = true;
        for (var j = i; j < arr.length; j++) {
            for (var k = i; k < j; k++) {
                if (arr[k] == arr[j]) {
                    symbol = false; break;
                }
            }
            if (symbol == true) {
                count[i]++
            }
            else break;

        }
        flag[i] = j;
    }
    let max = -1;
    let temp = 0;

    for (var i = 0; i < arr.length; i++) {
        if (max < count[i]) { max = count[i]; temp = i; console.log(i) }

    }
    
    newarr = arr.slice(temp, flag[temp])

    return newarr
}
console.log(maxLong("adcsvscargsa"))
