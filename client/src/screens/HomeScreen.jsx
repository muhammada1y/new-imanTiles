import ListProductScreen from "./listProducts/ListProductScreen";
import ProductCarousel from "./carousel/ProductCarousel";
import ServicesScreen from "./services/ServicesScreen";
import TopCategoryScreen from "./topCategories/TopCategoryScreen";
import WhoWeAre from "./whoWeAre/WhoWeAre";
import DecorateHome from "./DecorateHome/DecorateHome";
import NewProductsScreen from "./newProducts/NewProductsScreen";

const HomeScreen = () => {

  return (
    <>
    <ProductCarousel/>
    <ListProductScreen/>
    <NewProductsScreen />
    <TopCategoryScreen />
    <DecorateHome />
    <WhoWeAre />
    <ServicesScreen />
   </>
  );
};

export default HomeScreen;
