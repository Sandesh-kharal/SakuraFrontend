
'use client'
import { ArrowRight } from "lucide-react";
import { useRouter } from 'next/navigation';

const ChatButton = () => {
  const router = useRouter();

  return (
    <div>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-3 right-3 z-50 flex max-w-[calc(100vw-1.5rem)] flex-col items-stretch gap-2 xs:bottom-4 xs:right-4 xs:gap-2.5 sm:bottom-6 sm:right-6 sm:max-w-none sm:items-end sm:gap-3 md:bottom-8 md:right-8 lg:bottom-8 lg:right-8">
        <button className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#218c48] px-3 py-2 text-xs font-bold text-white shadow-lg transition-all duration-200 hover:brightness-110 active:scale-95 xs:px-3.5 xs:py-2.5 xs:text-sm sm:w-auto sm:justify-start sm:gap-2 sm:px-4 sm:py-2.5 md:rounded-md">
          <svg className="h-4 w-4 shrink-0 fill-current xs:h-5 xs:w-5 sm:h-5 sm:w-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.729.869 5.362 2.516 7.522L2.957 24l8.128-2.71a9.849 9.849 0 004.783 1.23h.004c5.396 0 9.747-4.363 9.747-9.798 0-2.619-.996-5.083-2.803-6.964-1.807-1.881-4.248-2.92-6.851-2.92M12.031 2C6.163 2 1.5 6.659 1.5 12.529c0 2.19.659 4.304 1.91 6.095L1.07 23.657l6.305-2.087c1.693.947 3.652 1.446 5.656 1.446 5.868 0 10.531-4.659 10.531-10.529S17.899 2 12.031 2"/>
          </svg>
          <span className="sm:inline">WhatsApp</span>
        </button>
        <button onClick={() => router.push('/contact-us')} className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#e91e63] px-3 py-2 text-xs font-bold text-white shadow-lg transition-all duration-200 hover:brightness-110 active:scale-95 xs:px-3.5 xs:py-2.5 xs:text-sm sm:w-auto sm:justify-start sm:gap-2 sm:px-4 sm:py-2.5 md:rounded-md">
          <ArrowRight className="h-4 w-4 fshrink-0 xs:h-5 xs:w-5 sm:h-5 sm:w-5" />
          <span className="sm:inline">Apply Now</span>
        </button>
      </div>
    </div>
  )
}

export default ChatButton
