import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-8 py-6 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        {/* Seções do footer */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 flex-1">
          {/* Tecnologia */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold">Tecnologia</h3>
            <Link href="/about" className="hover:underline">
              Sobre
            </Link>
            <Link href="/ads" className="hover:underline">
              QR Pet
            </Link>
            <Link href="/contact" className="hover:underline">
              Feedbacks
            </Link>
          </div>

          {/* Suporte */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold">Suporte</h3>
            <Link href="/faq" className="hover:underline">
              FAQ
            </Link>
            <Link href="/contact" className="hover:underline">
              Contato
            </Link>
          </div>

          {/* Social */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold">Siga-nos</h3>
            <div className="flex space-x-3">
              <Link
                href="https://twitter.com"
                target="_blank"
                className="hover:text-blue-500"
              >
                Twitter
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="hover:text-pink-500"
              >
                Instagram
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-blue-700"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>

        {/* Logo no canto direito */}
        <div className="flex flex-col items-end">
          <p className="text-sm text-right">
            Desenvolvido por <strong>DataSynk</strong>.<br />
            Direitos autorais de <strong>arqpet</strong>.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <span>&copy; 2025 arqpet. Todos os direitos reservados.</span>
        <Image
          src="/logo/datasynk.svg"
          alt="DataSynk Logo"
          width={40}
          height={15}
          priority
        />
      </div>
    </footer>
  );
}
