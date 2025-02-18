import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      <Navbar />

      <main className="flex-grow pt-20">
        <div className="hero">
          <div className="hero-content lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Thank You</h1>
              <p className="text-lg">
                💻
                <strong className="pl-5">
                  Thank you for subcribing to our newsletter!
                </strong>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
