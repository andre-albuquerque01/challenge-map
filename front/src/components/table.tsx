'use client'
import { TrechoInterface } from '@/action/getTrecho'
import dynamic from 'next/dynamic'
import React, { useMemo, useState } from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import { Remove } from './delete'
import { GetOneTrecho } from '@/action/getOneTrecho'
import Link from 'next/link'
import { BiPencil } from 'react-icons/bi'

export const TableList = ({ data }: { data: TrechoInterface[] }) => {
  const MapsGeoJSON = useMemo(
    () =>
      dynamic(() => import('@/components/map'), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    [],
  )

  const [trechos, setTrechos] = useState<TrechoInterface>()
  const [geo, setGeo] = useState<TrechoInterface>()
  const handle = async (
    id: number,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault()
    const trechoOne = (await GetOneTrecho(id)) as TrechoInterface
    setTrechos(trechoOne)
    setGeo(JSON.parse(trechoOne.geo))
  }

  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                UF
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                BR
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Km Inicial
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Km Final
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Lote
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Situação
              </th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data &&
              data.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item.uf.uf}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.rodovia.rodovia}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.quilometragem_inicial}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.quilometragem_final}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    10
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Planejamento
                  </td>
                  <td className="flex items-center px-6 py-4 whitespace-nowrap text-right text-sm font-medium ">
                    <button
                      onClick={(e) => handle(item.id, e)}
                      className="text-white bg-blue-600 hover:text-blue-700 w-40 py-2 text-center mx-3 rounded-md"
                    >
                      <IoLocationOutline className="w-5 h-5 mx-auto" />
                    </button>
                    <Link
                      href={`/trecho/${item.id}`}
                      className="text-white bg-green-600 hover:text-green-700 w-40 py-2 text-center mx-3 rounded-md"
                    >
                      <BiPencil className="w-5 h-5 mx-auto" />
                    </Link>
                    <Remove id={item.id} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {trechos && (
        <div className="bg-white-700 mx-auto my-5 w-[98%] h-[480px]">
          <MapsGeoJSON geoJsonData={geo} />
        </div>
      )}
    </>
  )
}
