const Contact = () => {
  return (
    <>
      <section id="contact">
        <div className="grid w-full items-center justify-center gap-4 px-3 py-20 text-center md:px-6">
          <div>
            <div className="space-y-3">
              <h2 className="hero-title title-font mb-4 w-full text-4xl font-bold text-gray-700 lg:text-5xl">
                Get in Touch
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-x-3 overflow-hidden">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 hover:text-blue-600 hover:underline"
                  href="https://www.linkedin.com/in/suheer-zahid"
                >
                  LinkedIn
                </a>{" "}
                |
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 hover:text-blue-600 hover:underline"
                  href="https://github.com/CodeWithSuheer"
                >
                  Github
                </a>{" "}
                |
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 hover:text-blue-600 hover:underline"
                  href="https://codewithsuheer.blogspot.com"
                >
                  Blogger
                </a>{" "}
                |
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 hover:text-blue-600 hover:underline"
                  href="https://www.instagram.com/suheer_100x"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
