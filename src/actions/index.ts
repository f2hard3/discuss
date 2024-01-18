'use server'

import { signIn } from './sign-in'
import { signOut } from './sign-out'
import { createComment } from './create-comment'
import { createPost } from './create-post'
import { createTopic } from './create-topic'
import { search } from './search'

export { 
  signIn, 
  signOut, 
  createComment, 
  createPost, 
  createTopic, 
  search 
}

// export { signIn } from './sign-in'
// export { signOut } from './sign-out'
// export { createComment } from './create-comment'
// export { createPost } from './create-post'
// export { createTopic } from './create-topic'
// export { search } from './search'