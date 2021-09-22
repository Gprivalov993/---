document.writeln("1.Объявите переменную и запишите в нее свое имя как литерал строки.");
let name = "Георгий"; 
document.writeln("</br>Мое имя: " + name + "</br>");

document.writeln("</br>2.Объявите константы и запишите в нее месяц и год своего рождения как литерал числа.");
let mounth = 11; 
let year = 2001; 
document.writeln("</br>Месяц и год моего рождения: " + mounth + "." + year + "</br>");

document.writeln("</br>3.Создайте функцию, которая печатает приветствие и имеет три  аргумента: name, month, year.");
document.writeln("</br>Привет, " + name + ". " + "Твой год и месяц рождения: " + year + "." + mounth + "</br>");

document.writeln("</br>4.Реализуйте функцию range(start: number, end: number): array которая отдает массив чисел из диапазона [-15, 15] включая крайние числа.");
function range(start, end) {
let result = [];
let index = 0;
for (let i = start; i <= end; i++, index++)
result[index] = i;
return result;
}
document.writeln(range(-15,15));


document.writeln("</br>7.Реализуйте функцию average с сигнатурой average(a: number, b: number): number вычисляющую среднее арифметическое своих аргументов.");

document.writeln("Привет, " + name + ". " + "Твой год и месяц рождения: " + year + "." + mounth + "</br>");
