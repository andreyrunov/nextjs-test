import Link from 'next/link'

export default function Menu ({ text, href }) {
	return (
		<Link href={href}>
			{text}
		</Link>
	)
}
