## Вопрос №1

### Вопрос

Какие бывают типы данных в js?

### Ответ

1) [Хранение по ссылке и по значению](https://doka-guide.vercel.app/js/ref-type-vs-value-type/)
2) [Преобразование типов + Типы данных](https://doka-guide.vercel.app/js/typecasting/)
 
Ссылочные и значимые

### задача

```javascript

    let a = 'dd';
    let a1 = a;
    a += "cc";
    console.log('a, a1', a, a1)

    console.log('--------------')

    let b = {
      name: "aaa"
    };
    let b1 = b;
    b1.name = 'bbb'
    console.log('b, b1', b, b1)

```