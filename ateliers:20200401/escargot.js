//niveau4

result = []

function escargot(arr) {
    for (i = 0; i <= arr[0].length-1; i++) {
        result.push(arr[0][i])
    }
    arr.shift()
    for (i = 0; i <= arr.length-2; i++) {
        result.push(arr[i][arr[i].length-1])
        arr[i].pop()
    }

    last = arr[arr.length-1]
    for (i = last.length-1 ; i >= 0; i--) {
        result.push(last[i])
    }
    arr.pop()

    for (i = arr.length-1; i >= 0; i--) {
        result.push(arr[i][0])
        arr[i].shift()
    }

    if (arr.length>0) {
        escargot(arr)
    } else {
        return
    }
    return result
}

//ne fonctionne qu'avec un table de longueur 4

test = [['A','B','C','D'],
        ['E','F','G','H'],
        ['I','J','K','L'],
        ['M','N','O','P']];

test1 = [[1,2,3],
        [4,5,6],
        [7,8,9]]

test2 = [[1,2,3],
        [4,5,6],
        [7,8,9],
        [10,11,12],
        [13,14,15]];

        
console.log(escargot(test))
//console.log(escargot(test2));