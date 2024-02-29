type Debug = (methondName: string, errorId: number) => void

const debug: Debug = (methondName, errorId) => {
  if (process.env.NODE_ENV === 'development') {
    console.error(`[@apiteam/twa-bridge](${methondName}) = ${errorId}`)
  }
}

export default debug