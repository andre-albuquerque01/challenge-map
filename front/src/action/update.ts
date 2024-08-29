'use server'

import ApiRoute from '@/function/apiRoute'
import { revalidatePath } from 'next/cache'

export async function UpdateTrecho(reqBody: object, id: number) {
  try {
    const response = await ApiRoute(`/trecho/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqBody),
    })

    revalidatePath('/')
    if (!response.ok) return 'Houve erro'
    return 'success'
  } catch (error) {
    return 'Houve erro'
  }
}
