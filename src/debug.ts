type Debug = (message: string) => void

const debug: Debug = (message) => {
  // if (process.env.NODE_ENV === 'development') {
  //   console.error('[Telegram Debug]' + message)
  // }
}

export default debug