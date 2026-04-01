import { Component } from '@angular/core';
import { SiteShellComponent } from './layout/site-shell.component';

@Component({
  selector: 'app-root',
  imports: [SiteShellComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
