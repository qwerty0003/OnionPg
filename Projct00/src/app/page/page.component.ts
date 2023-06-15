import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  loaded = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loaded = true; // Dopo 3 secondi, impostato su true
    }, 3000);
  }

}
