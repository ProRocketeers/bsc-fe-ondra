import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://bsc-react-notes.firebaseio.com/'
})

export default instance
