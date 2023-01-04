import "../style/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container footer-flex">
        <div className="logo">
          <img src="./stack-icon.png" />
        </div>

        <div className="footer-cols">
          <div className="footer-col">
            <h2 className="footer-title">
              <a href="https://stackoverflow.com/">STACK OVERFLOW</a>
            </h2>
            <ul>
              <li>
                <a href="https://stackoverflow.com/questions">Questions</a>
              </li>
              <li>
                <a href="https://stackoverflow.com/help">Help</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h2 className="footer-title">
              <a href="https://stackoverflow.co/">PRODUCTS</a>
            </h2>
            <ul>
              <li>
                <a href="https://stackoverflow.co/teams/">Teams</a>
              </li>
              <li>
                <a href="https://stackoverflow.co/advertising/">Advertising</a>
              </li>
              <li>
                <a href="https://stackoverflow.co/collectives/">Collectives</a>
              </li>
              <li>
                <a href="https://stackoverflow.co/talent/">Talent</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h2 className="footer-title">
              <a href="https://stackoverflow.co/">COMPANY</a>
            </h2>
            <ul>
              <li>
                <a href="https://stackoverflow.co/">About</a>
              </li>
              <li>
                <a href="https://stackoverflow.co/company/press">Press</a>
              </li>
              <li>
                <a href="https://stackoverflow.co/company/work-here">Work Here</a>
              </li>
              <li>
                <a href="https://stackoverflow.com/legal/terms-of-service">Legal</a>
              </li>
              <li>
                <a href="https://stackoverflow.com/legal/privacy-policy">Privacy Plocy</a>
              </li>
              <li>
                <a href="https://stackoverflow.com/legal/terms-of-service">Terms of Service</a>
              </li>
              <li>
                <a href="https://stackoverflow.co/company/contact">Contact Us</a>
              </li>
              <li>
                <a href="https://stackoverflow.com/questions/62088924/check-the-repeated-words-in-a-string-and-keep-a-count-in-javascript#">Cookie Settings</a>
              </li>
              <li>
                <a href="https://stackoverflow.com/legal/cookie-policy">Cookie Policy</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            {" "}
            <h2 className="footer-title">
              <a href="https://stackexchange.com/">STACK EXCHANGE NETWORK</a>
            </h2>
            <ul>
              <li>
                <a href="https://stackexchange.com/sites#technology">Technology</a>
              </li>
              <li>
                <a href="https://stackexchange.com/sites#culturerecreation">Culture & recreation</a>
              </li>
              <li>
                <a href="https://stackexchange.com/sites#lifearts">Life & arts</a>
              </li>
              <li>
                <a href="https://stackexchange.com/sites#science">Science</a>
              </li>
              <li>
                <a href="https://stackexchange.com/sites#professional">Professional</a>
              </li>
              <li>
                <a href="https://stackexchange.com/sites#business">Bussiness</a>
              </li>
              <li>
                <a href="#"> </a>
              </li>
              <li>
                <a href="https://api.stackexchange.com/">API</a>
              </li>
              <li>
                <a href="https://data.stackexchange.com/">Data</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer-copyright">
            <ul>
              <li><a href= "https://stackoverflow.blog/?blb=1&_ga=2.24093874.900605182.1672828538-454402027.1668647147">Blog</a></li>
              <li><a href= "https://www.facebook.com/officialstackoverflow/">Facebook</a></li>
              <li><a href= "https://twitter.com/stackoverflow">Twitter</a></li>
              <li><a href= "https://www.linkedin.com/company/stack-overflow">LinkedIn</a></li>
              <li><a href= "https://www.instagram.com/thestackoverflow/">Instagram</a></li>
            </ul>

            <p>
              Site design / logo © 2023 Stack Exchange Inc; user contributions
              licensed under{" "}
              <span className="td-underline">
                {" "}
                <a href="https://stackoverflow.com/help/licensing">CC BY-SA.</a>
              </span>{" "}
              rev 2023.1.3.43129
            </p>
          </div>
      </div>
    </div>
  );
}
