// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 text-center md:grid-cols-5 gap-8 px-5">
        {/* Section 1 */}
        <div>
          <h3 className="font-bold text-lg">Leader de la réparation</h3>
          <p className="mt-2 text-sm">
            Save est le leader de la réparation avec près de 150 magasins en
            France.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h3 className="font-bold text-lg">Réparation</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li>Réparation smartphone</li>
            <li>Apple</li>
            <li>Samsung</li>
            <li>Xiaomi</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h3 className="font-bold text-lg">Services</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li>QualiRépar</li>
            <li>reCover</li>
            <li>Accessoires</li>
            <li>Reprise & recyclage</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div>
          <h3 className="font-bold text-lg">Nos magasins</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li>Réparation Paris</li>
            <li>Réparation Marseille</li>
            <li>Réparation Lyon</li>
          </ul>
        </div>

        {/* Section 5 */}
        <div>
          <h3 className="font-bold text-lg">Liens Pratiques</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li>CGV</li>
            <li>Mentions légales</li>
            <li>Cookies</li>
          </ul>
          <div className="mt-5">
            <h3 className="font-bold text-lg">Nous suivre</h3>
            <div className="flex mt-2 space-x-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-white hover:text-gray-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-white hover:text-gray-300"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-white hover:text-gray-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-white hover:text-gray-300"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
