import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onLoadServer(id:number) {
    //this navigate helps in navigating to a specific route using this array
    this.router.navigate(['/servers', id, "edit"], {queryParams:{allowEdit:id}, fragment:"loading"})
  }

}
