import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Contact
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Disponible pour des opportunités de collaboration, de formation ou
            de développement web/mobile.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <ContactForm />
            </div>

            <aside className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Coordonnées
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2">
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

              <div className="mt-6">
                <h4 className="text-md font-semibold mb-2 text-gray-900 dark:text-white">
                  Réseaux
                </h4>
                <ul className="flex gap-4">
                  <li>
                    <a
                      href="https://github.com/tonprofil"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-600 dark:text-gray-300"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/in/tshibanguabraham"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-600 dark:text-gray-300"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
