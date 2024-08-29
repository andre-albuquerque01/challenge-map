'use server'

import ApiRoute from '@/function/apiRoute'

export interface RodoviaInterface {
  id: number
  rodovia: string
}

export async function GetRodovia() {
  try {
    const response = await ApiRoute('/rodovia', {
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
