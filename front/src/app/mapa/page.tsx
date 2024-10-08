import dynamic from 'next/dynamic'
import { useMemo } from 'react'
export default function Page() {
  const Map = useMemo(
    () =>
      dynamic(() => import('@/components/map'), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    [],
  )
  return (
    <>
      <div className="bg-white-700 mx-auto my-5 w-[98%] h-[480px]">
        <Map posix={[-41.137219, 93.181159]} />
      </div>
    </>
  )
}
