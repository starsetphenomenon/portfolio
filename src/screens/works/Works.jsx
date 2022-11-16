import './works.scss';
import Heading from '../../components/Heading/Heading';
import sprites from '../../icons/icons.svg';
import { Helmet } from "react-helmet-async";
import Loader from '../../components/Loader/Loader';
import { useState, useEffect } from 'react';

function Works() {

    const [loadingDone, setLoadingDone] = useState(false);

    useEffect(() => {
        setLoadingDone(true)
    }, [])

    const works = {
        'gradient-generator': {
            'heading': 'gradient generator',
            'project': 'website',
            'client': 'pet project',
            'languages': 'HTML, CSS, JS',
            'preview': 'https://starsetphenomenon.github.io/gradient-generator/',
            'img': '/assets/img/works/gradient.webp',
        },
        'knife-store': {
            'heading': 'online store',
            'project': 'web appliaction',
            'client': 'pet project',
            'languages': 'React, SCSS',
            'preview': 'https://store-project-local-db.vercel.app/',
            'img': '/assets/img/works/react-store-project.webp',
        },
        'rootz': {
            'heading': 'Rootz',
            'project': 'website',
            'client': 'pet project',
            'languages': 'React, SCSS, Swiper, Parallax',
            'preview': 'https://halo-test-red.vercel.app/',
            'img': '/assets/img/works/rootz.webp',
        },
        'roza-vitriv': {
            'heading': 'Roza Vitriv',
            'project': 'website',
            'client': 'Ivan Nebela',
            'languages': 'HTML, SCSS, JS, WOW.JS, Animate.CSS',
            'preview': 'https://starsetphenomenon.github.io/polonyna/',
            'img': '/assets/img/works/polonyna.webp',
        },
        'custom-gallery': {
            'heading': 'Custom Gallery',
            'project': 'script',
            'client': 'pet project',
            'languages': 'HTML, CSS, JS',
            'preview': 'https://starsetphenomenon.github.io/custom-gallery/',
            'img': '/assets/img/works/custom-gallery.webp',
        },
        'slider-swiper': {
            'heading': 'Slider Swiper',
            'project': 'script',
            'client': 'pet project',
            'languages': 'HTML, CSS, JS',
            'preview': 'https://starsetphenomenon.github.io/slider/',
            'img': '/assets/img/works/slider-swiper.webp',
        },
        'password-generator': {
            'heading': 'Password Generator',
            'project': 'website',
            'client': 'pet project',
            'languages': 'HTML, CSS, JS',
            'preview': 'https://starsetphenomenon.github.io/password-generator/',
            'img': '/assets/img/works/password-generator.webp',
        }
    }

    const [active, setActive] = useState(false);

    const handleWork = (e) => {
        e.stopPropagation()
        setActive(prev => !prev)
        console.log(active)
    }


    return (
        <div className={loadingDone? 'works done' : 'works'}>
            <Loader />
            <Helmet>
                <title>Works</title>
            </Helmet>
            {active && <div onClick={handleWork} className="wrapper"></div>}
            <Heading heading="My" hspan="portfolio" span="works" />
            <div className="portfolio">
                <div className={active ? 'info active' : 'info'}>
                    <div onClick={handleWork} className="close">
                        <span></span>
                        <span></span>
                    </div>
                    <h3>{works[active]?.heading}</h3>
                    <div className="desc">
                        <div className="desc_item">
                            <svg>
                                <use href={sprites + '#project'} />
                            </svg>
                            <span>Project: </span>
                            <h4>{works[active]?.project}</h4>
                        </div>
                        <div className="desc_item">
                            <svg>
                                <use href={sprites + '#user'} />
                            </svg>
                            <span>Client: </span>
                            <h4>{works[active]?.client}</h4>
                        </div>
                        <div className="desc_item">
                            <svg>
                                <use href={sprites + '#code'} />
                            </svg>
                            <span>Languages: </span>
                            <h4>{works[active]?.languages}</h4>
                        </div>
                        <div className="desc_item">
                            <svg>
                                <use href={sprites + '#link'} />
                            </svg>
                            <span>Preview: </span>
                            <a rel="noreferrer" target="_blank" href={works[active]?.preview}>link</a>
                        </div>
                    </div>
                    <div className="desc_img">
                        <img src={works[active]?.img} alt="project" />
                    </div>
                </div>

                <div name="knife-store" onClick={(e) => setActive(e.currentTarget.getAttribute('name'))} className="item">
                    <img src="/assets/img/works/react-store-project.webp" alt="project1" />
                    <div className="cover">
                        <h3>Knife-store</h3>
                    </div>
                </div>
                <div name="gradient-generator" onClick={(e) => setActive(e.currentTarget.getAttribute('name'))} className="item">
                    <img src="/assets/img/works/gradient.webp" alt="project2" />
                    <div className="cover">
                        <h3>Gradient generator</h3>
                    </div>
                </div>
                <div name="rootz" onClick={(e) => setActive(e.currentTarget.getAttribute('name'))} className="item">
                    <img src="/assets/img/works/rootz.webp" alt="project3" />
                    <div className="cover">
                        <h3>Rootz</h3>
                    </div>
                </div>
                <div name="roza-vitriv" onClick={(e) => setActive(e.currentTarget.getAttribute('name'))} className="item">
                    <img src="/assets/img/works/polonyna.webp" alt="project4" />
                    <div className="cover">
                        <h3>Roza Vitriv</h3>
                    </div>
                </div>
                <div name="custom-gallery" onClick={(e) => setActive(e.currentTarget.getAttribute('name'))} className="item">
                    <img src="/assets/img/works/custom-gallery.webp" alt="project5" />
                    <div className="cover">
                        <h3>Custom Gallery</h3>
                    </div>
                </div>
                <div name="slider-swiper" onClick={(e) => setActive(e.currentTarget.getAttribute('name'))} className="item">
                    <img src="/assets/img/works/slider-swiper.webp" alt="project6" />
                    <div className="cover">
                        <h3>Slider/Swiper</h3>
                    </div>
                </div>
                <div name="password-generator" onClick={(e) => setActive(e.currentTarget.getAttribute('name'))} className="item">
                    <img src="/assets/img/works/password-generator.webp" alt="project7" />
                    <div className="cover">
                        <h3>Password Generator</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works;


