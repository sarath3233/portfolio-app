import { Component } from '@angular/core';
import { ProjectService } from '../../service/project.service';

export interface project {
  name: string,
  description: string,
  technologies: string
}
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent {
  projects: project[];
  constructor(private projectService: ProjectService) {

  }

  ngOnInit() {
    //Get project details
    this.projectService.getProjects().subscribe(projects => {
      console.log(projects)
      this.projects = projects;
    }, error => {
      console.error(error);
    })
  }
}
