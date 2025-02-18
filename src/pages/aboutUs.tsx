import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      <Navbar />

      <main className="flex-grow pt-20">
        <div className="hero">
          <div className="hero-content lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">About Us</h1>
              <p className="text-lg">
                💻
                <strong className="pl-5">
                  Astral Computers – Innovating the Future of AI & Software
                  Solutions
                </strong>
              </p>
              <p className="py-6">
                At <strong>Astral Computers</strong>, we specialize in
                cutting-edge software development, delivering bespoke solutions
                that bridge the gap between innovation and functionality.
                <br />
                As a forward-thinking technology company, we are dedicated to
                crafting high-quality applications that enhance user experiences
                and redefine digital interactions.
              </p>
              <p className="text-lg flex">
                <img src="/ai.png" width={50} className="pr-5" />
                <strong>AI Buddies – Your Personalized AI Companion</strong>
              </p>
              <p className="py-6">
                One of our flagship projects, <strong>AI Buddies</strong>, is an
                AI-driven social platform where users can create their own
                digital companions. Whether for entertainment, support, or
                meaningful conversations, AI Buddies allows users to personalize
                their AI friends and engage with them in dynamic, intelligent
                discussions.
                <br />
                Designed with advanced AI technology, our platform fosters
                deeper human-AI connections, making every interaction unique and
                engaging. At Astral Computers, we believe in pushing the
                boundaries of technology to create solutions that empower and
                inspire.
                <br />
                <br />
                <strong>
                  Join us on this journey as we shape the future of AI-driven
                  social experiences.
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
