import { modelSchema } from "@/module/type";
import { z } from "zod";

export const microsoftModels: z.infer<typeof modelSchema>[] = [
  { name: "Microsoft Surface Duo 2", year: 2021 },
  { name: "Microsoft Surface Duo", year: 2020 },
  { name: "Microsoft Surface Laptop 4", year: 2021 },
  { name: "Microsoft Surface Pro 8", year: 2021 },
  { name: "Microsoft Surface Pro X", year: 2019 },
  { name: "Microsoft Surface Laptop 3", year: 2019 },
  { name: "Microsoft Surface Pro 7", year: 2019 },
  { name: "Microsoft Surface Go 2", year: 2020 },
  { name: "Microsoft Surface Go", year: 2018 },
];
