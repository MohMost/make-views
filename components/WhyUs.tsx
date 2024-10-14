import React from "react";
import VideoBackground from "./VideoBackground";
import { videoSchema } from "../schemas/videoSchema";
function WhyUs() {
  const videoUrl =
    "https://firebasestorage.googleapis.com/v0/b/makeviews-ea1af.appspot.com/o/Videos%2Fdust.mp4?alt=media&token=efc7bf5c-bf0f-4ced-8f63-7aec48414db4";

  // Validate the URL (optional)
  const validationResult = videoSchema.safeParse({ videoUrl });

  if (!validationResult.success) {
    console.error(validationResult.error);
    return <div>Error: Invalid video URL</div>;
  }

  return (
    <section
      id="whyus"
      className="w-full flex flex-col justify-center items-center py-4 gap-4"
    >
      <VideoBackground videoUrl={validationResult.data.videoUrl}>
        <div>
          <h2 className="text-xl text-center uppercase font-bold ">
            pourquoi nous choisir ?
          </h2>
          <div className="h-[2px] w-full bg-primary "></div>
        </div>

        <p className="text-center py-4 font-light">
          Vous vous demandez pourquoi choisir{" "}
          <span className="text-primary">Makeviews</span> plutôt qu’un autre
          prestataire ? C’est une excellente question. La réponse est simple :
          nous aimons notre travail ! Chaque membre de l&lsquo;équipe est
          passionné par ce qu&lsquo;il fait, ce qui rend chaque projet unique.
          Vous ne serez pas qu&lsquo;un nom de plus sur un tableau Excel, car
          notre but est d&lsquo;atteindre les sommets. Vous pouvez donc être sûr
          que nous nous investirons pleinement pour comprendre vos besoins
          spécifiques et y répondre de manière personnalisée. Nous adaptons nos
          solutions à vos exigences, tout en restant à l’affût des dernières
          tendances. Avec nous, vos contenus ne seront pas seulement créatifs,
          ils seront aussi conçus pour engager et développer votre audience.
        </p>
      </VideoBackground>
    </section>
  );
}

export default WhyUs;
