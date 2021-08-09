interface Name {
    first: string;
    last?: string;
}

function printName(obj: Name) {
    console.log(`First name: ${obj.first}, Last name: ${obj.last}`)
}

printName({ first: "Daniel" });
printName({ first: "Nick", last: "Kim" });


function fxType(x: number): number {
    return x * 2;
}

type TupleType = [string, boolean];

let user: TupleType = ['john', true]