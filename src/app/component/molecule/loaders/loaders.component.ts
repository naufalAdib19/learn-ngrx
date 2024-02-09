import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loaders',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './loaders.component.html',
  styleUrl: './loaders.component.css',
})
export class LoadersComponent {}
