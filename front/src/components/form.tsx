'use client'
import { RodoviaInterface } from '@/action/getRodovia'
import { UfInterface } from '@/action/getUf'
import { Insert } from '@/action/insert'
import { useFormState, useFormStatus } from 'react-dom'

function FormButton() {
  const { pending } = useFormStatus()

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

export default function Form({
  uf,
  rodovia,
}: {
  uf: UfInterface[]
  rodovia: RodoviaInterface[]
}) {
  const [state, action] = useFormState(Insert, {
    ok: false,
    error: '',
    data: null,
  })

  return (
    <div className="border-t">
      <form action={action} className="flex items-center">
        <div className="flex flex-col p-4">
          <label htmlFor="uf_id">UF</label>
          <select
            name="uf_id"
            id="uf_id"
            className="border border-zinc-400 w-16 p-1 rounded-md"
            required
          >
            <option></option>
            {uf &&
              uf.map((ufs, index) => (
                <option defaultValue={ufs.id} key={index}>
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
            className="border border-zinc-400 w-16 p-1 rounded-md"
            required
          >
            <option></option>
            {rodovia &&
              rodovia.map((via, index) => (
                <option defaultValue={via.id} key={index}>
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
            className="border border-zinc-400 p-1 rounded-md"
            required
          />
        </div>
        <div className="flex flex-col p-4">
          <label htmlFor="quilometragem_final">Km final</label>
          <input
            type="text"
            name="quilometragem_final"
            className="border border-zinc-400 p-1 rounded-md"
            required
          />
        </div>
        <div className="flex flex-col p-4">
          <label htmlFor="tipo">Tipo</label>
          <select
            name="tipo"
            id="tipo"
            className="border border-zinc-400 w-16 p-1 rounded-md"
            required
          >
            <option></option>
            <option defaultValue="A">A</option>
            <option defaultValue="B">B</option>
          </select>
        </div>
        <div className="flex items-center mt-5">
          <FormButton />
        </div>
        {state.error && (
          <p className="text-green-500">Houve erro na hora de registrar!</p>
        )}
      </form>
    </div>
  )
}
