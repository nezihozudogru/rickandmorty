import { useRouter } from 'next/router'

export default function Layout(){
    const router = useRouter()

    return(
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <button className="btn btn-ghost normal-case text-xl" onClick={() => router.push('/')}>Ana Sayfa</button>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><button onClick={() => router.push('/src/mainpage/character')}>Karakter</button></li>
      <li><button onClick={() => router.push('/src/mainpage/episode')}>Bölüm</button></li>
      <li><button onClick={() => router.push('/src/mainpage/location')}>Lokasyon</button></li>
    </ul>
  </div>
</div>
)
}