import MainContainer from '../components/MainContainer'
import TextForTestPage from '../components/TestComp/TextForTestPage'

export default function test() {
	return (
		<MainContainer>
			<div>
				<h1 className='test-h1'>Тестовая страница</h1>
			</div>
			<TextForTestPage />
		</MainContainer>
	)
}
