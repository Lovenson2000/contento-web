export default function Footer() {
  return (
    <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-8 text-gray-500 text-sm">
      <a
        href="mailto:contento.app.dev@gmail.com"
        className="hover:text-blue-600 transition-colors"
      >
        Contact
      </a>
      <span>•</span>
      <a href="/privacy" className="hover:text-blue-600 transition-colors">
        Privacy Policy
      </a>
    </div>
  );
}
