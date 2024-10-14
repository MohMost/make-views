"use client";
import { client } from "@/sanity/lib/client";
import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import { BackgroundGradient } from "./ui/background-gradiant";
import { HoverEffect } from "./ui/card-hover-effect";

interface Service {
  title: string;
  description: string;
}
interface Card {
  className: string;
  children: React.ReactNode; // Ajoutez cette ligne
}
interface ServicesSection {
  h2Title: string;
  services: Service[];
}

async function getServiceList(): Promise<ServicesSection[]> {
  const query = `*[_type == "servicesSection"]{
    h2Title,
    "services": servicesList[] {
      title,
      description,
     
    }
  }`;

  const data = await client.fetch(query);
  return data;
}

const EmblaCarousel: React.FC = () => {
  const [serviceList, setServiceList] = useState<ServicesSection[]>([]);

  // Options pour le carousel, y compris la boucle
  const options: EmblaOptionsType = { loop: true };

  const [emblaRef] = useEmblaCarousel(options);

  useEffect(() => {
    const fetchServices = async () => {
      const servicesData = await getServiceList();
      setServiceList(servicesData);
    };

    fetchServices();
  }, []);

  // Construction des projets en vérifiant la longueur du tableau
  const projects = (serviceList[0]?.services || [])
    .slice(0, 5)
    .map((service) => ({
      title: service.title,
      description: service.description,
    }));

  return (
    <section
      id="services"
      className="w-full flex flex-col justify-center items-center gap-4 md:max-w-[70%] mdmx-auto md:my-10"
    >
      <BackgroundGradient>
        <div>
          <h2 className="text-xl text-center uppercase font-bold md:text-4xl">
            {serviceList.length > 0 ? serviceList[0].h2Title : "Nos Services"}
          </h2>
          <div className="h-[2px] w-full bg-primary"></div>
        </div>
      </BackgroundGradient>

      <div className="embla overflow-hidden w-full md:hidden">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {projects.map((service, index) => (
              <div
                key={index}
                className="embla__slide basis-1/3 bg-[#1D1D1D] rounded-2xl border border-[#5B4B31] shadow-lg mx-2"
              >
                <div className="flex h-full flex-col justify-around items-center p-4">
                  <h3 className="font-semibold text-center text-xl">
                    {service.title}
                  </h3>
                  <p className="text-center">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <HoverEffect items={projects} />
      </div>
    </section>
  );
};

export default EmblaCarousel;
