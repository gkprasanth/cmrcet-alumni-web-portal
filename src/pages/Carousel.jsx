import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import one from "../assets/one.jpg"

import two from "../assets/two.jpg"

import three from "../assets/three.jpg"

import four from "../assets/four.jpg"

import five from "../assets/five.jpg"


export const slides = [
    {
        id: 1,
        image: `${one}`,
        title: "Congratulations Mr. B. Sujith Varma🎉",
        description:
            "🌟 We are thrilled to celebrate your incredible achievement of securing 1st Rank in the All India Chess Ranking♟️\n\n" +
            "🏅 You truly shined at the VARAS All India Open Rating Chess Tournament, held at the G.P. Birla Center, Hyderabad, Telangana from 15th to 19th October 2024. Your dedication, strategy, and passion for the game have earned you this prestigious victory! 🌟\n\n" +
            "👏 Your hard work and perseverance have paid off, and we couldn’t be prouder of your success. Here's to many more victories in the future! 🏆💪",
    },
    {
        id: 2,
        image: `${two}`,
        title: "Congratulations to Miss K. Pravallika! 🎉",
        description:
            "We’re proud to announce that K. Pravallika from CSD III (22H51A6724) has been selected to represent the Telangana Throwball Team in the 44th Senior National Throwball Championship! 🏆 The championship will be held at Bijnor, Uttar Pradesh from November 9th to 11th, 2024.\n\n" +
            "This is a tremendous achievement, and we’re excited to see her showcase her skills on the national stage. All the best, Pravallika! Make us proud! 💪✨",
    },
    {
        id: 3,
        image: `${three}`,
        title: "🎉 *Congratulations to our CMRCET Innovators!* 🎉",
        description:
            "A big round of applause for *P. Grishm Kumar, **V. Sai Vishwa Teja, and **B. Aryan Sanjay* for winning the *3rd prize* and securing a *Wildcard Entry* to the prestigious *Flagship Lab & Market Program of AIC T-Hub*, with benefits worth ₹50,000! 🏆💡\n\n" +
            "👏✨ Here's to more such milestones in the future! 🌟",
    },
    {
        id: 4,
        image: `${four}`,
        title: "*Congratulations to Our CMRCET Students! 🎉👏*",
        description:
            "We are thrilled to share that our talented students have won the Overall Second Prize and a cash reward of ₹6,000 at the Bicycle Design Challenge organized by SAE ISS at the Knowledge Institute of Technology, Salem, on October 26-27, 2024. Competing as Team INNOVELO, they stood out among 40+ teams from across India. 🚲💡\n\n" +
            "*Team Members:* \n" +
            "- V. Abheek (21H51A04F4)\n" +
            "- Namratha Reddy (22H51A04A7)\n" +
            "- Suvarna (21H51A0315)\n" +
            "- VishwaTeja Teja Sri (21H51A04G3)\n" +
            "- Ananya (22H51A04A6)\n" +
            "- P. Shashi Vardhan (23H55A0216)\n\n" +
            "Their creativity, hard work, and technical expertise shone brightly in this challenging competition. 🏆✨\n\n" +
            "A heartfelt thanks to their Faculty Guide, *Mr. A. Harish*, for his guidance and unwavering support. 👨‍🏫🙏\n\n" +
            "Let’s celebrate this incredible achievement! 🌟",
    },
    {
        id: 5,
        image: `${five}`,
        title: "*CMRCET Students Shine at HACK-ARENA 2024!* ",
        description:
            "Congratulations to the CMRCET team for winning the 1st Prize in the Clean and Green Theme and securing the Overall 4th Prize at the HACK-ARENA 2024 national hackathon, hosted by GNIT, Telangana (Nov 21-23, 2024). Competing against 280+ teams, they received ₹3000 for their innovative project, 'SAND BATTERY', developed under CMRCET's Center of Excellence in Energy Research (CEER).\n\n" +
            "*Team Members:* \n" +
            "- Pragnavi Yemireddy (23H51A6262)\n" +
            "- Kanishk Chaturvedi (23H51A6223)\n" +
            "- Tejas Guntru (23H51A66BA)\n" +
            "- Sri Harshita (23H51A6754)\n" +
            "- Attada Manoj (23H51A6266)\n\n" +
            "Guided by mentors Mrs. P. Tulasi Reddy and Mrs. S. Vaishnavi, their project earned acclaim for advancing clean energy solutions. Kudos to the team for their outstanding achievement!",
    },
];

const Carousel1 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        // Set an interval to change slides every 3 seconds
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const viewDetails = (id) => {
        navigate(`/achievement/${id}`);
    };

    return (
        <div className="relative w-full mx-auto p-7">
            {/* Slide Container */}
            <div className="relative overflow-hidden rounded-xl shadow-lg bg-gradient-to-br from-white to-gray-100 h-[calc(100vh-7rem)]">
                <div
                    className="absolute flex transition-transform duration-700 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {slides.map((slide) => (
                        <div key={slide.id} className="w-full flex-shrink-0">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-72 object-cover rounded-t-xl bg-contain aspect-square"
                            />
                            <div className="p-6 h-72 overflow-hidden flex flex-col justify-between">
                                <h3 className="text-2xl  font-semibold text-gray-900">
                                    {slide.title}
                                </h3>
                                <p className="text-sm text-gray-700 leading-relaxed line-clamp-2">
                                    {slide.description}
                                </p>
                                <button
                                    onClick={() => viewDetails(slide.id)}
                                    className="mt-20 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 focus:outline-none"
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 shadow-md hover:bg-gray-700 focus:outline-none"
            >
                &#8592;
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 shadow-md hover:bg-gray-700 focus:outline-none"
            >
                &#8594;
            </button>

            {/* Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-4 h-4 rounded-full transition-colors ${
                            index === currentIndex
                                ? "bg-gray-800"
                                : "bg-gray-400 hover:bg-gray-500"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel1;
