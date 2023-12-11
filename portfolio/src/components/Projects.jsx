import React from "react";
import SectionTitle from "./SectionTitle";
import ProjectItem from "./ProjectItem";
import projects from '../data/projects'

const Projects = () =>{
    return (
        <div className="py-12">
            
            <SectionTitle id='projects'>Projects</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-flow-col-3 gap-4">
            {projects.map(project =>(
                 <ProjectItem
                 key={project.title}
                 imgUrl={project.imgUrl}
                 title={project.title}
                 tech={project.tech}
                 link={project.link}
                 />
            ))}
           
        </div>
        </div>
    )
}
export default Projects