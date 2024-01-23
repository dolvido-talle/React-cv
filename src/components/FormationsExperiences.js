import React from 'react'
import "./FormationsExperiences.css"
import dataFormations from '../data/Formations'
import Formations from './Formations'
import dataExperiences  from '../data/Experiences'
import Experiences from './Experiences'


function FormationsExperiences() {
 
 
    console.log(dataFormations) 
    return <> 

    <Formations datas={dataFormations}></Formations>
    <Experiences datas={dataExperiences}></Experiences>

    </>
  
  
}

export default FormationsExperiences