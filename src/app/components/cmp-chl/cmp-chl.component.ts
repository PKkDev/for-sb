import { AfterContentInit, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cmp-chl',
  templateUrl: './cmp-chl.component.html',
  styleUrl: './cmp-chl.component.css',
})
export class CmpChlComponent implements OnInit, AfterViewInit, AfterContentInit, OnChanges {

  ngOnInit(): void {
    console.log('Chl - ngOnInit');
  }

  ngAfterViewInit(): void {
    console.log('Chl - ngAfterViewInit');
  }

  ngAfterContentInit(): void {
    console.log('Chl - ngAfterContentInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Chl - ngOnChanges');
  }
}
