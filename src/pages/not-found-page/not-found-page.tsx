import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import Header from '../../components/header/header';

export default function NotFoundPage() {
  return (
    <div className="page page--favorites-empty">
      <Header />
      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Favorites (empty)</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">404 Not Found.</b>
              <Link className="page__main" to={AppRoute.Main}>
                <p className="page__main">Go to main</p>
              </Link>
            </div>
          </section>
        </div>
      </main>
      <footer className="footer">
        <a className="page__main" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
}
