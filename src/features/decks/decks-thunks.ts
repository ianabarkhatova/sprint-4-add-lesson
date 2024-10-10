import { AddDeckParamsType, decksApi, DeckType } from './decks-api'
import { addDeckAC, DecksActions, setDecksAC } from './decks-reducer'
import { Dispatch } from 'redux'

export const getDecksTC = () => (dispatch: Dispatch<DecksActions>) => {
  decksApi.getDecks().then((res) => {
    dispatch(setDecksAC(res.data.items))
    // console.log(res)
  })
}

export const addDeckTC = (params: AddDeckParamsType) => (dispatch: Dispatch<DecksActions>) => {
  return decksApi.addDeck(params).then((res) => {
    dispatch(addDeckAC(res.data))
    // console.log(res)
  })
}
