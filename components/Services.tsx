"use client";
import { client } from "@/sanity/lib/client";
import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";

interface Service {
  title: string;
  description: string;
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
      description
    }
  }`;

  const data = await client.fetch(query);
  return data;
}

const EmblaCarousel: React.FC = () => {
  const [serviceList, setServiceList] = useState<ServicesSection[]>([]);

  // Set options for the carousel, including loop
  const options: EmblaOptionsType = { loop: true };

  const [emblaRef] = useEmblaCarousel(options);

  useEffect(() => {
    const fetchServices = async () => {
      const servicesData = await getServiceList();
      setServiceList(servicesData);
    };

    fetchServices();
  }, []);

  return (
    <section className="w-full flex flex-col justify-center items-center gap-4">
      <h2 className="text-xl text-center uppercase font-bold">
        {serviceList[0]?.h2Title || "Nos Services"}
      </h2>

      <div className="embla overflow-hidden w-full">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container ">
            {serviceList[0]?.services.map((service, index) => (
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
    </section>
  );
};

export default EmblaCarousel;
