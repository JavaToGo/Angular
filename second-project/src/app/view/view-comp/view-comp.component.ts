import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-comp',
  templateUrl: './view-comp.component.html',
  styleUrls: ['./view-comp.component.css']
})
export class ViewCompComponent implements OnInit {

  username : string = "";
  response : any;

  constructor(private http: HttpClient) { 
    
  }

  ngOnInit() {
  }

  search() {
    this.http.get('https://api.github.com/users/' + this.username)
             .subscribe((response) => {
                this.response = response;
                console.log(this.response);
            })
  }
}
