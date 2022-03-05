import React from 'react'
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'

const SocialMedia = () => (
    <div className='app__social'>
        <div>
            <a href='https://www.linkedin.com/in/d-rosen/'>
                <BsLinkedin />
            </a>
        </div>
        <div>
            <a href='https://github.com/Dan-Rosen'>
                <BsGithub />
            </a>
        </div>
        <div>
            <a href='https://www.instagram.com/therealdanrosen/'>
                <BsInstagram />
            </a>
        </div>
    </div>
)

export default SocialMedia
