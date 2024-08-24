## Вопрос №3

### Вопрос

Какие способы преобразвоания типов вы знаете?

### Ответ

.toString()
+
+ ''
Number()
Boolean()
String()

### задача

```javascript

    let a = Number.MAX_VALUE + 1;
    let b = Number.MAX_VALUE + 2;
    console.log(`a == b`, a == b);

    console.log('--------------')

    console.log(`Boolean("0")`, Boolean("0"));
    console.log(`Boolean(0)`, Boolean(0));
    console.log(`Boolean("")`, Boolean(""));
    console.log(`Boolean("   ")`, Boolean("   "));

    console.log('--------------')

    let c: any = "6";
    let d: any = "3";
    let e = 0; 
    console.log(`c / d`, c / d);
    console.log(`c + d`, c + d); 
    console.log(`c / e`, c / e);
    console.log(`c + e`, c + e);

```