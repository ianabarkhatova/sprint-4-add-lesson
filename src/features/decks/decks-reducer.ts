import { DeckType } from './decks-api'

const initialState = {
  decks: [] as DeckType[],
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'DECKS/SET-DECKS':
      return {
        ...state,
        decks: action.decks,
      }

    case 'DECKS/ADD-DECK':
      return {
        ...state,
        decks: [action.deck, ...state.decks],
      }

    default:
      return state
  }
}

export type DecksActions = ReturnType<typeof setDecksAC> | ReturnType<typeof addDeckAC>

export const setDecksAC = (decks: DeckType[]) => ({ type: 'DECKS/SET-DECKS', decks }) as const
export const addDeckAC = (deck: DeckType) => ({ type: 'DECKS/ADD-DECK', deck }) as const
