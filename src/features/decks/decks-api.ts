import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksApi = {
  getDecks() {
    return instance.get<getDecksResponseType>('/v2/decks')
  },
  addDeck(params: AddDeckParamsType) {
    return instance.post<DeckType>('/v1/decks', params)
  },
}

// types
type getDecksResponseType = {
  items: DeckType[]
  pagination: PaginationType
}

export type DeckType = {
  isFavorite: boolean
  author: AuthorType
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string
  updated: string
  cardsCount: number
}

type PaginationType = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}

type AuthorType = {
  id: string
  name: string
}

export type AddDeckParamsType = {
  name: string
}
