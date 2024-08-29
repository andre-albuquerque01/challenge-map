'use server'

import ApiRoute from '@/function/apiRoute'

export async function GetOneTrecho(id: number) {
  try {
    const response = await ApiRoute(`/trecho/${id}`, {
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
