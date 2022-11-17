/* eslint-disable no-mixed-operators */
import './heading.scss';
import { Parallax } from 'react-scroll-parallax';

function Heading({ heading, hspan, span, parVal }) {


    return (
        <div className="heading">
            <span className='spanBG'>{span}</span>
            <h1>
                <Parallax rotateY={parVal}>
                    {heading}
                    <span>{hspan}</span>
                </Parallax>
            </h1>
        </div >
    )
}

export default Heading;
