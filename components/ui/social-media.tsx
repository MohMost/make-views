"use client";
import React, { useEffect, useState } from "react";

import { client } from "@/sanity/lib/client";
import Image from "next/image";
interface SocialMedia {
  platform: string;
  link: string;
  icon: {
    asset: {
      url: string;
    };
  };
}

async function getSocialMediaList(): Promise<SocialMedia[]> {
  const query = `*[_type == "socialMedia"] {
    platform,
    link,
    icon {
      asset-> {
        url
      }
    }
  }`;

  // Assurez-vous d'utiliser le client pour exécuter la requête
  const socialMediaList = await client.fetch(query);
  return socialMediaList;
}

const SocialMedia: React.FC = () => {
  const [socialLinks, setSocialLinks] = useState<SocialMedia[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSocialMediaList();
      setSocialLinks(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <ul className="flex gap-4">
        {socialLinks.map((item) => (
          <li key={item.platform}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <Image
                width={24}
                height={24}
                className="h-6 w-6"
                src={item.icon.asset.url}
                alt={item.platform}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMedia;
