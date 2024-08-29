'use client'
import { RodoviaInterface } from '@/action/getRodovia'
import { TrechoInterface } from '@/action/getTrecho'
import { UfInterface } from '@/action/getUf'
import { UpdateTrecho } from '@/action/update'
import { useRouter } from 'next/navigation'
import { FormEvent, useEffect, useState } from 'react'

function FormButton({ pending }: { pending: boolean }) {
  return (
    <>
      {pending ? (
        <button
          className="bg-emerald-500 text-white px-5 py-1 rounded-md"
          disabled={pending}
        >
          +
        </button>
      ) : (
        <button className="bg-emerald-500 text-white px-5 py-1 rounded-md">
          +
        </button>
      )}
    </>
  )
}

export default function UpdateTrechoComponent({
  trechos,
  id,
  uf,
  rodovia,
}: {
  id: number
  trechos: TrechoInterface
  uf: UfInterface[]
  rodovia: RodoviaInterface[]
}) {
  useEffect(() => {
    setTrechos(trechos)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const [trecho, setTrechos] = useState({
    tipo: '',
    data_referencia: '',
    quilometragem_inicial: '',
    quilometragem_final: '',
    geo: '',
    uf_id: 0,
    rodovia_id: 0,
  })

  const [returnError, setReturnError] = useState<string>('')
  const [pending, setPending] = useState(false)
  const router = useRouter()
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setTrechos((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  async function handleSubmite(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setPending(true)
    const req = await UpdateTrecho(trecho, id)

    if (req === 'success') {
      alert('Item alterado!')
      router.back()
      setPending(false)
    } else {
      setPending(false)
      setReturnError(req)
    }
    setPending(false)
  }

  return (
    <div className="border-t">
      <form onSubmit={handleSubmite} className="flex items-center">
        {returnError && (
          <span className="text-xs text-red-600">{returnError}</span>
        )}
        <div className="flex flex-col p-4">
          <label htmlFor="uf_id">UF</label>
          <select
            name="uf_id"
            id="uf_id"
            className="border border-zinc-400 w-16 p-1 rounded-md"
            value={trecho.uf_id}
            onChange={handleChange}
            required
          >
            <option></option>
            {uf &&
              uf.map((ufs, index) => (
                <option value={ufs.id} key={index}>
                  {ufs.uf}
                </option>
              ))}
          </select>
        </div>
        <div className="flex flex-col p-4">
          <label htmlFor="rodovia_id">Rodovia</label>
          <select
            name="rodovia_id"
            id="rodovia_id"
            value={trecho.rodovia_id}
            onChange={handleChange}
            className="border border-zinc-400 w-16 p-1 rounded-md"
            required
          >
            <option></option>
            {rodovia &&
              rodovia.map((via, index) => (
                <option value={via.id} key={index}>
                  {via.rodovia}
                </option>
              ))}
          </select>
        </div>
        <div className="flex flex-col p-4">
          <label htmlFor="quilometragem_inicial">Km inicial</label>
          <input
            type="text"
            name="quilometragem_inicial"
            defaultValue={trecho.quilometragem_inicial ?? ''}
            onChange={handleChange}
            className="border border-zinc-400 p-1 rounded-md"
            required
          />
        </div>
        <div className="flex flex-col p-4">
          <label htmlFor="quilometragem_final">Km final</label>
          <input
            type="text"
            name="quilometragem_final"
            defaultValue={trecho.quilometragem_final ?? ''}
            onChange={handleChange}
            className="border border-zinc-400 p-1 rounded-md"
            required
          />
        </div>
        <div className="flex flex-col p-4">
          <label htmlFor="tipo">Tipo</label>
          <select
            name="tipo"
            id="tipo"
            value={trecho.tipo}
            onChange={handleChange}
            className="border border-zinc-400 w-16 p-1 rounded-md"
            required
          >
            <option></option>
            <option value="A">A</option>
            <option value="B">B</option>
          </select>
        </div>
        <div className="flex items-center mt-5">
          <FormButton pending={pending} />
        </div>
      </form>
    </div>
  )
}
