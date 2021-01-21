function ProjectCard ({project}) {
    console.log(project);
    return (
        <div className="col-md-4">
            <img className="portpic" src={project.img} alt={project.name}/>
                <div className="middle">
                    <a className="text" href={project.git}>{project.name}</a>
                </div>
        </div>
    );
}

export default ProjectCard;