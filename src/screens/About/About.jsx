import './about.scss';
import Heading from '../../components/Heading/Heading';
import sprites from '../../icons/icons.svg';
import ButtonPrim from '../../components/ButtonPrim/ButtonPrim';
import { Helmet } from "react-helmet-async";
import Loader from '../../components/Loader/Loader';
import { useState, useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';


function About() {

    let dob = '19961008';
    let year = Number(dob.substr(0, 4));
    let month = Number(dob.substr(4, 2)) - 1;
    let day = Number(dob.substr(6, 2));
    let today = new Date();
    let age = today.getFullYear() - year;
    if (today.getMonth() < month || (today.getMonth() === month && today.getDate() < day)) {
        age--;
    }

    const [loadingDone, setLoadingDone] = useState(false);

    useEffect(() => {
        setLoadingDone(true)
    }, [])

    return (
        <div className={loadingDone ? 'about done' : 'about'}>
            <Loader />
            <Helmet>
                <title>About</title>
            </Helmet>
            <Heading parVal={[-180, 0]} heading="About" hspan="me" span="resume" />
            <div className="about_infos">
                <h3>Personal infos</h3>
                <ul className='personal_infos'>
                    <li>
                        <span className='title'>
                            First name:
                        </span>
                        <span className='desc'>
                            Roman
                        </span>
                    </li>
                    <li>
                        <span className='title'>
                            Last name:
                        </span>
                        <span className='desc'>
                            Viznij
                        </span>
                    </li>
                    <li>
                        <span className='title'>
                            Age:
                        </span>
                        <span className='desc'>
                            {age}
                        </span>
                    </li>
                    <li>
                        <span className='title'>
                            Freelance:
                        </span>
                        <span className='desc green'>
                            Available
                        </span>
                    </li>
                    <li>
                        <span className='title'>
                            Phone:
                        </span>
                        <span className='desc'>
                            (+380) 97-688-94-29
                        </span>
                    </li>
                    <li>
                        <span className='title'>
                            Email:
                        </span>
                        <span className='desc'>
                            starsetphenomenon@gmail.com
                        </span>
                    </li>
                    <li>
                        <span className='title'>
                            Languages:
                        </span>
                        <span className='desc'>
                            Ukrainian, English, Hungarian, Russian
                        </span>
                    </li>
                    <li>
                        <span className='title'>
                            Adress:
                        </span>
                        <span className='desc'>
                            Ukraine, Transcarpathia
                        </span>
                    </li>
                </ul>

                <a href="/assets/CV — Junior front-end developer, Roman Viznij.pdf" download>
                    <ButtonPrim text="Download CV">
                        <svg>
                            <use href={sprites + '#download'} />
                        </svg>
                    </ButtonPrim>
                </a>


            </div>
            <div className="skills">
                <h3>My skills</h3>
                <Parallax scale={[0.9, 1.1]}>
                    <div className="skills_main">
                        <div className="skills_wrapper">
                            <div className="skill">
                                <svg>
                                    <use href={sprites + '#html'} />
                                </svg>
                            </div>
                            <div className="skill">
                                <svg>
                                    <use href={sprites + '#css'} />
                                </svg>
                            </div>
                            <div className="skill">
                                <svg className='js'>
                                    <use href={sprites + '#js'} />
                                </svg>
                            </div>
                            <div className="skill">
                                <svg className='react'>
                                    <use href={sprites + '#react'} />
                                </svg>
                            </div>
                            <div className="skill">
                                <svg className='sass'>
                                    <use href={sprites + '#sass'} />
                                </svg>
                            </div>
                            <div className="skill">
                                <svg className='bootstrap'>
                                    <use href={sprites + '#bootstrap'} />
                                </svg>
                            </div>
                            <div className="skill">
                                <svg>
                                    <use href={sprites + '#git'} />
                                </svg>
                            </div>
                            <div className="skill">
                                <svg className='node'>
                                    <use href={sprites + '#node'} />
                                </svg>
                            </div>
                            <div className="skill">
                                <svg className='gulp'>
                                    <use href={sprites + '#gulp'} />
                                </svg>
                            </div>
                            <div className="skill">
                                <svg className='wordpress'>
                                    <use href={sprites + '#wordpress'} />
                                </svg>
                            </div>
                        </div>
                    </div>
                </Parallax>
            </div>
            <div className="experience">
                <h3>Experience & education</h3>
                <div className="exp_edu">
                    <ul className="exp">
                        <li>
                            <div className="icon">
                                <svg>
                                    <use href={sprites + '#case'} />
                                </svg>
                            </div>
                            <span>Oct 2021 - present</span>
                            <h5>Markup developer</h5>
                            <h4>Freelance</h4>
                        </li>
                    </ul>
                    <ul className="edu">
                        <li>
                            <div className="icon">
                                <svg>
                                    <use href={sprites + '#education'} />
                                </svg>
                            </div>
                            <span>Sep 2013 - May 2017</span>
                            <h5>Bachelor's degree - Mathematics and Informatics</h5>
                            <h4>FERENC RAKOCZY II.
                                TRANSCARPATHIAN HUNGARIAN
                                COLLEGE OF HIGHER EDUCATION
                            </h4>
                        </li>
                        <li>
                            <div className="icon">
                                <svg>
                                    <use href={sprites + '#education'} />
                                </svg>
                            </div>
                            <span>Aug 2021</span>
                            <h5>Frontend development
                            </h5>
                            <h4>Udemy</h4>
                        </li>
                        <li>
                            <div className="icon">
                                <svg>
                                    <use href={sprites + '#education'} />
                                </svg>
                            </div>
                            <span>Apr 2022 - Sep 2022</span>
                            <h5>Frontend Pro
                            </h5>
                            <h4>Hillel IT school</h4>
                        </li>
                        <li>
                            <div className="icon">
                                <svg>
                                    <use href={sprites + '#education'} />
                                </svg>
                            </div>
                            <span>Sep 2022 - Nov 2022</span>
                            <h5>Javascript + React
                            </h5>
                            <h4>Udemy</h4>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default About;
