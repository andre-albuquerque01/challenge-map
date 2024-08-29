'use client'
import { DeleteTrecho } from '@/action/deleteTrecho'
import { BiTrash } from 'react-icons/bi'

export const Remove = ({ id }: { id: number }) => {
  const handleRemove = async (
    id: number,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault()
    await DeleteTrecho(id)
  }
  return (
    <button
      onClick={(e) => handleRemove(id, e)}
      className="text-white hover:text-red-700 w-40 py-2 bg-red-500 rounded-md"
    >
      <BiTrash className="w-5 h-5 mx-auto" />
    </button>
  )
}
