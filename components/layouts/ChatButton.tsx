import React from 'react'
import { ArrowRight, MessageCircle } from "lucide-react";

const ChatButton = () => {
  return (
    <div>
       {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-3 items-end mx-6">
        <button className="flex items-center gap-2 bg-[#0084ff] text-white px-4 py-2.5 rounded-md text-sm font-bold shadow-lg hover:brightness-110 transition-all">
          <MessageCircle className="w-6 h-5  fill-current" />
          Messenger
        </button>
        <button className="flex items-center gap-2 bg-[#e91e63] text-white px-4 py-2.5 rounded-md text-sm font-bold shadow-lg hover:brightness-110 transition-all">
          <ArrowRight className="w-5 h-5" />
          Apply Now
        </button>
      </div>
    </div>
  )
}

export default ChatButton
