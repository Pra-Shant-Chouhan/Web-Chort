function invertedMountain(n) {
    let pattern = "";
    for (let i = n; i >= 0; i--) {
        let row = "";
        for (let j = 0; j <= i - 1; j++) {
            row += "*";
        }

        pattern += `${row} ${ n !==1 ? "\n" : ""}`;
    }
    return pattern;
};


console.log(invertedMountain(4))

