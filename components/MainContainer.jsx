import Head from 'next/head'
import Menu from './Menu'

// пропсами функция принимает {children}, чтобы в этот контейнер мы могли добавлять и другие компоненты
export default function MainContainer({ children }) {
	return (
		<>
			<Head>
				<meta keywords='Купить авто, авто напрокат'></meta>
				<meta title='Это главная страница сайта'></meta>
			</Head>
			<div className='navBar'>
				<Menu href={'/'} text={'Главная'} />
				<Menu href={'/users'} text={'Пользователи'} />
				<Menu href={'/test'} text={'Тестовая страница'} />
			</div>
			<div>{children}</div>
		</>
	)
}
