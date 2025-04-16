export default function Entry(props) {
    return(
        <main className='main'>
            <img className='main-img' src={props.img_src} alt={props.image_alt} />
            <div className='main-content'>
                <span className='location'>
                    <img className='location-icon' src='/images/marker.png'/>
                    <p className='location-country'>{props.country}</p>
                    <a className='location-link' href={props.googleMapsLink}>View on Google Maps</a>
                </span>  
                <span className='name'>{props.title}</span>
                <span className='date'>{props.dates}</span>
                <span className='desc'>{props.text}</span>
            </div>
        </main>
    )
}