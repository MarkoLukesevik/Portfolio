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
        A full-stack Kanban board application.
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
        'assets/images/kanban/kanban1.png',
        'assets/images/kanban/kanban2.png',
        'assets/images/kanban/kanban3.png',
        'assets/images/kanban/kanban4.png',
        'assets/images/kanban/kanban5.png',
        'assets/images/kanban/kanban6.png',
        'assets/images/kanban/kanban7.png',
        'assets/images/kanban/kanban8.png',
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
    {
      id: 'cigarAndArt',
      name: 'Cigar & Art Fusion',
      description: `
        <p>
        A modern website built for <strong>Cigar & Art Fusion</strong> — a brand where cigar culture meets artistic expression.
        The platform showcases unique handcrafted artwork created from premium cigar bands, blending tradition, craftsmanship, and creativity into one distinctive experience.
        </p>

        <p>
        The project focuses on presenting the brand’s story, vision, and growing global presence.
        Founded by Stefan Lazikj, the idea was inspired by the natural connection between the refined ritual of cigar smoking and the expressive power of art, merging these two worlds into one-of-a-kind artistic pieces.
        </p>

        <p>
        The website highlights previous custom creations, including collaborations with well-known figures and brands in the cigar industry, while providing users with an intuitive way to explore the collection.
        </p>

        <p>
        In addition to showcasing artwork, the platform enables users to request custom-made pieces — from cigar band art to custom sneakers — through direct contact options such as a contact form and WhatsApp integration.
        </p>
    `,
      images: [
        'assets/images/cigar-and-art/cigar-and-art1.png',
        'assets/images/cigar-and-art/cigar-and-art2.png',
        'assets/images/cigar-and-art/cigar-and-art3.png',
        'assets/images/cigar-and-art/cigar-and-art4.png',
        'assets/images/cigar-and-art/cigar-and-art5.png',
        'assets/images/cigar-and-art/cigar-and-art6.png',
        'assets/images/cigar-and-art/cigar-and-art7.png',
        'assets/images/cigar-and-art/cigar-and-art8.png',
        'assets/images/cigar-and-art/cigar-and-art9.png',
        'assets/images/cigar-and-art/cigar-and-art10.png',
      ],
      skills: [],
      githubLink: 'https://github.com/MarkoLukesevik/Cigar-Art-Fusion',
      liveDemoLink: 'https://cigar-art-fusion.vercel.app/home',
    },
  ];
}
