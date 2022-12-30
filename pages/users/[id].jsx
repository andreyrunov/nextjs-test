import { useRouter } from 'next/router'
import styles from '../../styles/User.module.scss'

export default function UserPage() {
	const router = useRouter()
	console.log(router)
	return (
		<div className={styles.user}>
			<h1>Пользователь c id: {router.query.id}</h1>
		</div>
	)
}
