import './About.css'
import {MdOutlineSchool} from 'react-icons/md'
import {HiOutlineDesktopComputer} from 'react-icons/hi'
import {FaTools} from 'react-icons/fa'
import ME from '../../assets/profile.png'

const About = () => {
    return ( <section id='about'>
        <h5>Get To Know</h5>
        <h2>Me</h2>

        <div className='container about__container'>
            <div className='about__me'>
    <div className='about__me-image'>
        <img src={ME} alt="" />
    </div>
            </div>
            <div className='about__content'>
            <div className='about__cards'>
                <article className='about__card'>
                    <HiOutlineDesktopComputer />
                    <h5>Languages</h5>
                    <small>HTML, CSS, JavaScript</small>
                </article>
                <article className='about__card'>
                    <FaTools />
                    <h5>Tools</h5>
                    <small>React, Redux, Router, Git, Github</small>
                </article>
                <article className='about__card'>
                    <MdOutlineSchool />
                    <h5>Projects</h5>
                    <small>Over 20 projects completed!</small>
                </article>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis totam iusto doloremque amet sapiente sint vel asperiores laboriosam, reprehenderit molestiae facilis alias eos fuga commodi expedita magnam. Quas, doloribus?</p>
            </div>
        </div>
    </section> );
}
 
export default About;