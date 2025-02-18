import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Jobs() {
  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      <Navbar />

      <main className="flex-grow pt-20">
        <div className="hero">
          <div className="hero-content lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Careers</h1>
              <h2 className="text-lg">
                Come back to see open positions as they come in, or visit our{" "}
                <a
                  href="https://www.linkedin.com/company/astral-computers-za"
                  target="_blank"
                >
                  <strong>LinkedIn</strong>
                </a>{" "}
                page for more information.
              </h2>
            </div>

            {/* <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Careers</h1>
              <h2 className="text-lg">
                <strong>Job Title:</strong> Junior Fullstack Developer
              </h2>
              <br />
              <ul>
                <li>
                  <strong>Location:</strong> Remote
                </li>
                <li>
                  <strong>Job Type:</strong> Full-time
                </li>
              </ul>
              <br />
              <h2 className="text-lg font-bold">Role Overview</h2>
              <p>
                We are seeking a motivated{" "}
                <strong>Junior Fullstack Developer</strong> with knowledge in
                JavaScript. You will work on both frontend and backend
                development, collaborating with a team of engineers to build,
                optimize, and maintain our applications. If you have experience
                or interest in React and TypeScript, that’s a plus!
              </p>
              <br />
              <br />
              <h2 className="text-lg font-bold">Responsibilities</h2>
              <ul>
                <li>▪️ Develop and maintain web applications</li>
                <li>▪️ Work on both frontend and backend development tasks</li>
                <li>▪️ Debug and troubleshoot software issues</li>
                <li>▪️ Write clean, maintainable, and efficient code</li>
                <li>
                  ▪️ Stay up-to-date with emerging technologies and best
                  practices
                </li>
              </ul>
              <br />
              <br />
              <h2 className="text-lg font-bold">Requirements</h2>
              <ul>
                <li>✅ Knowledge in JavaScript</li>
                <li>
                  ✅ Basic understanding of frontend and backend development
                </li>
                <li>
                  ✅ Strong problem-solving skills and attention to detail
                </li>
              </ul>
              <br />
              <br />
              <h2 className="text-lg font-bold">Nice-to-Have</h2>
              <ul>
                <li>➕ Experience with React</li>
                <li>➕ Familiarity with TypeScript</li>
              </ul>
              <br />
              <br />
              <h2 className="text-lg font-bold">What We Offer</h2>
              <ul>
                <li>🚀 Exciting projects in AI and software development</li>
                <li>🌍 Flexible work environment</li>
                <li>📚 Opportunities for learning and career growth</li>
                <li>💡 A collaborative and innovative work culture</li>
              </ul>
              <br />
              <br />
              <p>
                Join us at <strong>Astral Computers</strong> and be part of the
                future of AI-powered applications! 🚀
              </p>
              <br />
              <button
                className="btn btn-primary"
                onClick={() => {
                  (
                    document.getElementById("apply_modal") as HTMLDialogElement
                  )?.showModal();
                }}
              >
                Apply
              </button>
            </div> */}
          </div>
        </div>
      </main>

      <Footer />

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="apply_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            We are looking forward to hearing from you!
          </h3>
          <form className="card-body py-4">
            <div className="form-control flex flex-row items-center justify-between">
              <label className="label w-1/3">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered w-2/3"
                required
              />
            </div>
            <div className="form-control flex flex-row items-center justify-between">
              <label className="label w-1/3">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered w-2/3"
                required
              />
            </div>
            <div className="form-control flex flex-row items-center justify-between">
              <label className="label w-1/3">
                <span className="label-text">CV</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-2/3"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary float-right">Submit</button>
            </div>
          </form>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
