const wordSearch = (letters, word) => { 
    let outcome = false;
    if (letters.length <= 0) {
        return outcome;
    } else {
        const horizontalJoin = letters.map(ls => ls.join(''));
        let transposedArray = letters[0].map((x,i) => letters.map((x) => x[i]));
        const verticalJoin = transposedArray.map(sl => sl.join(''));
        for (l of horizontalJoin) {
            if (l.includes(word)) {
                outcome=true;
            }
        }
        for (s of verticalJoin) {
            if (s.includes(word)) {
                outcome=true;
            }
        }
    }
    return outcome;
};


module.exports = wordSearch;