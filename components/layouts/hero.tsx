import { Button } from "@base-ui/react/button";
import { ArrowRight } from "lucide-react";

{/* Hero Content */ }
export default function Hero() {
  return (
    <main className="relative min-h-[87svh] overflow-hidden bg-image-hero-glow sm:min-h-[87vh]">
      {/* Background Glow */}

      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:pt-24">
        <div className="max-w-2xl">
          <div className="mb-6 flex items-center gap-3 sm:mb-8">
            <div className="h-[1px] w-8 bg-yellow-500/50" />
            <p className="mb-4 text-label uppercase tracking-enterprise text-brand-gold">
              Gongabu-9, Kathmandu — Est. 2017
            </p>
          </div>

          <h2 className="mb-6 text-4xl leading-[1.1] font-serif sm:text-5xl md:text-6xl">
            Your Future in <br />
            <span className="text-yellow-500">Japan</span> Starts <br />
            Right Here.
          </h2>

          <p className="mb-8 max-w-lg text-base leading-relaxed text-gray-400 sm:mb-10 sm:text-lg">
            From your first Japanese lesson to landing at Narita Airport —
            Momiji International Academy guides you every step of the way.
            Language training, SSW preparation, visas, and guaranteed job placement across 6 sectors.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button className="rounded-2xl bg-[#962c55] px-5 text-md font-semibold text-white hover:bg-primary">
              Book Free Consultation
            </Button>
            <Button className="rounded-2xl border-zinc-700 bg-zinc-900 px-5 py-3 text-md text-white hover:bg-zinc-600">
              See How It Works
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}