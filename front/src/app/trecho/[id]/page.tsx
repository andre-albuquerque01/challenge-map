import { GetOneTrecho } from '@/action/getOneTrecho'
import { GetRodovia, RodoviaInterface } from '@/action/getRodovia'
import { TrechoInterface } from '@/action/getTrecho'
import { GetUf, UfInterface } from '@/action/getUf'
import UpdateTrechoComponent from '@/components/update'

export default async function UpdateTrecho({
  params,
}: {
  params: { id: number }
}) {
  const trecho = (await GetOneTrecho(params.id)) as TrechoInterface
  const uf = (await GetUf()) as UfInterface[]
  const rodovia = (await GetRodovia()) as RodoviaInterface[]
  return (
    <UpdateTrechoComponent
      uf={uf}
      rodovia={rodovia}
      trechos={trecho}
      id={params.id}
    />
  )
}
