/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
    //제일 작은 수 찾기
    //제일 작은 수의 *2한 값이 있는지 확인
    //없다면, 두번째로 작은 수 찾아서 *2한 값 확인
    //없다면, 세번째로 작은 수 찾아서 같은 작없 반복
    // 배열안에 숫자 중 하나를 받아서 그 값에 *2한 값 리턴 function
    // 리턴 된 값을 배열에서 값은 값이 있으면 true, 아니면 다음 수를 function에서 다시 확인

    console.log(arr.filter(num => num === 0).length >= 2)
    // if (arr.filter(num => num === 0).length >=2) {
    //     return true;
    // }
    arr.sort((a, b) => a - b);
    for (var i = 0; i < arr.length; i++){
        
        if (arr[i] !== 0) {
            var isExist = arr.includes(arr[i] * 2);
            if (isExist) {
                return console.log(true)
            }
        }
    }
    return console.log(false);
};

// checkIfExist([10, 2, 5, 3])
// checkIfExist([-2, 0, 10, -19, 4, 6, -8])
checkIfExist([0,0])