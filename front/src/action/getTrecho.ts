'use server'

import ApiRoute from '@/function/apiRoute'

export interface TrechoInterface {
  id: number
  tipo: string
  data_referencia: string
  quilometragem_inicial: string
  quilometragem_final: string
  geo: string
  uf_id: number
  rodovia_id: number
  rodovia: {
    rodovia: string
  }
  uf: {
    uf: string
  }
}

export async function GetTrecho() {
  try {
    const response = await ApiRoute('/trecho', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
      cache: 'no-cache',
    })
    const data = await response.json()
    return data.data
  } catch (e) {
    return 'Error'
  }
}
