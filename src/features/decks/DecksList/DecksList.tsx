import s from './DecksList.module.css'
import { DeckItem } from './DeckItem/DeckItem'
import { useGetDecks } from './useGetDecks'

export const DecksList = () => {
  const { decks } = useGetDecks()

  return (
    <ul className={s.list}>
      {decks.map((deck) => (
        <DeckItem deck={deck} key={deck.id} />
      ))}
    </ul>
  )
}
