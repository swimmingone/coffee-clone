import NavBar from './NavBar';

const Layout = ({ children }) => {
	return (
		<>
			<Seo />
			<NavBar />
			<div>{children}</div>
		</>
	);
};

export default Layout;
