import axios from 'axios'
import Link from 'next/link'
import MainContainer from '../components/MainContainer'
import Menu from '../components/Menu'

export default function users({ users }) {
	return (
		<MainContainer>
			<h1>Список пользователей</h1>
			<ul>
				{users.map((user) => (
					<Link key={user.id} href={`/users/${user.id}`}>
						<li>{user.name}</li>
					</Link>
				))}
			</ul>
		</MainContainer>
	)
}

// для получения данных извне необходимо добавлять вот такую функцию (берем ее из документации Next.js):
export async function getStaticProps(context) {
	const response = await axios(`https://jsonplaceholder.typicode.com/users`)
	const users = response.data
	return {
		props: { users }, // will be passed to the page component as props
	}
}
