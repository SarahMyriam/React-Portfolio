import React from 'react';
import Projects from '../models/projects'
import ProjectCard from "../components/ProjectCard";


function Portfolio () {
    return (    
        <div className="container-fluid conport">
            <div id="maintitle" className="row">
                <div className="col-sm-12">
                    <h3>What can I Do?</h3>
                    <div className="row portrow">
                        {Projects.map((proj,i) => (
                            < ProjectCard project={proj} key={i} />
                            ))
                        }
                    </div>

                </div>
            </div>
            
        </div>
    );
}

export default Portfolio; 



