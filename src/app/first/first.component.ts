import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent implements OnInit {
  constructor(private activeRoute:ActivatedRoute) {}
  ngOnInit(): void {
    this.activeRoute.fragment.subscribe((data:any) => {
      this.jumbToSection(data)
    })
  }

  jumbToSection(sectionId:string) {
    document.getElementById(sectionId)?.scrollIntoView({behavior:'smooth'});
  }

}
