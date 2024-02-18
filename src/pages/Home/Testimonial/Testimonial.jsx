import { InfiniteMovingCards } from "./InfiniteMovingCards";

const Testimonial = () => {
    return (
        <div className="mt-12 h-[35rem] rounded-md flex flex-col antialiased bg-white  items-center relative overflow-hidden">
            <div className='sm:mb-4 px-2 sm:px-0'>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-center mb-4">
                    Testimonials
                </h1>
                <h2 className="text-lg sm:text-xl font-semibold text-center mb-4">
                    What our noble donors has to say about us
                </h2>
            </div>
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </div>
    );
}

const testimonials = [
    {
        "name": "Rahim",
        "location": "Dhaka",
        "image": "rahim.jpg",
        "testimonial": "I donated to this project because I believe in its mission of providing food and supplies to those who need them most. I was impressed by how efficiently and transparently they operate, and how they keep me updated on their progress and impact. I feel proud to be a part of this noble cause."
    },
    {
        "name": "Fatima",
        "location": "Chattogram",
        "image": "fatima.jpg",
        "testimonial": "This project is close to my heart, as I have seen the struggles of many people in my community who lack access to basic necessities. I decided to donate to this project because I wanted to make a difference in their lives, and help them overcome their challenges. I am happy to see how this project is improving the lives of many people across the country."
    },
    {
        "name": "Shahid",
        "location": "Sylhet",
        "image": "shahid.jpg",
        "testimonial": "I am a regular donor to this project, and I can attest to the quality and effectiveness of their work. They have a dedicated and professional team, who work tirelessly to deliver food and supplies to the most vulnerable communities. They also have a strong network of partners and volunteers, who ensure that the distribution is done smoothly and safely. I trust this project, and I encourage others to support them as well."
    },
    {
        "name": "Nasrin",
        "location": "Khulna",
        "image": "nasrin.jpg",
        "testimonial": "I was inspired to donate to this project after I learned about their vision and goals. They have a holistic approach to food distribution and supplies management, which addresses not only the immediate needs, but also the long-term solutions. They also have a focus on empowering women and children, who are often the most affected by food insecurity and poverty. I think this project is doing a great job, and I hope they continue to grow and succeed."
    },
    {
        "name": "Rajib",
        "location": "Rajshahi",
        "image": "rajib.jpg",
        "testimonial": "I have been a supporter of this project since its inception, and I have witnessed the positive impact they have made in many communities. They have a clear and realistic plan, and they execute it with passion and dedication. They also have a high level of accountability and transparency, and they always keep me informed of their activities and outcomes. I am glad to be a part of this project, and I look forward to seeing more of their achievements."
    },
    {
        "name": "Farzana",
        "location": "Barisal",
        "image": "farzana.jpg",
        "testimonial": "I joined this project as a donor because I wanted to contribute to a meaningful and sustainable cause. I was impressed by how this project is addressing the root causes of food insecurity and poverty, and how they are working with local communities to create lasting change. They also have a diverse and inclusive team, who respect and value the voices and opinions of all stakeholders. I think this project is a great example of how we can work together to make the world a better place."
    }
]


export default Testimonial;