import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, filter, from, map, of } from 'rxjs';

@Component({
  selector: 'app-observables',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.css'
})
export class ObservablesComponent {
  data: any[] = [];
  arr1: any[] = [1, 2, 3, 4, 5]
  arr2: any[] = ['a', 'b', 'c']
  //create an observable

  // myObservable = new Observable((observer) => {
  //   ///observable emiting data
  //   //moking data streaming
  //   setTimeout(() => {observer.next(1) }, 1000);
  //   setTimeout(() => {observer.next(2) }, 2000);
  //   setTimeout(() => {observer.next(3) }, 3000);
  //   // setTimeout(() => {observer.error(new Error('Something went wrong. Please try again')) }, 3000);
  //   setTimeout(() => {observer.next(4) }, 4000);
  //   setTimeout(() => {observer.next(5) }, 5000);
  //   setTimeout(() => {observer.complete() }, 6000);
  // })

  // myObservable = of(this.arr1, this.arr2)
  myObservable = from(this.arr1)


  ///map and filter operator
  transformedObs = this.myObservable.pipe((map((val) => {
    return val * 5
  })),
    filter((val, i) => {
      return val % 2 === 0
    })
  )

  getAsyncData() {
    // observer subscribe the data
    /// next, error and complete
    this.myObservable.subscribe({
      next: (val: any) => {
        this.data.push(val);
      },
      error(error) {
        alert(error)
      },
      complete() {
        alert("All the data is stream.")
      }
    })

    this.transformedObs.subscribe({
      next: (val: any) => {
        this.data.push(val);
      },
      error(error) {
        alert(error)
      },
      complete() {
        alert("All the data is stream.")
      }
    })
  }

}
