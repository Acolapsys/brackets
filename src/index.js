module.exports = function check(str, bracketsConfig) {




  let ind = 0;
  let result = true;

  const isLeftBracket = () => {
    let leftBracket = false
    bracketsConfig.forEach((element, index) => { 
      if (element[0] === str[ind]) {
        leftBracket = true;
      }
    });
    return leftBracket

  }
  const typeofBracket = (leftBracket) => { //проверяем какой это тип, передаем на вход символ, 
      let currentPair = []
      bracketsConfig.forEach((element, index) => { // возвращаем индекс массива
        console.log(element, index, bracketsConfig)
        if (element[0] === leftBracket) {
          currentPair = element
        }
      });
      return currentPair
  }
  const isPair = (currentBracket) => {  // рекурсивно проверяем пары, на входе текущий элемент строки

      console.log("index start ", ind, "string = ", str, "result is ", result)
      if (!result) return false
      if (ind >= str.length) return false
      const currentPair = typeofBracket(currentBracket)
      console.log("currentPair is ", currentPair)
      ind++
      if (str[ind] === currentPair[1]) { // если текущий элемент закрывающа скобка, возвращаем true
        console.log("index close ", ind, "string = ", str, "result is ", result)
        ind++
        return true
      }
      if (isLeftBracket()) { //если открывающая скобка, запускаем рекурсию
        console.log("index open ", ind, "string = ", str, "result is ", result)
        isPair(str[ind])
        if (str[ind] === currentPair[1]) { // если текущий элемент закрывающа скобка, возвращаем true
          console.log("index close ", ind, "string = ", str, "result is ", result)
          ind++
          return true
        }
      }
      console.log("index last ", ind, "string = ", str, "result is ", result)
      result = false
      return result
  }
  if (str.length % 2 !== 0) return false

  while (ind < str.length) {
    if (isLeftBracket() && result) {

    result =  isPair(str[ind])
    } else {
      return false
    }
  }
  return result
  // your solution
}

