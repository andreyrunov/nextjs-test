import Link from 'next/link'
import { useState } from 'react'

export default function users() {
	const [users, setUsers] = useState([
		{ id: 1, name: 'Kolya' },
		{ id: 2, name: 'Vasya' },
	])
	return (
		<div>
			<h1>Список пользователей</h1>
			<ul>
				{users.map((user) => (
					<Link key={user.id} href={`/users/${user.id}`}>
						<li>{user.name}</li>
					</Link>
				))}
			</ul>
		</div>
	)
}
