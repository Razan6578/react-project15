import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import CategoryCard from './features/mainPage/components/CategoryCard'
import BlogCard from './features/mainPage/components/BlogCard'
import PromoBlock from './features/mainPage/components/PromoBlock'
import BasePageLayout from './shared/layouts/BasePageLayout'


/*
<CategoryCard id={0} name={'FFFFF'} image={'https://placehold.net/400x400.png'} count={2} />
        <BlogCard id={0} title={'FFFFF'} image={'https://placehold.net/400x400.png'} text={'FFFFF'} />
        <PromoBlock />
*/

function App() {
  

  return (
    <>
      <BasePageLayout>
        <CategoryCard id={0} name={'FFFFF'} image={'https://placehold.net/400x400.png'} count={2} />
        <BlogCard id={0} title={'FFFFF'} image={'https://placehold.net/400x400.png'} text={'FFFFF'} />
        <PromoBlock />
      </BasePageLayout>
    </>
  )
}

export default App
