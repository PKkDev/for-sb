## Вопрос №7

### Вопрос

Функция `trackBy` что это и зачем используется?

### Ответ

1) [Дирекативы-trackBy](https://angular.dev/guide/directives#tracking-items-with-ngfor-trackby)
2) [trackBy](https://netbasal.com/angular-2-improve-performance-with-trackby-cc147b5104e5)

При изменении массива Angular перерисовывает дерево DOM полностью. Но если использовать функцию trackBy, то Angular будет понимать, какой элемент изменился, а затем внесёт изменения в DOM только для этого конкретного элемента.
