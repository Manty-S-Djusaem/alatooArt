import {createBrowserRouter} from "react-router-dom";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import About from "../components/footer/about.jsx";
import Oferta from "../components/footer/oferta.jsx";
import Cart from "../components/cart/Cart.jsx";
import Main from '../pages/Main.jsx'
import Catalogue from "../components/header/Catalogue.jsx";
import NotFound from "../pages/NotFound.jsx";
import Registration from "../components/auth/Registration.jsx";
import Authorization from '../components/auth/Authorization.jsx'
import Password_recovery from "../components/auth/Password-recovery.jsx";
import MainMian from '../pages/MainMian.jsx'
import Category from "../components/header/Category.jsx";
import Products from "../pages/Products.jsx";
// import Catalog from '../pages/Catalog'
// import ProductPage from '../pages/ProductPage'

const router = createBrowserRouter([
  {
    path: `/shop-template/main`,
    element: (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  },
  {
    path: `/shop-template/catalogue`,
    element: (
      <div>
        <Header />
        <Catalogue />
        <Footer />
      </div>
    )
  },
  {
    path: `/shop-template/category`,
    element: (
      <div>
        <Category />
      </div>
    )
  },
  {
    path: `/shop-template/category/:id`,
    element: (
      <div>
        <Header />
        <Category />
        <Footer />
      </div>
    )
  },
  {
    path: `/shop-template/cart`,
    element: (
      <div>
        <Header />
        <Cart />
        <Footer />
      </div>
    )
  },
  {
    path: `/shop-template/products/:id`,
    element: (
      <div>
        <Header />
        <Products />
        <Footer />
      </div>
    )
  },
  // ---------------------------------------------------------
  // ---------------------------------------------------------
  // ---------------------------------------------------------
  {
    path: `/shop-template/registration`,
    element: (
      <div>
        <Header />
        <Registration />
        <Footer />
      </div>
    )
  },
  {
    path: `/shop-template/authorization`,
    element: (
      <div>
        <Header />
        <Authorization />
        <Footer />
      </div>
    )
  },
  {
    path: `/shop-template/recoverypasswoed`,
    element: (
      <div>
        <Header />
        <Password_recovery />
        <Footer />
      </div>
    )
  },
  {
    path: `/`,
    element: (
      <div>
        <Header />
        <MainMian />
        <Footer />
      </div>
    )
  },
  {
    path: `/shop-template/about`,
    element: (
      <div>
        <Header />
        <About/>
        <Footer />
      </div>
    )
  },
  {
    path: `/shop-template/oferta`,
    element: (
      <div>
        <Header />
        <Oferta/>
        <Footer />
      </div>
    )
  },
  {
    path: `/category/:category`,
    element: <Category />
  },
]);

export default router;