import axios from 'axios'

export async function fetchPosts() {
  // Fetch post data

  try {
    const response = await axios({
      method: 'GET',
      url: 'http://localhost:8080/api/posts',
      data: {},
    })
    return response.data
  } catch (err) {
    throw err
  }
}
