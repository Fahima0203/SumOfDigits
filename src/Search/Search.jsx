import './search.css'
import { Users } from './Users.js';
import { useState } from 'react'

function Search() {
    const [query, setQuery] = useState("");

    // console.log(Users.filter(user=>user.fn.toLowerCase.includes("fa")));
    return (
        <div className='app'>
            <input type="text" placeholder="Search.." className="search" onChange={(e) => setQuery(e.target.value)} />
            <ul className="list">
                {Users.filter((user) =>
                    user.fn.toLowerCase().includes(query)
                ).map((user) => (
                    <li key={user.id} className="listItem">{user.fn}</li>
                ))}
            </ul>
        </div>
    )
}

export default Search;