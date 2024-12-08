import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";
import CarouselComponent from "../components/CarouselComponent";

const categories = [
	// { href: "/jeans", name: "Jeans", imageUrl: "/jeans.jpg" },
	{ href: "/player version", name: "Player version", imageUrl: "/player version.jpg" },
	{ href: "/fan version", name: "Fan version", imageUrl: "/fan version.jpg" },
	{ href: "/retros", name: "Retro", imageUrl: "/retro.webp" },
	{ href: "/fc sets", name: "FC Set", imageUrl: "/fcset.webp" },
	{ href: "/kids", name: "Kids", imageUrl: "/kids.webp" },
	{ href: "/special editions", name: "Special Edition", imageUrl: "/special edition.webp" },
];

const HomePage = () => {
	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);

	return (
		<div className='relative min-h-screen text-white overflow-hidden'>
				<CarouselComponent/>
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
			<h1
		className='text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4'
		style={{ fontFamily: "'Bungee', cursive" }}
	>
		Explore Our Categories
	</h1>
				<p className='text-center text-xl text-black mb-12'>
					Discover the latest trends in eco-friendly fashion
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
				</div>

				{/* {!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />} */}
			</div>
		</div>
	);
};
export default HomePage;
