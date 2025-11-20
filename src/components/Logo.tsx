export default function LogoHeader() {
  return (
    <div
      className="
        absolute 
        top-6 
        left-10 translate-x-0 
        lg:left-16 
        flex items-center gap-3 
        z-10
      "
    >
      <img
        src="src/assets/logo.png"
        alt="App Logo"
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl shadow-lg"
      />
      <h1 className="text-gray-800 font-bold text-xl sm:text-2xl">Contento</h1>
    </div>
  );
}
