"use client";




import FUITestimonialWithSlide from "@/components/ui/sliding-testimonial";

const testimonials = [
    {
        name: "T MaMba",
        description: "A cozy and chill atmosphere, as its name suggests. Good music, stylish decor, perfect for working or relaxing with friends. The coffee is good and the staff is super friendly!",
    },
    {
        name: "Maja Kriskovic",
        description: "It is one of the rare rock alternative café's in Casablanca. Full of cool young people. If you are on the alternative side, this place is a must. Very good atmosphere",
    },
    {
        name: "amine hamrioui",
        description: "Very good coffee with a pleasant atmosphere. The service was fast and the staff friendly. Ideal for a relaxing break or a moment with friends. I recommend it!",
    },
    {
        name: "Zakaria Kariki",
        description: "One of the best cafes where you can relax and feel comfortable in your own home.",
    },
    {
        name: "anas benhamid",
        description: "A perfect place for board game lovers 🧩🃏🎲",
    },
    {
        name: "Med reda ETTAHERY",
        description: "Highly recommended spot to play PS5 🎮🎮🎮",
    },
    {
        name: "Chorouk Elkaichi",
        description: "The fusion of the music and the youth",
    },
    {
        name: "Nassim Haouam",
        description: "Very good vibes 😎. Tasty food and clean space.",
    },
    {
        name: "kénza Hbl",
        description: "Fun spot with retro style & beautiful vintage decor 🎼🪬🧿",
    },
    {
        name: "Sarah Mdouari",
        description: "The best coffee in Casa, I highly recommend it.",
    },
];

export default function TestimonialsSection() {

    return (
        <section id="testimonials" className="relative min-h-screen flex flex-col justify-center py-12 px-6 overflow-hidden bg-slate-950">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                {/* Lighter gradient wash to tints but not hide the pattern */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/40 to-slate-950" />

                {/* Subtle radial vignette to focus center, but less aggressive */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.7)_100%)]" />
            </div>

            <div className="relative z-10">
                <FUITestimonialWithSlide
                    testimonials={testimonials}
                    title="What Our Guests Say"
                    className="font-display font-bold"
                />
            </div>
        </section>
    );
}
