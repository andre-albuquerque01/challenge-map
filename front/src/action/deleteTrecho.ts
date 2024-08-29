'use server'

import ApiRoute from '@/function/apiRoute'
import { revalidatePath } from 'next/cache'

export async function DeleteTrecho(id: number) {
  try {
    const response = await ApiRoute(`/trecho/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
      },
    })
    revalidatePath('/')
    const data = await response.json()
    return data.data
  } catch (e) {
    return 'Error'
  }
}
