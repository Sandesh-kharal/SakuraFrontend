import { Button } from "@base-ui/react/button"
import { ArrowRight, MessageCircle } from "lucide-react";


{/* Hero Content */ }
export default function Hero() {
  return (
    <main className="relative h-[87vh] bg-image-hero-glow overflow-hidden">
      {/* Background Glow */}

      <div className="container mx-auto mt-20 px-13">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-[1px] w-8 bg-yellow-500/50" />
            <p className="text-label tracking-enterprise text-brand-gold uppercase  mb-4">Gongabu-9, Kathmandu — Est. 2017
            </p>
          </div>

          <h2 className="text-5xl md:text-6xl  font-serif  mb-6 leading-[1.1] ">
            Your Future in <br />
            <span className="text-yellow-500  ">Japan</span> Starts <br />
            Right Here.
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">
            From your first Japanese lesson to landing at Narita Airport —
            Momiji International Academy guides you every step of the way.
            Language training, SSW preparation, visas, and guaranteed job placement across 6 sectors.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button className="bg-[#962c55] hover:bg-primary text-white px-5   text-md font-semibold group rounded-2xl">
              Book Free Consultation
            
            </Button>
            <Button  className="border-zinc-700 bg-zinc-900 hover:bg-zinc-600 rounded-2xl text-white px-5 py-3 text-md">
              See How It Works
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}