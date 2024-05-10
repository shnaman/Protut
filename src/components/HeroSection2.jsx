import React, { useState, useRef, useEffect } from 'react';

const HeroSection2 = () => {
  const videos = [
    { src: "/Herosection1-videos/video1.mp4", title: 'Video 1' },
    { src: "/Herosection1-videos/video2.mp4", title: 'Video 2' },
    { src: "/Herosection1-videos/video3.mp4", title: 'Video 3' },
    { src: "/Herosection1-videos/video4.mp4", title: 'Video 4' },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const videoRef = useRef(null);
  const [userInteracted, setUserInteracted] = useState(false); // Track user interaction

  const handleVideoEnd = () => {
    if (currentStep < videos.length - 1) {
      setCurrentStep(prevStep => prevStep + 1);
    }
    setUserInteracted(true); // Set user interaction flag
  };

  useEffect(() => {
    if (videoRef.current && userInteracted) { 
      videoRef.current.addEventListener('ended', handleVideoEnd);
      videoRef.current.play(); 
    }
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, [userInteracted]); 

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('hero-section');
      const rect = element.getBoundingClientRect();
      const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
      
      if (rect.top <= viewHeight / 2 && rect.bottom >= viewHeight / 2) {
        if (!videoRef.current.paused) return;
        setUserInteracted(true); 
      } else {
        if (!videoRef.current.paused) {
          videoRef.current.pause();
        }
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []); 

  const handleTabClick = (index) => {
    setCurrentStep(index);
    videoRef.current.src = videos[index].src;
    videoRef.current.play();
    setUserInteracted(true); 
  };
  

  return (
    <div id="hero-section" className="flex flex-col  gap-5 min-h-screen bg-gray-500 ">
      <div className="upper-part">
        <Navbar tabs={videos} onTabClick={handleTabClick} currentStep={currentStep} />
      </div>
      <div className="lower-part flex items-center justify-evenly">
        <ContentSection videoSrc={videos[currentStep].src} videoRef={videoRef} />
         <button className='px-4 py-2 m-2 rounded-full font-bold bg-blue-500 text-white'>Get Started</button>
      </div>
    </div>
  );
};

const Navbar = ({ tabs, onTabClick, currentStep }) => {
  return (
    <div className="flex justify-center py-4 bg-gray-200">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`px-4 py-2 m-2 rounded-full font-bold ${
            currentStep === index
             ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-800'
          }`}
          onClick={() => onTabClick(index)}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
};

const ContentSection = ({ videoSrc, videoRef }) => {
  return (
    <div className="flex flex-col items-center">
      <video
        ref={videoRef}
        width="400"
        height="315"
        src={videoSrc}
        autoPlay={true} // Enable autoplay
        controls
        muted
      />
      <p className="text-xl font-bold mb-2">{videoSrc.title}</p>
    </div>
  );
};

export default HeroSection2;