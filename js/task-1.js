// Напиши функцию logItems(array), которая получает массив и использует цикл for,
// который для каждого элемента массива будет выводить в консоль сообщение 
// в формате[номер элемента]-[значение элемента].
// Нумерация должна начинаться с 1. К примеру для первого элемента 
// массива['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango', 
// а для индекса 2 выведет '3 - Ajax'.


const items = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
const logItems = arr => {

  for (let i = 0; i < arr.length; i++) {
    const message = `${i + 1} - ${arr[i]}`;

    console.log(message);
  }
}

logItems(items);