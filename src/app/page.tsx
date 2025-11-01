import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import ContactForm from "@/components/contact/ContactForm";
import Footer from "@/components/Footer";
import Menu from "@/components/menu/Menu";

export default function Home() {
  return (
    <>
      <Menu />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto mb-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Contact
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Disponible pour des opportunités de collaboration, de formation
                ou de développement web/mobile.
              </p>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li>📞 +243 854 309 793</li>
                <li>
                  ✉️{" "}
                  <a
                    href="mailto:tshiabraham@gmail.com"
                    className="text-blue-600"
                  >
                    tshiabraham@gmail.com
                  </a>
                </li>
                <li>🌍 Mbuji-Mayi, RDC</li>
              </ul>
              <div className="flex gap-4 justify-center mb-4">
                <a
                  href="https://github.com/tonprofil"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 dark:text-gray-300"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/tshibanguabraham"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 dark:text-gray-300"
                >
                  LinkedIn
                </a>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Disponible pour des opportunités de collaboration, de formation
                ou de développement web/mobile.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
