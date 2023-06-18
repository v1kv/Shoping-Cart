import {Link} from 'react-router-dom'

const Menu = () => {
	return (
		<nav className="my-2 my-md-0 mr-md-3">
			<Link className="p-2 text-dark" to="/product">Продукты</Link>
			<Link className="p-2 text-dark" to="/liked">Понравившиеся</Link>
		</nav>
	);
};

export default Menu;
