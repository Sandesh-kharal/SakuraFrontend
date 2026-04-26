import React from 'react'
import { ArrowRight, MessageCircle } from "lucide-react";

const ChatButton = () => {
  return (
    <div>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-4 right-4 z-50 flex max-w-[calc(100vw-2rem)] flex-col items-stretch gap-3 sm:bottom-6 sm:right-6 sm:max-w-none sm:items-end lg:bottom-8 lg:right-8">
        <button className="flex w-full items-center gap-2 rounded-md bg-[#0084ff] px-4 py-2.5 text-sm font-bold text-white shadow-lg transition-all hover:brightness-110 sm:w-auto">
          <MessageCircle className="h-5 w-6 fill-current" />
          Messenger
        </button>
        <button className="flex w-full items-center gap-2 rounded-md bg-[#e91e63] px-4 py-2.5 text-sm font-bold text-white shadow-lg transition-all hover:brightness-110 sm:w-auto">
          <ArrowRight className="h-5 w-5" />
          Apply Now
        </button>
      </div>
    </div>
  )
}

export default ChatButton
