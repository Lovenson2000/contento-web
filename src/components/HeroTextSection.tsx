export default function HeroTextSection() {
  return (
    <div
      className="
        flex-1 w-full 
        py-8 
        text-center md:text-left
        px-4 md:px-0
      "
    >
      <div className="space-y-6 max-w-xl mx-auto md:mx-0">
        <h2
          className="
            text-4xl sm:text-5xl lg:text-6xl 
            font-bold 
            text-gray-800 
            leading-tight
          "
        >
          Your Favorite Content
          <span className="mx-2 text-blue-600">In One Place</span>
        </h2>

        <p
          className="
            text-gray-700 
            text-base sm:text-lg 
            leading-relaxed
            max-w-md md:max-w-lg
            mx-auto md:mx-0
          "
        >
          <b>CONTENTO</b> helps you save videos, tweets, and articles from
          anywhere — and reminds you to read, watch, or listen at the perfect
          time.
        </p>

        <div className="flex justify-center md:justify-start">
          <button
            className="
              flex items-center gap-3 
              px-4 py-3
              bg-gray-800 text-white 
              rounded-2xl 
              font-semibold 
              whitespace-nowrap
              transition-all shadow-lg 
              hover:shadow-xl 
              transform hover:scale-105
            "
          >
            <CustomAppleIcon className="w-8 h-8" />
            <div>Download on the App Store</div>
          </button>
        </div>
      </div>
    </div>
  );
}

function CustomAppleIcon({ className = "w-8 h-8" }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M29.3508 9.07568C29.4555 10.4369 29.0366 11.6934 28.1989 12.7406C27.3612 13.7877 26.2094 14.416 24.8481 14.416C24.7434 13.0547 25.1623 11.7982 26 10.8558C26.8377 9.80867 28.0942 9.18039 29.3508 9.07568ZM33.644 16.8243C32.0734 17.7667 31.1309 19.4421 31.1309 21.2222C31.1309 23.2118 32.2828 25.0966 34.1676 25.7249C33.8535 26.8767 33.3299 28.0285 32.5969 28.9709C31.6545 30.4369 30.7121 31.7982 29.1414 31.7982C28.3806 31.7982 27.8901 31.5771 27.3842 31.3491C26.8456 31.1063 26.2897 30.8557 25.3718 30.8557C24.3973 30.8557 23.7994 31.1068 23.2172 31.3512C22.736 31.5533 22.2656 31.7508 21.6021 31.7982C20.1362 31.7982 18.9843 30.2275 18.0419 28.8662C16.0524 26.039 14.5864 20.8034 16.576 17.3479C17.5184 15.6725 19.2985 14.6254 21.288 14.5207C22.1016 14.5207 22.883 14.8432 23.5784 15.1303C24.136 15.3604 24.6383 15.5678 25.0576 15.5678C25.4252 15.5678 25.9043 15.3766 26.4576 15.1559C27.3229 14.8106 28.3697 14.3929 29.4556 14.5207C31.1309 14.6254 32.7016 15.4631 33.644 16.8243Z" />
    </svg>
  );
}
