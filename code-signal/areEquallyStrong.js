const compareBigger = (a, b) => a <= b ? b : a;

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    const yours = compareBigger(yourLeft, yourRight);
    const friends = compareBigger(friendsLeft, friendsRight);
    
    return yourLeft + yourRight === friendsLeft + friendsRight && yours === friends;
}

exports.areEquallyStrong = areEquallyStrong;