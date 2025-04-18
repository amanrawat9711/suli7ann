import { useEffect, useState } from 'react'
import mymelody from './assets/mymelody.jpg' // make sure you have this in your assets folder

function App() {
  const [relDate, setRelDate] = useState(0)

  useEffect(() => {
    const startDate = new Date('2024-09-19')
    const today = new Date()
    const diff = today - startDate
    const diffdays = Math.floor(diff / (1000 * 60 * 60 * 24))
    setRelDate(diffdays)
  }, [])

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-10 text-white"
      style={{ backgroundImage: `url(${mymelody})` }}
    >
      <div className="bg-black opacity-55 p-6 md:p-10 rounded-2xl max-w-2xl text-center shadow-lg">
        <h1 className="text-xl md:text-3xl font-bold mb-4">Happy 7th Anniversary 💌</h1>
        <p className="text-sm md:text-lg leading-relaxed">
          Ang nwngkhou mwjang mwnw baby. You are my everything. Every day with you is so perfect.
          We have spent <span className="font-semibold text-pink-400">{relDate}</span> beautiful days together — that means I have
          <b> laughed</b> every single day, because I'm with you.
          <br /><br />
          Thank you for being with me, and I am truly sorry for any minor or major inconvenience I may have caused.
          I am so lucky to have you.
          Being with you has made me realize that I cant live without you.
          I cant stop thinking about you — not even for a <b>minute</b>.
          <br /><br />
          When I close my eyes, I see your face and that smile (especially your funny smile, when you dont show your teeth and just raise your lips).
          I love your smile — please keep <b>smiling</b> for me.
          <br /><br />
          If you are happy, then I am happy. I dont want anything else in this world — <b>just you</b>. 💖
        </p>
      </div>
    </div>
  )
}

export default App
