import React from "react";
import Particles from "./ui/particles";

function WhyUs() {
  return (
    <section className="flex flex-col justify-center items-center ">
      <div className="flex flex-col justify-center items-center gap-1 py-4">
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
        tendances. Avec nous, vos contenus ne seront pas seulement créatifs, ils
        seront aussi conçus pour engager et développer votre audience.
      </p>
      <Particles
        className="absolute "
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
    </section>
  );
}

export default WhyUs;
