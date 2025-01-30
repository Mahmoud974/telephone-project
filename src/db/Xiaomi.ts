import { modelSchema } from "@/module/type";
import { z } from "zod";

export const xiaomiModels: z.infer<typeof modelSchema>[] = [
  { name: "Redmi 9A", year: 2020 },
  { name: "Redmi 9", year: 2020 },
  { name: "Redmi 8A", year: 2019 },
  { name: "Redmi 8", year: 2019 },
  { name: "Redmi 7A", year: 2019 },
  { name: "Redmi 7", year: 2019 },
  { name: "Redmi 6A", year: 2018 },
  { name: "Redmi 6", year: 2018 },
  { name: "Redmi 5A", year: 2017 },
  { name: "Redmi 5 Plus", year: 2017 },
  { name: "Redmi 5", year: 2017 },
  { name: "Redmi S2", year: 2018 },
  { name: "Redmi Go", year: 2019 },
  { name: "Redmi Note 9 Pro", year: 2020 },
  { name: "Redmi Note 9S", year: 2020 },
  { name: "Redmi Note 9", year: 2020 },
  { name: "Redmi Note 8 Pro", year: 2019 },
  { name: "Redmi Note 8T", year: 2019 },
  { name: "Redmi Note 8", year: 2019 },
  { name: "Redmi Note 7", year: 2019 },
  { name: "Redmi Note 5", year: 2018 },
  { name: "Redmi Note 5A", year: 2017 },
  { name: "Redmi Note 4", year: 2017 },
  { name: "Redmi Note 4X", year: 2017 },
  { name: "Mi Note 10 Pro", year: 2019 },
  { name: "Mi Note 10 Lite", year: 2020 },
  { name: "Mi Note 10", year: 2019 },
  { name: "Mi 10 Pro", year: 2020 },
  { name: "Mi 10 Lite", year: 2020 },
  { name: "Mi 10", year: 2020 },
  { name: "Mi 9T Pro", year: 2019 },
  { name: "Mi 9T", year: 2019 },
  { name: "Mi 9 Lite", year: 2019 },
  { name: "Mi 9 SE", year: 2019 },
  { name: "Mi 9", year: 2019 },
  { name: "Mi 8 Lite", year: 2018 },
  { name: "Mi 8", year: 2018 },
  { name: "Mi Max 3", year: 2018 },
  { name: "Mi Max 2", year: 2017 },
  { name: "Mi Mix 3", year: 2018 },
  { name: "Mi Mix 2S", year: 2018 },
  { name: "Pocophone F1", year: 2018 },
  { name: "Mi A3", year: 2019 },
  { name: "Mi A2", year: 2018 },
  { name: "Mi A2 Lite", year: 2018 },
  { name: "Mi A1", year: 2017 },
];
