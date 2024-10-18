import React from "react";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import { Button } from "@/components/ui/button";
import { BackgroundGradient } from "@/components/ui/background-gradiant";

function Creations() {
  const videos = [
    "https://www.youtube.com/embed/j_ChkKUgjQo",
    "https://www.youtube.com/embed/QdV4wg4irNs",
    "https://www.youtube.com/embed/z1xH6PCPxNw",
    "https://www.youtube.com/embed/xbLHiLs-_Kw",
    "https://www.youtube.com/embed/mFjDNuZuWj0",
    "https://www.youtube.com/embed/WxJuKEVyYU0",
  ];
  return (
    <section
      id="creations"
      className="flex flex-col items-center w-full rounded-[7px] border border-[#5B4B31] bg-gradient-to-b from-[#1D1D1D] via-[#505050] to-blue-[#1D1D1D] max-w-[90%] md:max-w-[70%] mx-auto md:p-4 md:my-10"
    >
      <div className="flex flex-col justify-center items-center gap-1 p-4">
        <BackgroundGradient>
          <h2 className="text-xl text-center uppercase font-bold md:text-4xl">
            nos créations
          </h2>
        </BackgroundGradient>
        <div className="h-[2px] w-full bg-primary"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 p-4">
        {videos.map((url, index) => {
          // Extract the video ID from the URL
          const id = url.split("/embed/")[1];
          return (
            <div key={index} className="relative">
              <HeroVideoDialog
                className="block "
                animationStyle="from-center"
                videoSrc={url}
                thumbnailSrc={`https://i.ytimg.com/vi/${id}/sddefault.jpg`}
                thumbnailAlt={`YouTube video thumbnail ${index + 1}`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Creations;
