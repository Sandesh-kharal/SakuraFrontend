import React from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

/**
 * SENIOR TIP: Move static content out of the component to prevent
 * re-renders and keep the TSX clean.
 */
const SERVICES_CONTENT = [
  {
    id: 'visa',
    title: 'Student Visa Processing',
    description:
      'Navigating the Japanese immigration system requires precision and expertise. At Momiji, we provide end-to-end guidance for your Student Visa. From the initial collection of academic transcripts to the complex filing for your Certificate of Eligibility (COE), our team ensures every document meets the strict standards of the Japanese Ministry of Justice.',
  },
  {
    id: 'language',
    title: 'Japanese Language Courses',
    description:
      'Language is the key to integration. Our courses are designed not just to pass exams, but to enable real-world communication. Whether you are aiming for high-level academic JLPT certification or functional JFT proficiency for work, our curriculum covers kanji, grammar, and listening through immersive techniques.',
  },
  {
    id: 'placement',
    title: 'Job Training & Placement (SSW)',
    description:
      'As a leading institute for Specified Skilled Worker (SSW) programs, we bridge the gap between skilled Nepali talent and the Japanese labor market. This service encompasses technical skill training for specific sectors such as Nursing, Agriculture, and Hospitality. Our placement network ensures that qualified students are matched with verified employers in Japan.',
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white pt-16 pb-24 font-sans text-slate-900">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-[1fr_400px]">
        <div className="space-y-14">
          <header className="space-y-12">
            <h1 className="inline-block border-b-4 border-[#e91e63] pb-4 text-4xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
              Professional Services to Japan
            </h1>

            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[2fr_3fr]">
              <div className="group relative flex aspect-3/4 items-center justify-center">
                <div className="absolute inset-0  scale-110 rounded-full  bg-[#e91e63]/20 blur-3xl transition-all duration-500 group-hover:scale-125" />
                <div className="relative border-2 border-zinc-300 shadow-2xl rounded-2xl z-10 h-full w-full  ">
                  <Image
                    src="/Girl.png"
                    alt="sakura Academy Instructor holding textbooks"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              <section className="relative overflow-hidden rounded-4xl border border-slate-100 bg-slate-50 p-10 shadow-xl md:p-14">
                <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-[#e91e63]/10" />
                <p className="relative z-10 max-w-lg text-xl leading-relaxed italic text-slate-700">
                  Established in 2017,{' '}
                  <span className="font-semibold text-slate-950">
                    Sakura Care Abroad
                  </span>{' '}
                  provides the most modern training for language and placement.
                </p>
                <div className="relative z-10 mt-6 h-2 w-20 rounded-full bg-[#e91e63]" />
              </section>
            </div>
          </header>

          <section className="space-y-14">
            {SERVICES_CONTENT.map((service) => (
              <article key={service.id} className="group">
                <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-[#e91e63]">
                  <span className="hidden h-8 w-2 rounded-full bg-[#e91e63] transition-all group-hover:block" />
                  {service.title}
                </h2>
                <p className="max-w-3xl text-[15px] leading-relaxed text-slate-600">
                  {service.description}
                </p>
              </article>
            ))}
          </section>
        </div>

        <aside className="relative lg:block">
          <div className="sticky top-24 rounded-4xl border border-white/5 bg-[#0b060c] p-10 shadow-2xl">
            <div className="mb-8">
              <h3 className="mb-2 text-3xl font-bold text-white">Send Message</h3>
              <p className="text-sm text-zinc-500">
                Interested to join? Fill in the details below.
              </p>
            </div>

            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="E.g. John"
                    className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white outline-none transition-all placeholder:text-zinc-500 focus:border-[#e91e63]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="E.g. Smith"
                    className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white outline-none transition-all placeholder:text-zinc-500 focus:border-[#e91e63]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white outline-none transition-all placeholder:text-zinc-500 focus:border-[#e91e63]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Phone (Nepal)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-zinc-600">
                    +977
                  </span>
                  <input
                    type="tel"
                    placeholder="98XXXXXXXX"
                    className="w-full rounded-xl border border-white/10 bg-white/5 p-3 pl-16 text-white outline-none transition-all placeholder:text-zinc-500 focus:border-[#e91e63]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Service of Interest
                </label>
                <div className="relative">
                  <select className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 p-3 text-white outline-none transition-all focus:border-[#e91e63]">
                    <option className="bg-[#0b060c]">Select a topic</option>
                    <option className="bg-[#0b060c]">Student Visa</option>
                    <option className="bg-[#0b060c]">Language Course</option>
                    <option className="bg-[#0b060c]">Job Training</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#e91e63] py-4 text-base font-bold text-white shadow-lg shadow-pink-900/20 transition-all hover:bg-[#d81b60] active:scale-95"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </aside>
      </div>
    </main>
  );
}