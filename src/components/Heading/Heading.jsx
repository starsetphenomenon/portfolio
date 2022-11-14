import './heading.scss';

function Heading({ heading, hspan, span }) {


    return (
        <div className="heading">
            <span className='spanBG'>{span}</span>
            <h1>
                {heading}
                <span>{hspan}</span>
            </h1>
        </div >
    )
}

export default Heading;
