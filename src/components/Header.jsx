import { useLocation } from 'preact-iso';

export function Header() {
	const { url } = useLocation();

	return (
		<header>
			<nav>
				<a href="/Ultim8" class={url == '/Ultim8' && 'active'}>
					Home
				</a>
				<a href="/Ultim8/404" class={url == '/Ultim8/404' && 'active'}>
					404
				</a>
			</nav>
		</header>
	);
}
