import React from 'react'
import ContactForm from '../contactus/ContactForm'
import ContactInfro from '../contactus/ContactInfro'


const page = () => {
  return (
    <div className='flex flex-col w-full justify-center items-center '>
     <div className=' h-62 bg-linear-to-br from-slate-50 via-blue-100 to-indigo-50 flex flex-col items-center justify-center gap-2 w-full'>
      <p className='text-5xl italic font-semibold text-primary'>Contact Us</p>
      <p className='text-2xl italic'>Get in touch</p>
     </div>
    <div className='flex w-[87%] gap-10 pt-10 '>
      <ContactForm />
      <ContactInfro/>
    </div>
    </div>
  )
}

export default page
