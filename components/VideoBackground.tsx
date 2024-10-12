import BackgroundVideo from "next-video/background-video";
import videoSource from "../videos/dust.mp4";
import React, { ReactNode } from "react";

interface VideoBackgroundProps {
  children: ReactNode; // Define children as a ReactNode
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ children }) => {
  return (
    <BackgroundVideo
      className="absolute inset-0 object-cover w-full h-full "
      autoPlay
      loop
      muted
      playsInline
      src={videoSource}
    >
      {children}
    </BackgroundVideo>
  );
};

export default VideoBackground;
