"use client";

import React, { useState, useEffect } from "react";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import { BackgroundGradient } from "@/components/ui/background-gradiant";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button"; // For pagination buttons
import { client } from "@/sanity/lib/client";
import { z } from "zod";

// Définir le schéma Zod pour la validation des données Sanity, incluant les shorts
const videoSectionSchema = z.object({
  h2Title: z.string().optional(),
  videos: z.array(z.string().url()), // Tableau d'URLs pour les vidéos horizontales
  shorts: z.array(z.string().url()), // Tableau d'URLs pour les vidéos verticales
});

// Inférer le type à partir du schéma Zod
type VideoSection = z.infer<typeof videoSectionSchema>;

const ITEMS_PER_PAGE = 12;

function Creations() {
  const [videos, setVideos] = useState<string[]>([]);
  const [shorts, setShorts] = useState<string[]>([]);
  const [title, setTitle] = useState<string>("Nos Créations");
  const [error, setError] = useState<string | null>(null);

  // States for pagination
  const [currentVideoPage, setCurrentVideoPage] = useState(1);
  const [currentShortPage, setCurrentShortPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "videoSection"]{
        h2Title,
        videos,
        shorts
      }`;

      try {
        // Récupérer les données de Sanity
        const data = await client.fetch(query);

        // Valider les données avec Zod
        const parsedData = videoSectionSchema.safeParse(data[0]); // Valide le premier élément de la réponse

        if (parsedData.success) {
          setTitle(parsedData.data.h2Title || "Nos Créations");
          setVideos(parsedData.data.videos);
          setShorts(parsedData.data.shorts);
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

  // Pagination logic
  const paginate = (array: string[], page: number) => {
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    return array.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  // Calculate total pages
  const totalVideoPages = Math.ceil(videos.length / ITEMS_PER_PAGE);
  const totalShortPages = Math.ceil(shorts.length / ITEMS_PER_PAGE);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="flex flex-col items-center w-full rounded-[7px] border border-[#5B4B31] bg-gradient-to-b from-[#1D1D1D] via-[#505050] to-blue-[#1D1D1D] max-w-[90%] md:max-w-[70%] mx-auto p-4 md:my-10">
      <div className="flex flex-col justify-center items-center gap-1 p-4">
        <BackgroundGradient>
          <h2 className="text-xl text-center uppercase font-bold md:text-4xl">
            {title}
          </h2>
        </BackgroundGradient>
        <div className="h-[2px] w-full bg-primary"></div>
      </div>

      {/* Tabs pour les vidéos horizontales et verticales */}
      <Tabs defaultValue="horizontal" className="w-full">
        <TabsList className="flex justify-center">
          <TabsTrigger value="horizontal">Format Horizontal</TabsTrigger>
          <TabsTrigger value="vertical">Format Vertical</TabsTrigger>
        </TabsList>

        {/* Contenu pour les vidéos horizontales avec pagination */}
        <TabsContent value="horizontal">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 p-4">
            {paginate(videos, currentVideoPage).map((url, index) => {
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
          {/* Pagination controls for horizontal videos */}
          {totalVideoPages > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              <Button
                disabled={currentVideoPage === 1}
                onClick={() => setCurrentVideoPage((prev) => prev - 1)}
              >
                Précédent
              </Button>
              <Button
                disabled={currentVideoPage === totalVideoPages}
                onClick={() => setCurrentVideoPage((prev) => prev + 1)}
              >
                Suivant
              </Button>
            </div>
          )}
        </TabsContent>

        {/* Contenu pour les vidéos verticales (shorts) avec pagination */}
        <TabsContent value="vertical">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 p-4">
            {paginate(shorts, currentShortPage).map((url, index) => {
              const id = url.split("/embed/")[1];
              return (
                <div key={index} className="relative">
                  <HeroVideoDialog
                    className="block "
                    animationStyle="from-center"
                    videoSrc={url}
                    thumbnailSrc={`https://i.ytimg.com/vi/${id}/sddefault.jpg`}
                    thumbnailAlt={`YouTube short thumbnail ${index + 1}`}
                  />
                </div>
              );
            })}
          </div>
          {/* Pagination controls for vertical videos (shorts) */}
          {totalShortPages > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              <Button
                disabled={currentShortPage === 1}
                onClick={() => setCurrentShortPage((prev) => prev - 1)}
              >
                Précédent
              </Button>
              <Button
                disabled={currentShortPage === totalShortPages}
                onClick={() => setCurrentShortPage((prev) => prev + 1)}
              >
                Suivant
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </section>
  );
}

export default Creations;
