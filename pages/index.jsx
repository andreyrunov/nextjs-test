import Menu from '../components/Menu'

export default function Index() {
	return (
		<div>
			<div className='navBar'>
				<Menu href={'/'} text={'Главная'} />
				<Menu href={'/users'} text={'Пользователи'} />
			</div>
			<h1>Главная страница</h1>
			{/* <style jsx>
                {
                    .navBar {
                        background: orange;
                        padding: 10px;
                    }
                }
            </style> */}
		</div>
	)
}
