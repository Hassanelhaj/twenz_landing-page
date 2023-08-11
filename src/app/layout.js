
import './globals.css'

import NavBar from '../../Components/utils/NavBar'
import Footer from '../../Components/utils/Footer'
// import { ThemeProvider } from 'next-themes'



export const metadata = {
  title: 'search jobs in sudan',
  description:'developed by hassan ',
}

export default function RootLayout({ children }) {
  return (
    
    <html dir='rtl' lang="ar" className='dark'>

  
<head>
  
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>

</head>


      <body >

    <NavBar/>
  
      <main>
      {children}
      </main>
      <Footer/>
     
      </body>
   

    </html>
  )
}
