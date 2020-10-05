module.exports = function check(str, bracketsConfig) {




  let ind = 0;
  let result = true;

  const isLeftBracket = (bracket) => {
    let result = false
    bracketsConfig.forEach((element, index) => { 
      if (element[0] === bracket) {
        result = true;
        break;
      }
    });
    return result

  }
  const typeofBracket = (leftBracket) => { //проверяем какой это тип, передаем на вход символ, 
    return bracketsConfig.forEach((element, index) => { // возвращаем индекс массива
      if (element[0] === leftBracket) return index
    });
  }
  const isPair = (indexofBracket) => {  // рекурсивно проверяем пары, на входе текущий элемент строки
    if (!result || ind >= str.length) return false
    if (isLeftBracket(indexofBracket))
    if (str[ind] === bracketsConfig[indexofBracket][1]) {
      ind++;
      return true
    }
    return isPair(typeofBracket(ind + 1), ind + 1)

  }


  
  // your solution
}
