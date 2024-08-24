## Вопрос №1

### Вопрос

В чем разница между Null, NaN и undefined?

### Ответ

NaN: Not a number: Как следует из названия, оно используется для обозначения того, что значение объекта не является числом. Существует множество способов, которыми вы можете сгенерировать эту ошибку, одним из которых являются недопустимые математические операции, такие как 0/0 или sqrt(-1)

undefined: Это означает, что объект не имеет никакого значения, следовательно, не определен. Это происходит, когда вы создаете переменную и не присваиваете ей значение.

null: Это означает, что объект пуст и не указывает ни на какой адрес в памяти.

### задача

```javascript

    let a = null;
    let b = undefined;
    let c = 0;
    let d = NaN;

    console.log(`typeof(a)`, typeof (a));
    console.log(`typeof(b)`, typeof (b));
    console.log(`typeof(c)`, typeof (c));
    console.log(`typeof(d)`, typeof (d));
    
    console.log('--------------')

    console.log(`a ?? 'none'`, a ?? 'none');
    console.log(`b ?? 'none'`, b ?? 'none');
    console.log(`c ?? 'none'`, c ?? 'none');
    console.log(`d ?? 'none'`, d ?? 'none');

    console.log('--------------')

    if (a) { console.log(`if (a)`, true) } else { console.log(`if (a)`, false) }
    if (b) { console.log(`if (b)`, true) } else { console.log(`if (b)`, false) }
    if (c) { console.log(`if (c)`, true) } else { console.log(`if (c)`, false) }
    if (d) { console.log(`if (d)`, true) } else { console.log(`if (d)`, false) }

    console.log('--------------')

    console.log(`!d`, !d);
    console.log(`!!d`, !!d);
    console.log(`isNaN(d)`, isNaN(d));

```