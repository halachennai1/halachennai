import CategoryItem from "../components/CategoryItem";

const categories = [
  { href: "/player version", name: "Player version", imageUrl: "/player version.jpg" },
  { href: "/fan version", name: "Fan version", imageUrl: "/fan version.jpg" },
  { href: "/retros", name: "Retro", imageUrl: "/retro.webp" },
  { href: "/fc sets", name: "FC Set", imageUrl: "/fcset.webp" },
  { href: "/kids", name: "Kids", imageUrl: "/kids.webp" },
  { href: "/special editions", name: "Special Edition", imageUrl: "/special edition.webp" },
];

const AllCategoriesPage = () => {
  return (
    <div className="relative min-h-screen text-white ">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <h1
          className="text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4"
          style={{ fontFamily: "'Bungee', cursive" }}
        >
          All Categories
        </h1>
        <p className="text-center text-xl text-gray-300 mb-12">
          Explore all the categories we have to offer!
        </p>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryItem category={category} key={category.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCategoriesPage;
