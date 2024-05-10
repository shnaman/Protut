import React, { useState, useRef, useEffect } from "react";

const HeroSection1 = () => {
  const videos = [
    { src: "/Herosection1-videos/video1.mp4", title: "Video 1" },
    { src: "/Herosection1-videos/video2.mp4", title: "Video 2" },
    { src: "/Herosection1-videos/video3.mp4", title: "Video 3" },
    { src: "/Herosection1-videos/video4.mp4", title: "Video 4" },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    if (currentStep < videos.length - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("ended", handleVideoEnd);
      videoRef.current.play(); // Autoplay the first video
    }
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, []); // Run only once when the component mounts

  return (
    <div className="flex flex-col items-center justify-evenly min-h-screen bg-slate-800 bg-gray-100">
      <div className="upper-part text-white">
        <br />
        <h1 className="font-bold">Here how it works</h1>
        <br />
        <h1 className="font-bold">Start a free trail</h1>
      </div>
      <div className="lower-part flex justify-center items-center mt-8">
        <div className="w-1/4 ">
          {Array.from({ length: 2 }, (_, i) => i + 1).map((step) => (
            <button
              key={step}
              className={`px-4 py-2 m-2 rounded-full font-bold ${
                currentStep === step - 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setCurrentStep(step - 1)}
            >
              {`Step ${step}`}
            </button>
          ))}
        </div>
        <div className="w-1/2">
          <video
            ref={videoRef}
            width="400"
            height="315"
            src={videos[currentStep]?.src}
            autoPlay
            controls
            muted
          />
        </div>
        <div className="w-1/4 ">
          {Array.from({ length: 2 }, (_, i) => i + 3).map((step) => (
            <button
              key={step}
              className={`px-4 py-2 m-2 rounded-full font-bold ${
                currentStep === step - 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setCurrentStep(step - 1)}
            >
              {`Step ${step}`}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection1;
