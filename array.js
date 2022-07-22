
const array =
    [504, 109, 691, 268, 721, 246, 664, 296, 467, 165, 546, 318, 550, 189, 454, 687, 786, 890, 284, 397, 252, 646, 553, 552, 437, 812, 182, 778, 228, 510]


const resultado = (suma) => {
    let resultMin = Math.min(...suma);
    let resultMax = Math.max(...suma);
    result=(resultMax+resultMin)
    return result;
}

console.log(resultado(array));