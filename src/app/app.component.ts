import { Component, NgZone,} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private ngZone: NgZone) {
    this.taskOne();
    this.taskTwo();
    this.taskThree();
    this.taskFour(); 

    ngZone.runOutsideAngular(()=>{})
  }

  private taskOne() {
    console.log('--------------taskOne--------------')

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
  }

  private taskTwo() {
    console.log('--------------taskTwo--------------')

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
  }

  private taskThree() {
    console.log('--------------taskThree--------------')

    let a: any = "6";
    let b: any = "3";
    let b1 = b;
    console.log(`a == b`, a == b);
    console.log(`a === b`, a === b);
    console.log(`b1 == b`, b1 == b);
    console.log(`b1 === b`, b1 === b);

    console.log('--------------')

    let d = null;
    let e = undefined;
    let c = 0;
    console.log(`d == e`, d == e);
    console.log(`d === e`, d === e);
    console.log(`c == e`, c == e);
    console.log(`c === e`, c === e);

    console.log('--------------')

    console.log(`5 == new Number(5)`, 5 == new Number(5));
    console.log(`5 === new Number(5)`, 5 === new Number(5));

    console.log('--------------')

    console.log(`"abs" == "abs"`, "abs" == "abs");
    console.log(`"abs" === "abs"`, "abs" === "abs");

    console.log('--------------')

    let f = { name: "aaa" };
    let f1 = { name: "aaa" };
    let f3 = f1;
    console.log(`f == f1`, f == f1);
    console.log(`f1 == f3`, f1 == f3);
  }

  private taskFour() {
    console.log('--------------taskFour--------------')

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

    console.log('--------------')

    console.log(`Number(true)`, Number(true));
    console.log(`Number(false)`, Number(false));
    console.log(`Number(undefined)`, Number(undefined));
    console.log(`Number(null)`, Number(null));
  }

} 

