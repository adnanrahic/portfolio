import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  providers: [DataService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  myData: Array<any>;
  
  constructor(
    public DataService: DataService    
  ) { }

  public ngOnInit() {
    this.DataService.getImages().subscribe(data => this.myData = data);    
  }
  
}
