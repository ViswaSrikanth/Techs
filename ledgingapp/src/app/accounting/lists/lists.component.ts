import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListAccountComponent implements OnInit {

  subtitle:string = "Accounts";

  constructor() { }

  ngOnInit(): void {
  }

}
