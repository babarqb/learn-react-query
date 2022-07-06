import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useQuery } from 'react-query'
const fetcher = (url:string) => fetch(url).then(res => res.json())
function App() {
const {data,error,isLoading} = useQuery('hello',()=>{
  return fetcher('https://api.github.com/users/babarqb')
})
  if(isLoading)return <div>Loading...</div>
  if(error)return <div>Error</div>
  return (
    <div className="App">
      <header className="App-header">
        <img src={data.avatar_url} alt={data.name}/>
        <p>Hello Vite + React!</p>
      </header>
    </div>
  )
}

export default App
