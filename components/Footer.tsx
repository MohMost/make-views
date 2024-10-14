import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import SocialMedia from "./ui/social-media";
import { BackgroundGradient } from "./ui/background-gradiant";
import VideoBackground from "./VideoBackground";
import { videoSchema } from "@/schemas/videoSchema";
import { ContactModal } from "./ContactModal";

function Footer() {
  const videoUrl =
    "https://firebasestorage.googleapis.com/v0/b/makeviews-ea1af.appspot.com/o/Videos%2Fdust.mp4?alt=media&token=efc7bf5c-bf0f-4ced-8f63-7aec48414db4";

  // Validate the URL (optional)
  const validationResult = videoSchema.safeParse({ videoUrl });

  if (!validationResult.success) {
    console.error(validationResult.error);
    return <div>Error: Invalid video URL</div>;
  }

  return (
    <footer>
      <VideoBackground videoUrl={validationResult.data.videoUrl}>
        <div className="flex justify-center items-center flex-col gap-10 py-10  ">
          <div className="h-[2px] w-1/2 bg-primary"></div>
          <div className="flex flex-col md:flex-row-reverse gap-4 justify-center md:justify-between md:gap-10  items-center">
            <BackgroundGradient>
              <ContactModal>
                <Button>travallons-ensemble</Button>
              </ContactModal>
            </BackgroundGradient>
            <div className="flex gap-2">
              <Image src="/Email.svg" alt="email" width={24} height={24} />
              <Link href="/mentions-legales">makeviews.contact@gmail.com</Link>
            </div>
            <SocialMedia />
          </div>
        </div>
      </VideoBackground>
    </footer>
  );
}

export default Footer;
