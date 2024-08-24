import { AfterContentInit, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit, AfterContentInit, OnChanges {
  title = 'for-sb';

  ngOnInit(): void {
    console.log('par - ngOnInit');
    this.taskOne();
  }

  ngAfterViewInit(): void {
    console.log('par - ngAfterViewInit');
  }

  ngAfterContentInit(): void {
    console.log('Chl - ngAfterContentInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('par - ngOnChanges');
  }

  private taskOne() {
    let a = null;
    let b = undefined;
    let c = 0;
    let d = NaN;

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
    console.log(`a == b`, a == b);
    console.log(`a === b`, a === b);
    console.log('--------------')
    console.log(`c == b`, c == b);
    console.log(`c === b`, c === b);
    console.log('--------------')
  }
}
