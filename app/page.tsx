import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24 min-h-screen bg-beige">
      <div className="mb-8">
        <Image
          src="/harvest_helper-cropped.svg"
          alt="Image of Harvest Helper Logo"
          width={600}
          height={750}
          priority
        />
      </div>
      <div className="">
        <Button className="bg-[#ADC178] hover:bg-[#ADC178]" variant="outline">
          Get Started
        </Button>
      </div>
    </main>
  );
}
