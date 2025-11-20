import { useEffect, useState } from "react";

const screenshots = [
  "/assets/saves.png",
  "/assets/notif.PNG",
  "/assets/add.png",
  "/assets/saves_2.png",
  "/assets/medium.jpeg",
  "/assets/reddit.png",
  "/assets/youtube.png",
];

export default function PhoneCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshots.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex-1 flex items-center justify-center relative">
      <div className="relative w-80 h-[650px]">
        <div
          className="absolute inset-0 bg-linear-to-br from-gray-800 to-gray-900 
        rounded-[3rem] shadow-2xl p-2.5"
        >
          <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 
            bg-black rounded-b-3xl z-10"
            />
            <div className="relative w-full h-full">
              {screenshots.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Slide ${idx + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 
                  ${
                    idx === currentSlide
                      ? "opacity-90 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
