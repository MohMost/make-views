import React from "react";
import { Button } from "./ui/button";
import VideoBackground from "./VideoBackground";
import { videoSchema } from "../schemas/videoSchema";
import { BackgroundGradient } from "./ui/background-gradiant";
import SocialMedia from "./ui/social-media";
import { ContactModal } from "./ContactModal";
import Link from "next/link";

function Banner() {
  const videoUrl =
    "https://firebasestorage.googleapis.com/v0/b/makeviews-ea1af.appspot.com/o/Videos%2Fdust.mp4?alt=media&token=efc7bf5c-bf0f-4ced-8f63-7aec48414db4";

  // Validate the URL (optional)
  const validationResult = videoSchema.safeParse({ videoUrl });

  if (!validationResult.success) {
    console.error(validationResult.error);
    return <div>Error: Invalid video URL</div>;
  }

  return (
    <section className="h-[70dvh] w-full flex flex-col justify-center items-center gap-4 ">
      {" "}
      <VideoBackground videoUrl={validationResult.data.videoUrl}>
        <div className="flex flex-col justify-center items-center gap-4 z-[1]">
          {" "}
          <SocialMedia />
          <div className="">
            <h2 className="flex  flex-col text-3xl text-center uppercase font-bold ">
              <span className="text-primary  mb-2 text-lg md:text-3xl xl:text-4xl font-normal">
                MAKE VIEWS
              </span>
              <span className="text-xl md:text-4xl xl:text-5xl">
                Donnons vie à vos idées
              </span>
            </h2>
            <h1 className=" text-3xl md:text-5xl xl:text-6xl text-center uppercase font-bold">
              votre <span className="text-primary">vision</span> notre{" "}
              <span className="text-primary">création</span>
            </h1>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4">
          <BackgroundGradient>
            <ContactModal>
              <Button className="w-48 z-10">Travallons-ensemble</Button>
            </ContactModal>
          </BackgroundGradient>
          <Link href="/#services">
            {" "}
            <Button className="w-48 " variant={"outline"} size={"default"}>
              nos services
            </Button>
          </Link>
        </div>
      </VideoBackground>
    </section>
  );
}

export default Banner;
