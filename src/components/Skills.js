import React from "react"
import "./Skills.css"
import Skill from "./Skill"
import Interests from "./Interests"


function Skills() {
return (
<>
    <div className="skills">
        <h2 className="h2">Compétences</h2>
        <Skill title='HTML/CSS' rating="4"></Skill>
        <Skill title='JAVASCRIPT' rating="4"></Skill>
        <Skill title='REACT' rating="3"></Skill>
        <Skill title='JAVA SPRING' rating="3"></Skill>
        <Skill title='ANGULAR' rating="3"></Skill>
    </div>
    <div className="skills">
        <h2 className="h2">Langues</h2>
        <Skill title='Français' rating="5"></Skill>
        <Skill title='Anglais' rating="3"></Skill>
        <Skill title='Espagnol' rating="3"></Skill>
    </div>
    <Interests></Interests>




</>

)
}
export default Skills