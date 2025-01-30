import { modelSchema } from "@/module/type";
import { z } from "zod";

export const phoneModels: z.infer<typeof modelSchema>[] = [
  { name: "Nokia 6.1", year: 2018 },
  { name: "Nokia 3.1", year: 2018 },
  { name: "Nokia Lumia 520", year: 2013 },
  { name: "Nokia Lumia 1320", year: 2014 },
  { name: "Google Pixel 3A", year: 2019 },
  { name: "Google Pixel 3", year: 2018 },
  { name: "Asus Zenfone 4 Pro", year: 2017 },
  { name: "Asus Zenfone 4 max", year: 2017 },
  { name: "Asus Zenfone 4 Selfie", year: 2017 },
  { name: "Asus Zenfone 3 max", year: 2016 },
  { name: "Asus Zenfone 3", year: 2016 },
  { name: "Asus Zenfone Max Pro M2", year: 2018 },
  { name: "Asus Zenfone Max Pro M1", year: 2018 },
  { name: "Wiko Lenny 3", year: 2017 },
  { name: "Wiko View 3 Lite", year: 2019 },
  { name: "Wiko View Prime", year: 2017 },
  { name: "Wiko U Feel Prime", year: 2017 },
  { name: "Wiko Upulse Lite", year: 2017 },
  { name: "Wiko U Feel", year: 2016 },
  { name: "Wiko Tommy 3", year: 2018 },
  { name: "Wiko Tommy", year: 2016 },
];
