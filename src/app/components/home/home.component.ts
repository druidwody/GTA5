import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'router-outlet',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public sort: string;
  constructor() { }

  ngOnInit(): void {
  }

}
