function sapin(x) {
    let space = [];
    for (let n = 0; n < x; n++) {
        space.push(" ");
    }   
    let line = space.join("") + "/*\\";
    let arrayOfSapin = [space.join(""), " +", "\n", line, "\n"];
    let arrayOfStars = []
    for (i = 0; i < x; i++) {
        space.pop();
        arrayOfStars.push("**");
        arrayOfSapin.push(space.join(""), "/*", arrayOfStars.join(""), "\\", "\n");   
    }
    return arrayOfSapin.join("");
}

console.log(sapin(15));

//   +
//  /*\
// /***\