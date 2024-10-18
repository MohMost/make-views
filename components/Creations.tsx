"use client";
import React, { useEffect, useState } from "react";
import HeroVideoDialog from "./ui/hero-video-dialog";
import { Button } from "./ui/button";
import { BackgroundGradient } from "./ui/background-gradiant";
import { z } from "zod";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
const videoSectionSchema = z.object({
  h2Title: z.string().optional(),
  selectedVideos: z.array(z.string().url()),
});

function Creations() {
  const [selectedVideos, setSelectedVideos] = useState<string[]>([]);
  const [title, setTitle] = useState<string>("Nos Créations");
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "videoSection"]{
        h2Title,
        selectedVideos,
      }`;

      try {
        // Récupérer les données de Sanity
        const data = await client.fetch(query);

        // Valider les données avec Zod
        const parsedData = videoSectionSchema.safeParse(data[0]); // Valide le premier élément de la réponse

        if (parsedData.success) {
          setTitle(parsedData.data.h2Title || "Nos Créations");
          setSelectedVideos(parsedData.data.selectedVideos);
        } else {
          // En cas d'erreur de validation
          setError("Erreur de validation des données");
          console.error(parsedData.error);
        }
      } catch (err) {
        setError("Erreur lors de la récupération des données");
        console.error(err);
      }
    };

    fetchData();
  }, []);
  return (
    <section
      id="creations"
      className="flex flex-col items-center w-full rounded-[7px] border border-[#5B4B31] bg-gradient-to-b from-[#1D1D1D] via-[#505050] to-blue-[#1D1D1D] max-w-[90%] md:max-w-[70%] mx-auto md:p-4 md:mb-10"
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
        {selectedVideos.map((url, index) => {
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
      <BackgroundGradient>
        <Link href="/creations">
          <Button className="w-48 md:text-xl" variant={"link"} size={"default"}>
            voir plus
          </Button>
        </Link>
      </BackgroundGradient>
    </section>
  );
}

export default Creations;
