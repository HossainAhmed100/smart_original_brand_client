import type { Metadata } from 'next'
import '@/styles/styles.scss'
import GlobalProvider from './GlobalProvider'
import ModalWishlist from '@/components/Modal/ModalWishlist'
import ModalSearch from '@/components/Modal/ModalSearch'
import ModalQuickview from '@/components/Modal/ModalQuickview'
import CountdownTimeType from '@/type/CountdownType'
import { countdownTime } from '@/store/countdownTime'
import 'sweetalert2/src/sweetalert2.scss'
import Providers from './Providers'
import ModalCart from '@/components/Modal/ModalCart'
import "./newstyle.css"

export const metadata: Metadata = {
  title: 'Smart Original Brand',
  description: 'Life Style Brand',
}

const serverTimeLeft: CountdownTimeType = countdownTime();

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
  <GlobalProvider>
    <html lang="en">
      <body>
        <Providers>
          {children}
          <ModalCart serverTimeLeft={serverTimeLeft} />
          <ModalWishlist />
          <ModalSearch />
          <ModalQuickview />
        </Providers>
      </body>
    </html>
  </GlobalProvider>
  )
}
