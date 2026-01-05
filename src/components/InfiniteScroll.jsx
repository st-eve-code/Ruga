import React from 'react';
import { useEffect, useRef } from 'react';
import img from '../assets/images/The best heavyweight hoodie you will ever own… (1).jpg'

export default function InfiniteScroll() {
    const scrollRef = useRef(null);
    
    const fitnessCard = [
        {
            id: 1,
            title: "Strength Training Programs",
            image: img,
            description: "Transform your body with our comprehensive strength training programs. Build lean muscle, increase power, and develop real inner strength through personalized workout plans designed by expert trainers. Whether you're a beginner or advanced athlete, our progressive training methods will help you achieve your fitness goals."
        },
        {
            id: 2,
            title: "Cardio Blast Programs",
            image: img,
            description: "Elevate your cardiovascular fitness with high-intensity cardio workouts that burn calories and boost endurance. Our dynamic programs combine interval training, circuit workouts, and heart-pumping exercises to maximize fat loss and improve your overall stamina. Get ready to push your limits and see incredible results."
        },
        {
            id: 3,
            title: "Yoga Flow Programs",
            image: img,
            description: "Discover the perfect balance of mind, body, and spirit through our expertly crafted yoga flow sessions. Improve flexibility, reduce stress, and enhance your mental clarity with guided practices suitable for all levels. From gentle stretches to challenging poses, find your inner peace while building strength and balance."
        },
        {
            id: 4,
            title: "Core Power Training Programs",
            image: img,
            description: "Develop a rock-solid core with targeted exercises that strengthen your abs, obliques, and lower back. Our core power programs focus on functional movements that improve posture, prevent injuries, and enhance athletic performance. Build the foundation for total body strength and stability with every session."
        }
    ];

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let scrollPosition = 0;
        const scrollSpeed = 1; // pixels per frame
        
        const updateCardStyles = () => {
            const cards = scrollContainer.querySelectorAll('.fitness-card');
            const screenCenter = window.innerWidth / 2;
            
            cards.forEach((card) => {
                const rect = card.getBoundingClientRect();
                const cardCenter = rect.left + rect.width / 2;
                const distanceFromCenter = Math.abs(cardCenter - screenCenter);
                const maxDistance = window.innerWidth / 2;
                
                // Calculate scale and opacity based on distance from center
                // Cards at center: scale 1, opacity 1
                // Cards at edges: scale 0.7, opacity 0.3
                const normalizedDistance = Math.min(distanceFromCenter / maxDistance, 1);
                const scale = 1 - (normalizedDistance * 0.3); // 1 to 0.7
                const opacity = 1 - (normalizedDistance * 0.7); // 1 to 0.3
                
                card.style.transform = `scale(${scale})`;
                card.style.opacity = opacity;
            });
        };
        
        const animate = () => {
            scrollPosition += scrollSpeed;
            
            // Get the width of one set of cards
            const firstCard = scrollContainer.querySelector('.fitness-card');
            if (firstCard) {
                const cardWidth = firstCard.offsetWidth + 40; // card width + margins
                const setWidth = cardWidth * fitnessCard.length;
                
                // Reset position when one full set has scrolled
                if (scrollPosition >= setWidth) {
                    scrollPosition = 0;
                }
                
                scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
                updateCardStyles();
            }
            
            requestAnimationFrame(animate);
        };
        
        const animationId = requestAnimationFrame(animate);
        
        return () => cancelAnimationFrame(animationId);
    }, [fitnessCard.length]);

    return (
        <div className='min-h-screen flex items-center justify-center overflow-hidden py-12' >
            <div className="relative w-full overflow-hidden">
                <div className="flex" ref={scrollRef} style={{willChange: 'transform'}}>
                    {/* Render three sets of cards for seamless infinite scroll */}
                    {[...Array(3)].map((_, setIndex) => (
                        fitnessCard.map((card) => (
                            <div
                                key={`set-${setIndex}-card-${card.id}`}
                                className="fitness-card flex-shrink-0 w-80 md:w-96 lg:w-[450px] h-[400px] md:h-[450px] lg:h-[500px] m-5 rounded-[10px] transform transition-all duration-300 relative overflow-hidden cursor-pointer z-[1]"
                            >
                                <img src={card.image} alt={card.title} className="w-full h-full object-cover absolute inset-0"/>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex items-end justify-start p-6 md:p-8">
                                    <div className="text-left">
                                        <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-200 mb-2" style={{fontFamily: "'Poppins', sans-serif", fontWeight: 500, lineHeight: 1.3}}>
                                            {card.title}
                                        </h3>
                                        <p className="text-xs md:text-sm text-gray-300 leading-relaxed" style={{fontFamily: "'Poppins', sans-serif", fontWeight: 300, lineHeight: 1.6}}>
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ))}
                </div>
            </div>
        </div>
    );
}
