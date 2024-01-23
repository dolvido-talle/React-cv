import React from 'react'
import './User.css';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import EventIcon from '@mui/icons-material/Event';


function User() {
  return (
    <div className='user'>
        <img src="./images/image-moi.jpg" alt=''className='user__avatar'></img>
        <h1 className='user__name'>Dolvido Talle</h1>
        <p className='user__profession'> Développeur web</p>
        <div className='user__infos'>
            <p className='user__info'>
            <HomeIcon></HomeIcon>  19 boulevard Louis-Blanc</p>
            <p className='user__info'>
            <PhoneIcon></PhoneIcon>
                <a href="tel:+33640673249"> 0640673249</a>
            </p>
            <p className='user__info'>
            <MailIcon></MailIcon>
                <a href='mailto:tdolvido@yahoo.fr'>tdolvido@yahoo.fr</a>
            </p>
            
            <p className='user__info'>
             <EventIcon></EventIcon>
              Date de naissance : 09 mai 2002</p>

        </div>
    </div>
  )
}

export default User