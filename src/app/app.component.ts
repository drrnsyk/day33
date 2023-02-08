import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { TodoComponent } from './components/todo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  
  @ViewChild('submitFormButton')
  submitFormButton!: TodoComponent

  ngAfterViewInit(): void {
    
  }
  
}
