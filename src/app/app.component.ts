import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  arr = [];
  errorCheck = false;
  getFeedback(formData){
    if(formData.feedback !== '' && formData.username !== ''){
      this.errorCheck = false;
      formData.date = new Date();
      this.arr.push(formData);
    } else {
      this.errorCheck = true;
    }
    return this.arr;
  }
}
