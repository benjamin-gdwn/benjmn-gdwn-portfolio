import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {FaGithubSquare} from 'react-icons/fa'
import {AiOutlineSlack} from 'react-icons/ai'
import './Header.css';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https:/LinkedIn.com' target='_blank'><AiOutlineLinkedin /></a>
        <a href='' target='_blank'><FaGithubSquare /></a>
        <a href='' target='_blank'><AiOutlineSlack /></a>

        </div>
  )
}

export default HeaderSocials