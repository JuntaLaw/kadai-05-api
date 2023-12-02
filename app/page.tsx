'use client'
import {
  useState
} from 'react'

export default function Home() {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  async function createIndexAndEmbeddings() {
    try {
      const result = await fetch('/api/setup', {
        method: "POST"
      })
      const json = await result.json()
      console.log('result: ', json)
    } catch (err) {
      console.log('err:', err)
    }
  }
  async function sendQuery() {
    if (!query) return
    setResult('')
    setLoading(true)
    try {
      const result = await fetch('/api/read', {
        method: "POST",
        body: JSON.stringify(query)
      })
      const json = await result.json()
      setResult(json.data)
      setLoading(false)
    } catch (err) {
      console.log('err:', err)
      setLoading(false)
    }
  }
  return (
<div className="bg-gradient-to-r from-blue-100 via-teal-100 to-cyan-100 ...">
    <main className="h-screen flex flex-col items-center p-24">
        <h1 className='text-sky-700 text-4xl font-black mb-10'>React Tutor</h1>
        <input 
        className='text-black w-full px-2 py-1 mb-4 '
        onChange={e => setQuery(e.target.value)} />
        <button
        className='px-7 py-1 rounded-3xl bg-sky-600 text-white text-xl font-bold mt-2 mb-6 hover:bg-cyan-800'
        onClick={sendQuery}>
          Ask Me
        </button>
        {
          loading && <p>Asking AI ...</p>
        }
        {
          result && <p>{result}</p>
        }
            
      { /* consider removing this button from the UI once the embeddings are created ... */}
        {/* <button className='px-2 py-2 bg-slate-100 hover:bg-cyan-400'
        onClick={createIndexAndEmbeddings}>Create index and embeddings</button> */}
    </main>
    </div>
  )
}