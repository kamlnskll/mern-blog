import Post from '../models/Posts'

export const createPost = async (req, res) => {
  const newPost = new Post(req.body)

  // Take the data from the body of the object and send it over to MongoDB

  // Try catch block to test the response status for success or failure
  try {
    const savedPost = await newPost.save()
    res.status(200).json(savedPost)
  } catch (err) {
    throw err
  }
}

export const updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      {
        // $set is a MongoDB operator that replaces the value of a field with the specified value.
        $set: req.body,
      },
      { new: true }
    )
    res.status(200).json(updatedPost)
  } catch (err) {
    throw err
  }
}

export const deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    )
    res.status(200).json('Post Deleted')
  } catch (err) {
    throw err
  }
}

export const getPosts = async (req, res) => {
  try {
    const post = await Post.findById(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    )
    res.status(200).json(post)
  } catch (err) {
    throw err
  }
}

export const getPostByCategory = async (req, res) => {}
