import { GetRodovia } from '@/action/getRodovia'
import { GetTrecho, TrechoInterface } from '@/action/getTrecho'
import { GetUf } from '@/action/getUf'
import Form from '@/components/form'
import { TableList } from '@/components/table'

export default async function Home() {
  const uf = await GetUf()
  const rodovia = await GetRodovia()
  const trechosAll = (await GetTrecho()) as TrechoInterface[]
  return (
    <div className="p-4">
      <h1>Trechos</h1>
      <Form uf={uf} rodovia={rodovia} />
      <TableList data={trechosAll} />
    </div>
  )
}
