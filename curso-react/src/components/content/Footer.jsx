import {memo} from 'react';

const Footer = () => {
    return (
        <>
           <footer className="piedepagina row">
  <nav>
    <a className="enlaces__piedepagina" href="https://www.facebook.com/profile.php?id=100040529724124&sk=about"><i class="fab fa-facebook-square"></i></a>
    <a className="enlaces__piedepagina" href="https://www.instagram.com/farmacialaguardia/"><i className="fab fa-instagram-square"></i></a>
  </nav>
</footer>
        </>
    );
}

export default memo(Footer);
