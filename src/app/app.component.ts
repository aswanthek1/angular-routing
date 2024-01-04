import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'router-app';
  constructor() {}
  activeRoute:ActivatedRoute = inject(ActivatedRoute)
  router:Router = inject(Router)
  showLoader:boolean = false;
  
  ngOnInit(): void {
    this.router.events.subscribe((routerEvent: Event) => {
      if(routerEvent instanceof NavigationStart) {
        this.showLoader = true
      }
      if(routerEvent instanceof NavigationEnd 
        || routerEvent instanceof NavigationCancel
        || routerEvent instanceof NavigationError
        ) {
        this.showLoader = false
      }
    })
  }


  goToContact() {
    // this.router.navigateByUrl('contact')
    this.router.navigate(['contact'])// by default this will be absolute path to make it relative pass relative to object in navigate ( In the component level).
    // this.router.navigate(['contact'], {relativeTo:this.activeRoute})
  }
}
