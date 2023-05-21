import Image from 'next/image'
import Main from './main'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Main />
      </div>
    </main>
  )
}
