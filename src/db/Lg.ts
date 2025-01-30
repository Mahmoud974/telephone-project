import { modelSchema } from "@/module/type";
import { z } from "zod";
export const lgModels: z.infer<typeof modelSchema>[] = [
  { name: "LG Velvet", year: 2020 },
  { name: "LG V60 ThinQ", year: 2020 },
  { name: "LG V50 ThinQ", year: 2019 },
  { name: "LG G8X ThinQ", year: 2019 },
  { name: "LG G8S ThinQ", year: 2019 },
  { name: "LG K61", year: 2020 },
  { name: "LG K51S", year: 2020 },
  { name: "LG K41S", year: 2020 },
  { name: "LG K40S", year: 2020 },
  { name: "LG Stylo 6", year: 2020 },
  { name: "LG Stylo 5", year: 2019 },
  { name: "LG Q70", year: 2019 },
  { name: "LG Q60", year: 2019 },
  { name: "LG V40 ThinQ", year: 2019 },
  { name: "LG K40", year: 2019 },
];
