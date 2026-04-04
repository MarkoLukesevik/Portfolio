import { Component } from '@angular/core';
import { Project, ProjectCard } from './components/project-card/project-card';

@Component({
  selector: 'app-projects-page',
  imports: [ProjectCard],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.scss',
})
export class ProjectsPage {
  projects: Project[] = [
    {
      id: 'kanban',
      name: 'Kanban Task Management App',
      description: `
        <p>
        A full-stack Kanban board application built with Angular and .NET Web API.
        Originally based on a Frontend Mentor challenge, this project was expanded with a custom backend to support real data persistence.
        </p>

        <p>
        While the original challenge focused purely on frontend UI, I extended it into a complete full-stack solution by:
        </p>

        <ul>
          <li>Building a .NET Web API backend</li>
          <li>Designing a relational database</li>
          <li>Implementing full CRUD functionality</li>
          <li>Persisting data instead of using static JSON</li>
        </ul>

        <p>
        The result is a fully functional Kanban task management system with real backend integration.
        </p>

        <p>
        The original design was provided by Frontend Mentor, with the goal of recreating a clean, responsive Kanban board UI as accurately as possible.
        </p>
      `,
      images: [
        'assets/images/kanban/kanban5.png',
        'assets/images/kanban/kanban1.png',
        'assets/images/kanban/kanban6.png',
        'assets/images/kanban/kanban2.png',
        'assets/images/kanban/kanban7.png',
        'assets/images/kanban/kanban4.png',
        'assets/images/kanban/kanban8.png',
        'assets/images/kanban/kanban3.png',
        'assets/images/kanban/kanban9.png',
        'assets/images/kanban/kanban10.png',
      ],
      skills: [
        'Angular',
        'TypeScript',
        'Angular CDK (Drag & Drop)',
        'RxJS',
        'SCSS',
        'HTML',
        '.NET',
        'SQL',
        'Entity Frameworok',
      ],
      githubLink: 'https://github.com/MarkoLukesevik/Kanban',
      liveDemoLink: 'https://kanban-ashen-six.vercel.app/',
    },
  ];
}
