import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      <Navbar />

      <main className="flex-grow pt-20">
        <div className="hero">
          <div className="hero-content lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Refund Policy</h1>
              <p className="text-lg">
                <strong>Astral Computers Refund Policy</strong>
              </p>
              <p>
                <strong>Last Updated: 2025/02/18</strong>
              </p>

              <br />

              <h2>1. Non-Refundable Items</h2>
              <br />
              <ul>
                <li>Subscriptions</li>
                <li>Customized or digital products.</li>
                <li>Gift cards.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
