function check(a, b, c, d) {
    let result = (a*b)+(c*d);
    return result % 2 == 0 ? "even" : "odd";
}

console.log(check(6,6,1,1));