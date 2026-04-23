import { Button } from "@base-ui/react/button"
import { ArrowRight, MessageCircle } from "lucide-react";


{/* Hero Content */}
 export default function Hero() {
    return (
      <main className="relative max-w-7xl mx-auto px-8 pt-20 pb-32 grid lg:grid-cols-2 items-center">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-900/20 blur-[120px] rounded-full -z-10" />

        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-[1px] w-8 bg-yellow-500/50" />
            <span className="text-xs uppercase tracking-[0.2em] text-yellow-500/80 font-medium">
              Gongabu-9, Kathmandu — Est. 2017
            </span>
          </div>

          <h2 className="text-6xl md:text-7xl font-serif mb-6 leading-[1.1]">
            Your Future in <br />
            <span className="text-yellow-500 italic">Japan</span> Starts <br />
            Right Here.
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">
            From your first Japanese lesson to landing at Narita Airport — 
            Momiji International Academy guides you every step of the way. 
            Language training, SSW preparation, visas, and guaranteed job placement across 6 sectors.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button className="bg-[#e91e63] hover:bg-[#d81b60] text-white px-5 py-  text-md font-semibold group rounded-2xl">
              Book Free Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="border-zinc-700 bg-zinc-600 hover:bg-zinc-800 rounded-2xl text-white px-5 py-3 text-md">
              See How It Works
            </Button>
          </div>
        </div>
      </main>
    );
 }