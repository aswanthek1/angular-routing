import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'router-app';
  constructor(private router: Router) {}
  activeRoute:ActivatedRoute = inject(ActivatedRoute)
  goToContact() {
    // this.router.navigateByUrl('contact')
    this.router.navigate(['contact'])// by default this will be absolute path to make it relative pass relative to object in navigate ( In the component level).
    // this.router.navigate(['contact'], {relativeTo:this.activeRoute})
  }
}
