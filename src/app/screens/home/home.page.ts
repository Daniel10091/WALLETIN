import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  logout(): any {
    // window.location.href = '/login';
    this.router.navigate(['/login']);
    // this.route.params.subscribe(params => {
    //   if (params['logout']) {
    //     this.router.navigate(['/login'], noop as any);
    //   }
    // });
  }

}
