import { useSelectElementStore } from "@/store/store";
import Image from "next/image";

interface Device {
  src: string;
  alt: string;
  label: string;
}

const devices: Device[] = [
  { src: "/mobile-img/iphone.png", alt: "iPhone", label: "iPhone" },
  { src: "/mobile-img/samsung.png", alt: "Samsung", label: "Samsung" },
  { src: "/mobile-img/sony.png", alt: "Sony", label: "Sony" },
  { src: "/mobile-img/huawai.png", alt: "Huawei", label: "Huawei" },
  { src: "/mobile-img/microsoft.png", alt: "Microsoft", label: "Microsoft" },
  { src: "/mobile-img/lg.png", alt: "LG", label: "LG" },
  { src: "/mobile-img/xiaomi.png", alt: "Xiaomi", label: "Xiaomi" },
  { src: "/mobile-img/one-plus.png", alt: "OnePlus", label: "OnePlus" },
  { src: "/mobile-img/other.png", alt: "Other", label: "Other" },
];
export default function StepOne({ nextStep }) {
  const { addElement } = useSelectElementStore();

  const handleSelectDevice = (label) => {
    addElement(label);
    nextStep();
  };

  return (
    <div className="flex lg:justify-center">
      <ul className=" grid lg:grid-cols-5 grid-cols-2 gap-6 lg:justify-items-center">
        {devices.map((device, index) => (
          <li
            key={index}
            className="lg:h-32 lg:w-32 w-24 h-24 bg-orange-500  hover:bg-orange-700 cursor-pointer text-white px-6 py-3 rounded-xl shadow-xl flex flex-col items-center justify-between "
            onClick={() => handleSelectDevice(device.label)}
          >
            <Image
              src={device.src}
              alt={device.alt}
              width={80}
              height={80}
              className="w-20 h-20 object-contain"
            />
            <p className="mt-2 text-xs">{device.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
