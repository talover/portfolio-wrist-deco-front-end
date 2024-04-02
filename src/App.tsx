import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Dealer } from '@/pages/Dealer';
import { Product } from '@/pages/Product';
import { Catalog } from '@/pages/Catalog';
import { Brands } from '@/pages/Brands';
import { Compare } from '@/pages/Compare';
import { NoPage } from '@/pages/NoPage';
import { Layout } from '@/layouts';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/dealer" element={<Dealer />} />
					<Route path="/product" element={<Product />} />
					<Route path="/catalog" element={<Catalog />} />
					<Route path="/brands" element={<Brands />} />
					<Route path="/compare" element={<Compare />} />
					<Route path="/*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
