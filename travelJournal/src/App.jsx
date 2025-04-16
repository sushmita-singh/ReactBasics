import Header from "../components/Header"
import Entry from "../components/Entry"
import travelDataArray from "../data"

export default function App() {
    console.log(travelDataArray)
    const travelData = travelDataArray.map(location => {
        return (
            <Entry 
                key={location.id}
                country={location.country}
                googleMapsLink={location.googleMapsLink}
                img_src={location.img.src}
                text={location.text}
                title={location.title}
                dates={location.dates}
                img_alt={location.img.alt}
            />
        )
    })
    return (
        <>
        <Header />
        {travelData}
        </>
    )
}