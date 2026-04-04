import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { WorkExperience } from './components/work-experience/work-experience';
import { Skills } from './components/skills/skills';
import { Education } from './components/education/education';

@Component({
  selector: 'app-home-page',
  imports: [Hero, WorkExperience, Skills, Education],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {}
