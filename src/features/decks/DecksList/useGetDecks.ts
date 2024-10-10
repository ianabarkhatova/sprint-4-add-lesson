import { useAppDispatch, useAppSelector } from '../../../app/store'
import { selectDecks } from '../decks-selectors'
import { useEffect } from 'react'
import { getDecksTC } from '../decks-thunks'

export const useGetDecks = () => {
  const dispatch = useAppDispatch()
  // receive decks from state
  const decks = useAppSelector(selectDecks)

  // send decks to state
  useEffect(() => {
    dispatch(getDecksTC())
  }, [dispatch])

  return {
    decks,
  }
}
