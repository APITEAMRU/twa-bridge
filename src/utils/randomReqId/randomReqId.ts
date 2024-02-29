
type RandomReqId = () => string

/**
 * Generating a random string
 */
const randomReqId: RandomReqId = () => {
  return Math.random().toString(36).substring(3, 9)
}

export default randomReqId