import axios from 'axios'
import MainContainer from '../../components/MainContainer'
import Menu from '../../components/Menu'
import styles from '../../styles/User.module.scss'

export default function UserPage({ user }) {
	return (
		<MainContainer>
			<div className={styles.user}>
				<h1>Пользователь c id: {user.id}</h1>
				<span>Имя пользователя: {user.name}</span>
				<span>Почта: {user.email}</span>
			</div>
		</MainContainer>
	)
}

// по умолчанию в функцию передается context, но мы сразу вытаскиваем id пользователя через {params}
export async function getServerSideProps({ params }) {
	const response = await axios(
		`https://jsonplaceholder.typicode.com/users/${params.id}`
	)
	const user = response.data

	return {
		props: { user }, // will be passed to the page component as props
	}
}
