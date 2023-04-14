//Реализуй функции линейного поиска. Проверь результат тестами.
//принимает два аргумента: объект и массив. Она должна последовательно перебирать каждый элемент и возвращать индекс,
// в котором объект был изначально найден. Если объект не найден, то функция возвращает значение -1.
function linearSearch(n, arr) {
  if (arr.includes(n) == false) {
    return -1;
  }
  for (let i=0; i < arr.length; i++) {
    if (arr[i] === n) {
      return i;
    } 
  }
}
console.log(linearSearch(3, [1,2,3,4,5,3]))


//напишем новый метод globalLinearSearch, который возвращает массив всех индексов, в которых найден элемент.
function globalLinearSearch(n, arr) {
  let result = [];
  if (arr.includes(n) == false) {
    result = -1;
  }
  for (let i=0; i < arr.length; i++){
    if (arr[i] === n) {
      result.push(i);
    }
  }
  return result;
}
console.log(globalLinearSearch('a', ['b', 'a', 'n', 'a', 'n', 'a', 's']))

module.exports = {
  linearSearch,
  globalLinearSearch
}
