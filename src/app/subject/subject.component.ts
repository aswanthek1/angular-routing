import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent implements OnInit {
  ////subject
  // subject = new Subject<number>()

  ////BehaviorSubject
  // subject = new BehaviorSubject<number>(100)

  ////ReplaySubject
  // subject = new ReplaySubject<number>(2)

  //// asyncSubject
  subject = new AsyncSubject<number>()
  ngOnInit(): void {
    this.subject.next(100)
    this.subject.next(200)
    this.subject.next(300)
    this.subject.complete()
    // subscriber 1
    this.subject.subscribe((data) => {console.log(data, '1')})
    
    // this.subject.next(2020)
    // // subscriber 2
    // this.subject.subscribe((data) => {console.log(data, "2")})
  }


}
