import { AfterContentInit, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cmp-par',
  templateUrl: './cmp-par.component.html',
  styleUrl: './cmp-par.component.css',
})
export class CmpParComponent implements OnInit, AfterViewInit, AfterContentInit, OnChanges {

  ngOnInit(): void {
    console.log('par - ngOnInit');
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
}
