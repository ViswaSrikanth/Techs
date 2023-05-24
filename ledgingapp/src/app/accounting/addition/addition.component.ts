import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-panel',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {

  subtitle = "Transaction Additions"

  constructor() { }

  ngOnInit(): void {
  }

}
