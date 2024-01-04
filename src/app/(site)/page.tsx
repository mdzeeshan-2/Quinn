import TitleSection from '@/components/landing-page/title-section'
import React from 'react'

const Homepage = () => {
  return (
    <section>
        <div className='overflow-hidden px-4 sm:px-6 mt-10 sm:flex sm:flex-col gap-4 md:justify-center md:items-center'>
    <TitleSection pill='Your Workspace, Perfectws' title='All-in-one Collaboration and Productivity Platform'></TitleSection>
        </div>
    </section>
  )
}

export default Homepage