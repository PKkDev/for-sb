import { AfterContentInit, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

// @FeelNameDecorator('parent')

// function FeelNameDecorator(cmpName: 'parent' | 'chl' | 'chl-chl') {
//     return function (constructor: any) {

//         // Object.defineProperty(constructor.prototype, 'name', { value: cmpName, writable: true });
//         console.log(constructor.prototype);

//         const orig = constructor.prototype.ngOnInit;
//         constructor.prototype.ngOnInit = function () {

//             Object.defineProperty(this, 'name', { value: cmpName, writable: true });

//             // this.name = cmpName;
//             console.log(this);
//             orig.apply();
//         }
//     };
// }

@Component({ template: `` })
class BaseComponent implements OnInit, AfterViewInit, AfterContentInit, OnChanges {
    protected name!: string;
    ngOnInit(): void { console.log(`${this.name} - ngOnInit`); }
    ngAfterViewInit(): void { console.log(`${this.name} - ngAfterViewInit`); }
    ngAfterContentInit(): void { console.log(`${this.name} - ngAfterContentInit`); }
    ngOnChanges(_changes: SimpleChanges): void { console.log(`${this.name} - ngOnChanges`); }
}

@Component({
    selector: 'app-cmp-par',
    template: `<app-cmp-chl></app-cmp-chl>`
})
export class CmpParComponent extends BaseComponent {
    constructor() { super(); this.name = 'parent' }
}

@Component({
    selector: 'app-cmp-chl',
    template: `<app-cmp-chl-chl></app-cmp-chl-chl>`
})
export class CmpChlComponent extends BaseComponent {
    constructor() { super(); this.name = 'chl' }
}

@Component({
    selector: 'app-cmp-chl-chl',
    template: `<p>cmp-chl-chl works!</p>`
})
export class CmpChlChlComponent extends BaseComponent {
    constructor() { super(); this.name = 'chl-chl' }
}
