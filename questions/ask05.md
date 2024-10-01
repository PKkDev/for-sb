## Вопрос №5

### Вопрос

1) Какие способы клонирования объектов вы знаете?
2) Глубокое и неглубокое клонирвоание объектов?

### Ответ

1) [Поверхностное и глубокое копирование](https://doka-guide.vercel.app/js/shallow-or-deep-clone/)
2) [Спред-синтаксис ...](https://doka-guide.vercel.app/js/spread/)

1) Object.assign()
2) спред-синтаксис ...
3) JSON.parse(JSON.stringify())
4) structuredClone() NodeJS > 17
5) различные библиотеки (lodash.)


### JSON.parse(JSON.stringify())

У этого метода есть ограничение — копируемые данные должны быть сериализуемы.
Вот примеры несериализуемых данных: примитив undefined, функция, symbol - при вызове JSON.stringify получаем undefined

### задача

```javascript

    const arr1 = [
      { d: 'a' },
      { d: 'b' }
    ]

    const arr2 = [...arr1]
    arr2[0].d = 'sssss'
    
    console.log("arr1", arr1, 'arr2', arr2);
 
```