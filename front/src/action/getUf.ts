'use server'

import ApiRoute from '@/function/apiRoute'

export interface UfInterface {
  id: number
  uf: string
}

export async function GetUf() {
  try {
    const response = await ApiRoute('/uf', {
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
