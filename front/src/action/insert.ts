'use server'

import ApiError from '@/function/apiErro'
import ApiRoute from '@/function/apiRoute'
import { revalidatePath } from 'next/cache'

export async function Insert(
  state: { ok: boolean; error: string; data: null },
  request: FormData,
) {
  const date = new Date()
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  const dataReferencia = `${year}/${month}/${day}`
  const tipo = request.get('tipo') as string | null
  const quilometragemInicial = request.get('quilometragem_inicial') as
    | string
    | null
  const quilometragemFinal = request.get('quilometragem_final') as string | null
  const uf = request.get('uf_id')
  const rodovia = request.get('rodovia_id')
  request.set('data_referencia', dataReferencia)

  try {
    if (
      !tipo ||
      !dataReferencia ||
      !quilometragemInicial ||
      !quilometragemFinal ||
      !uf ||
      !rodovia
    ) {
      throw new Error('Preenchas os dados!')
    }

    const response1 = await fetch(
      `https://servicos.dnit.gov.br/sgplan/apigeo/rotas/espacializarlinha?br=${rodovia}&tipo=${tipo}&uf=${uf}&cd_tipo=null&data=${dataReferencia}&kmi=${quilometragemInicial}&kmf=${quilometragemFinal} 
`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      },
    )
    const data = await response1.text()

    request.set('geo', JSON.stringify(data))

    await ApiRoute('/trecho', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: request,
    })

    revalidatePath('/')

    return { ok: true, error: '', data: null }
  } catch (error) {
    return ApiError(error)
  }
}
