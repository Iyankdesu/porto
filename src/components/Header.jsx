function Header() {
	return (
		<header className="absolute left-0 top-0 z-10 flex w-full items-center bg-transparent">
			<div className="container">
				<div className="pt-8 relative flex items-center justify-between">
					<div className="px-12">
						<a
							href="#"
							className="font-serif block py-6 text-2xl font-bold text-primary">
							Portfolio
						</a>
					</div>
					<div className="flex items-center px-4">
						<nav className="absolute right-4 top-full hidden w-full bg-white py-5 shadow-lg lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none md:hidden">
							<ul className="block lg:flex">
								<li className="group">
									<a
										href="https://www.linkedin.com/in/muhammadfajriannuribrahim"
										target="_blank"
										className="mx-8 flex py-2 text-base text-dark hover:text-primary">
										get in touch
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
