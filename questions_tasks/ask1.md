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