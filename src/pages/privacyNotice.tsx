import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function PrivacyNotice() {
  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      <Navbar />

      <main className="flex-grow pt-20">
        <div className="hero">
          <div className="hero-content lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Privacy Notice</h1>
              <p className="text-lg">
                <strong className="pl-5">
                  Astral Computers Privacy Notice
                </strong>
              </p>
              <p>
                <strong>Last Updated: 2025/02/18</strong>
              </p>

              <h2>1. Information We Collect</h2>
              <p>
                We collect personal details like your name, email, and payment
                info when you make a purchase.
              </p>

              <h2>2. How We Use Your Information</h2>
              <ul>
                <li>To process orders and provide support.</li>
                <li>For marketing (only with your consent).</li>
                <li>To improve our services and website.</li>
              </ul>

              <h2>3. Sharing Your Information</h2>
              <p>
                We do not sell your data. We only share information with trusted
                third parties when necessary.
              </p>

              <h2>4. Data Security</h2>
              <p>
                We take precautions to protect your information from
                unauthorized access.
              </p>

              <h2>5. Your Rights</h2>
              <p>
                You can request access, correction, or deletion of your personal
                data.
              </p>

              <h2>6. Changes to This Notice</h2>
              <p>We may update this Privacy Notice periodically.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
