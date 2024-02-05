import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { TopBarComponent } from '../../molecule/top-bar/top-bar.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [MatIconModule, MatDividerModule, MatButtonModule, TopBarComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {}
