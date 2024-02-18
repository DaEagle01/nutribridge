import AboutUs from "./AboutUs"
import ContactUs from "./ContactUs"
import Gallery from "./Gallery/Gallery"
import Hero from "./Hero/Hero"
import Stats from "./Stats"
import SupplyPosts from "./SupplyPosts"
import Testimonial from "./Testimonial/Testimonial"

const Home = () => {
    return (
        <>
            <Hero />
            <SupplyPosts />
            <Testimonial />
            <Gallery />
            <AboutUs />
            <Stats />
            <ContactUs />
        </>
    )
}

export default Home