import { defineField, defineType } from "sanity";

export const bannerType = defineType({
  name: "banner",
  title: "Banner",
  type: "document",
  fields: [
    defineField({
      name: "h1Text",
      title: "Titre 1",
      type: "string",
    }),
    defineField({
      name: "h1Text2",
      title: "Titre 2",
      type: "string",
    }),
    defineField({
      name: "h1Text3",
      title:
        "Titre 3 (Pour avoir une partie du texte en couleur il faudra l'entourer de balises <span className='text-primary'>Mettre le text ici</span>)",
      type: "string",
    }),
    defineField({
      name: "buttonOneText",
      title: "Bouton 1",
      type: "string",
    }),
    defineField({
      name: "buttonOneLink",
      title: "Lien du bouton 1",
      type: "url",
    }),
    defineField({
      name: "buttonTwoText",
      title: "Button 2",
      type: "string",
    }),
    defineField({
      name: "buttonTwoLink",
      title: "Lien du bouton 2",
      type: "url",
    }),
  ],
});
