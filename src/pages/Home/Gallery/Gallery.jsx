import { galleryImages } from "../../../constants";
import { SlidingGalleryCard } from "./SlidingGalleryCard";

const Gallery = () => {
    return (
        <div className="my-12 sm:my-24">
            <div className='mb-4'>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-center sm:mb-4">
                    Gallery
                </h1>
                <h2 className="text-lg sm:text-xl font-semibold text-center mb-4">
                    Joining Hands for a Better World
                </h2>
            </div>
            {
                [0, 1, 2].map(item => (
                    <SlidingGalleryCard
                        key={item}
                        items={galleryImages[item]}
                        direction={item % 2 === 0 ? 'left' : 'right'}
                        speed="slow"
                    />
                ))
            }
        </div>
    );
}

export default Gallery