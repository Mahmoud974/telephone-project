import { modelSchema } from "@/module/type";
import { z } from "zod";

export const onePlusModels: z.infer<typeof modelSchema>[] = [
  { name: "OnePlus 9 Pro", year: 2021 },
  { name: "OnePlus 9", year: 2021 },
  { name: "OnePlus 9R", year: 2021 },
  { name: "OnePlus 8 Pro", year: 2020 },
  { name: "OnePlus 8T", year: 2020 },
  { name: "OnePlus 8", year: 2020 },
  { name: "OnePlus Nord 2", year: 2021 },
  { name: "OnePlus Nord CE 5G", year: 2021 },
  { name: "OnePlus Nord", year: 2020 },
  { name: "OnePlus 7T Pro", year: 2019 },
  { name: "OnePlus 7T", year: 2019 },
  { name: "OnePlus 7 Pro", year: 2019 },
  { name: "OnePlus 7", year: 2019 },
];
