type User = {
    name: string;
    age: number;
};

function isAdult(user: User):
boolean {
    return user.age >= 18;
}

const rafique: User = {
    name: 'Rafique',
    age: 25,
};

const isRafiqueAnAdult: boolean = isAdult(rafique);