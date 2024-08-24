import { CommonModule } from '@angular/common';
import { AfterContentInit, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cmp-chl-chl',
  templateUrl: './cmp-chl-chl.component.html',
  styleUrl: './cmp-chl-chl.component.css',
})
export class CmpChlChlComponent implements OnInit, AfterViewInit, AfterContentInit, OnChanges {

  ngOnInit(): void {
    console.log('chl-chl - ngOnInit');
  }

  ngAfterViewInit(): void {
    console.log('chl-chl - ngAfterViewInit');
  }

  ngAfterContentInit(): void {
    console.log('chl-chl - ngAfterContentInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('chl-chl - ngOnChanges');
  }

}
