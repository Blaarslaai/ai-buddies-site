import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      <Navbar />

      <main className="flex-grow pt-20">
        <div className="hero">
          <div className="hero-content lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Terms of Service</h1>
              <p className="text-lg">
                <strong>Astral Computers Terms of Service</strong>
              </p>
              <p>
                <strong>Last Updated: 2025/02/18</strong>
              </p>

              <br />

              <h2>1. Acceptance of Terms</h2>
              <br />
              <p>
                By using our website (www.astralcomputers.net), you agree to
                these terms. If you do not agree, do not use our services.
              </p>

              <br />
              <br />

              <h2>2. Use of Our Services</h2>
              <br />
              <ul className="list-disc pl-5">
                <li>
                  You must be at least 18 years old or have parental consent.
                </li>
                <li>Keep your account credentials secure.</li>
                <li>Do not engage in fraudulent or illegal activities.</li>
              </ul>

              <br />
              <br />

              <h2>3. Products and Services</h2>
              <br />
              <p>Product availability and pricing are subject to change.</p>

              <br />
              <br />

              <h2>4. Intellectual Property</h2>
              <br />
              <p>
                All website content is owned by Astral Computers and protected
                by copyright laws.
              </p>

              <br />
              <br />

              <h2>5. Limitation of Liability</h2>
              <br />
              <p>
                We are not responsible for any damages arising from the use of
                our site.
              </p>

              <br />
              <br />

              <h2>6. Changes to Terms</h2>
              <br />
              <p>We may update these terms at any time.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
