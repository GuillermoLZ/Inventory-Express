import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

type Data = {
  products: any[]
}

const adapter = new JSONFile<Data>('db.json')
const db = new Low<Data>(adapter, { products: [] })

export const initDB = async () => {
  await db.read()
  db.data ||= { products: [] }
  await db.write()
}

export default db