
const wordSearch = (letters, word) => { 
    let str = "";
    if (letters.length === 0) {
      return undefined;
    }
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (l of horizontalJoin) {
        if (l.length === 0) {
          return undefined;
        }
        if (l.includes(word)) {
            return true; 
        }
    }

     for (let i = 0; i < horizontalJoin[0].length; i++) {
            for (let j = 0; j < horizontalJoin.length; j++) {
              str += horizontalJoin[j][i];
            }
            if (str.includes(word)) {
              return true;
            }
            str = "";
        }
  return false; 
};


module.exports = wordSearch