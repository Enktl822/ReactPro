import "../style/footer.css";

export default function Footer() {
  return (
    <div class="footer">
      <div class="container footer-flex">
        <div class="logo">
          <img src="./stack-icon.png" />
        </div>
        <div class="footer-cols">
          <div class="footer-col">
            <h2 class="footer-title">
              <a href="#">STACK OVERFLOW</a>
            </h2>
            <ul>
              <li>
                <a href="#">Questions</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h2 class="footer-title">
              <a href="#">PRODUCTS</a>
            </h2>
            <ul>
              <li>
                <a href="#">Teams</a>
              </li>
              <li>
                <a href="#">Advertising</a>
              </li>
              <li>
                <a href="#">Collectives</a>
              </li>
              <li>
                <a href="#">Talent</a>
              </li>
            </ul>
          </div>

          <div class="footer-col">
            <h2 class="footer-title">
              <a href="#">COMPANY</a>
            </h2>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Work Here</a>
              </li>
              <li>
                <a href="#">Legal</a>
              </li>
              <li>
                <a href="#">Privacy Plocy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Cookie Settings</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
            </ul>
          </div>

          <div class="footer-col">
            {" "}
            <h2 class="footer-title">
              <a href="#">STACK EXCHANGE NETWORK</a>
            </h2>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Work Here</a>
              </li>
              <li>
                <a href="#">Legal</a>
              </li>
              <li>
                <a href="#">Privacy Plocy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Cookie Settings</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
            </ul>
          </div>

          <div class="footer-copyright">
            <ul>
              <li>Blog</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Instagram</li>
            </ul>

            <p>
              Site design / logo © 2023 Stack Exchange Inc; user contributions
              licensed under{" "}
              <span class="td-underline">
                {" "}
                <a href="#">CC BY-SA.</a>
              </span>{" "}
              rev 2023.1.3.43129
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
