module.exports = function check(str, bracketsConfig) {
  let ind = 0;
  let result = true;

  const isLeftBracket = () => { //проверяем на открывающую скобку
    let leftBracket = false
    bracketsConfig.forEach((element, index) => { 
      if (element[0] === str[ind]) {
        leftBracket = true;
      }
    });
    return leftBracket

  }
  const typeofBracket = () => { //проверяем какой это тип скобок
      return bracketsConfig.reduce((acc, element) => 
        acc = element[0] === str[ind] ? element : acc) // возвращаем массив с текущими скобками
        
  }
  const isPair = () => {  // рекурсивно проверяем пары
      const currentPair = typeofBracket() // определяем текущий вид скобок
      ind++
      while (str[ind] !== currentPair[1]) { // ждем закрывающую скобку
        if (isLeftBracket()) { //если открывающая скобка, запускаем рекурсию
          isPair()
          ind++
        } else {
            return false // иначе недопустимая закрывающая скобка = false
        }
      }
      return true // если прошел весь цикл и не было ошибок - true
  }

  if (str.length % 2 !== 0) return false // если к-во скобок нечетное - false

  while (ind < str.length) { //проверяем все невложенные скобки, если открывающая -  вызываем isPair иначе  false
    result = isLeftBracket() ? isPair(str[ind]) : false
    ind++
  }
  return result
  // your solution
}

