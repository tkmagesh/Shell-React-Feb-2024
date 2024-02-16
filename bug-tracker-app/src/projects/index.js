
import { useState} from 'react';

export default function ProjectsTracker({projects, createNew, remove}){
    
    const [newProjectName, setNewProjectName]= useState('')
    const projectItems = projects.map(project => (
        <li key={project.id}>
            <span>{project.name}</span>
            <button onClick={() => remove(project)}>Remove</button>
        </li>
    ))
    return(
        <div>
            <h3>Projects</h3>
            <hr/>
            <section>
                <label htmlFor="">Project Name :</label>
                <input type="text" onChange={evt => setNewProjectName(evt.target.value)}/>
                <button onClick={() => createNew(newProjectName)}>Create New</button>
            </section>
            <section>
                <ul>
                   {projectItems} 
                </ul>
            </section>
        </div>    
    )
}