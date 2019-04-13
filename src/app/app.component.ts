import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'happyhour';
  messages: any[] = [];
  sendComment(msg: string) {
    this.messages.push({
      user: "user1",
      text: msg
    });
  }
}
