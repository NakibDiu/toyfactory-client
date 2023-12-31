import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded mt-auto">
      <img src={logo} alt="logo" className="w-2/4 lg:w-1/4" />
      <p>A kids toy shop is a store that specializes in selling toys and games designed specifically for children.</p>
      <div>
        <div className="grid grid-flow-col gap-4">
          <Link to="https://twitter.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </Link>
          <Link to="https://www.youtube.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </Link>
          <Link to="https://www.facebook.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </Link>
          <Link to="https://www.instagram.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="fill-black"
            >
              <path d="M17.5 0H6.5A6.507 6.507 0 000 6.5v11A6.507 6.507 0 006.5 24h11A6.507 6.507 0 0024 17.5v-11A6.507 6.507 0 0017.5 0zm5.5 17.5a5.507 5.507 0 01-5.5 5.5h-11a5.507 5.507 0 01-5.5-5.5v-11a5.507 5.507 0 015.5-5.5h11a5.507 5.507 0 015.5 5.5zM12 6.75A5.258 5.258 0 006.75 12 5.258 5.258 0 0012 17.25 5.258 5.258 0 0017.25 12 5.258 5.258 0 0012 6.75zm0 8.775a3.525 3.525 0 01-3.525-3.525c0-.75.225-1.425.6-2.025A3.68 3.68 0 0112 8.4a3.68 3.68 0 013.525 3.525c0 .75-.225 1.425-.6 2.025A3.525 3.525 0 0112 15.525zm4.725-8.025a.723.723 0 100-1.445.723.723 0 000 1.445z"/>
            </svg>
          </Link>
        </div>
      </div>
      <div>
        <p>Copyright © 2023 - All right reserved by Toy Factory</p>
      </div>
    </footer>
  );
};

export default Footer;
