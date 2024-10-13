import { type SchemaTypeDefinition } from "sanity";
import { bannerType } from "./bannerType";
import { creationsType } from "./creationsType";
import { whyUsType } from "./whyUsType";
import { servicesType } from "./servicesType";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [bannerType, creationsType, whyUsType, servicesType],
};
