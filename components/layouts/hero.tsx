import { Button } from "@base-ui/react/button";
import { ArrowRight } from "lucide-react";

{
  /* Hero Content */
}
export default function Hero() {
  return (
    <main className="relative sm:min-h-[87vh] overflow-hidden">
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:pt-24">
        <div className="max-w-2xl">
          <div className="mb-6 hidden sm:flex items-center gap-3 sm:mb-8">
            <div className="h-px w-8 bg-yellow-500/50" />
            <p className="sm:mb-4 mb-1 text-label uppercase tracking-enterprise text-secondary">
              Gongabu-9, Kathmandu — Est. 2017
            </p>
          </div>

          <h2 className="mb-6 text-4xl leading-[1.1] font-serif text-4xl sm:text-5xl md:text-6xl">
            Your Future in <br />
            <span className="text-secondary">Japan</span> Starts <br />
            Right Here.
          </h2>

          <p className="mb-8 max-w-lg text-base leading-relaxed text-gray-400 sm:mb-10 sm:text-lg">
            From your first Japanese lesson to landing at Narita Airport —
            Momiji International Academy guides you every step of the way.
            Language training, SSW preparation, visas, and guaranteed job
            placement across 6 sectors.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button className="sm:px-8 sm:py-4 px-4 py-2  border-1 border-primary rounded-3xl bg-secondary text-md hover:bg-primary  text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              Book Free Consultation
            </Button>
            <Button className="sm:px-8 sm:py-4 px-4 py-2 border-1 border-primary rounded-3xl text-dark bg-tertiary text-md hover:bg-primary  hover:text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              See How It Works
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
