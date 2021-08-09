interface Name {
    first: string;
    last?: string;
}

function printName(obj: Name) {
    console.log(`First name: ${obj.first}, Last name: ${obj.last}`)
}

printName({ first: "Daniel" });
printName({ first: "Nick", last: "Kim" });