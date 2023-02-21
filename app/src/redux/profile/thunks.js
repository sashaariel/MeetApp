import axios from 'axios'
import { loadProfile } from './profileSlice'

export const getChats = (token, name) => {
  return async (dispatch) => {
    try {
      const res = await axios.get('/api/chat', { headers: { Authorization: `Bearer ${token}` } })
      console.log(res.data)
      dispatch(loadProfile({ chats: res.data.payload, name }))
    } catch (error) {
      const response = {
        error: error.error,
        errorMessage: error.message
      }
      console.log(error, 'failed', response)
    }
  }
}
export const getChatById = (chatId, token) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        '/api/chat',
        { params: chatId },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      )
      console.log(res.data)
    } catch (error) {
      const response = {
        error: error.error,
        errorMessage: error.message
      }
      console.log(error, 'failed', response)
    }
  }
}

export const createNewChat = (token, colaboratorId) => {
  return async (dispatch) => {
    try {
      const res = await axios.post('/api/chat', colaboratorId, {
        headers: { Authorization: `Bearer ${token}` }
      })
      console.log(res.data)
    } catch (error) {
      const response = {
        error: error.error,
        errorMessage: error.message
      }
      console.log(error, 'failed', response)
    }
  }
}
