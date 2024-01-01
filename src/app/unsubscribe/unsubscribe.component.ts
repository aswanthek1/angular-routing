import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-unsubscribe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './unsubscribe.component.html',
  styleUrl: './unsubscribe.component.css'
})
export class UnsubscribeComponent {
  counter = interval(1000)
  data:number[] = [];
  subscriber1:any;
  onSubscribe() {
    this.subscriber1 = this.counter.subscribe((val) => {
      this.data.push(val)
    })
  }
  onUnsubscribe() {
    this.subscriber1.unsubscribe();
  }
}
