'use client';

import { FaXTwitter } from 'react-icons/fa6';
import { useEffect, useRef } from 'react';

export default function ComingSoon() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (videoRef.current) {
        const { current: video } = videoRef;
        const videoRatio = video.videoWidth / video.videoHeight;
        const windowRatio = window.innerWidth / window.innerHeight;

        if (windowRatio > videoRatio) {
          video.style.width = '100vw';
          video.style.height = 'auto';
        } else {
          video.style.width = 'auto';
          video.style.height = '100vh';
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // 初期ロード時にも実行

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative h-full w-full">
      {/* 背景動画 */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 min-w-full min-h-full object-cover"
      >
        <source src="/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* オーバーレイ */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* コンテンツ */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <div className="animate-fade-in text-center px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-yellow-400 drop-shadow-lg">
            Keeb.box
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light mb-6 drop-shadow-lg">
            Coming Soon
          </h2>
          <p className="text-base md:text-lg lg:text-xl mb-12 max-w-2xl mx-auto drop-shadow-md">
            We&apos;re working hard to bring you the ultimate custom keyboard experience. Our
            website is under construction, but we&apos;ll be here soon with our new awesome site.
          </p>
          <div className="flex justify-center">
            <a
              href="https://twitter.com/KeebBox"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              <FaXTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
