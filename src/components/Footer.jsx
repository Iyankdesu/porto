function Footer() {
	return (
		<footer className="bg-dark pb-12 pt-16">
			<div className="container">
				<div className="flex items-center flex-wrap">
					<div className="mb-12 w-full px-4 font-medium text-slate-300 md:w-1/2">
						<h2 className="mb-5 text-4xl font-bold text-white">Fajrian</h2>
						<p>Banjarmasin</p>
						<p>Kalimantan Selatan, Indonesia</p>
					</div>
					<div className="mb-12 w-full px-4 md:w-1/4">
						<h3 className="mb-5 text-xl font-semibold text-white">Socials</h3>
						<ul className="text-slate-300">
							<li>
								<a
									href="https://instagram.com/iyankdesu"
									className="mb-2 inline-block text-base hover:text-primary">
									Instagram
								</a>
							</li>
						</ul>
						<ul className="text-slate-300">
							<li>
								<a
									href="https://x.com/iyankdesu"
									className="mb-2 inline-block text-base hover:text-primary">
									Twitter
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="w-full border-t border-slate-700 pt-10">
					<p className="text-center text-xs font-medium text-slate-500">
						by Muhammad Fajrian Nur Ibrahim
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
