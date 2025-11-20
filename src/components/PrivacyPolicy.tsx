export default function PrivacyPolicy() {
  return (
    <div className="w-full min-h-screen bg-[#f7f8fa] px-5 py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-10 md:p-16">
        <div className="text-center mb-12 pb-8 border-b border-gray-200">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img
              src="src/assets/logo.png"
              alt="App Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl shadow-lg"
            />
            <h2 className="text-3xl font-bold text-gray-900">Contento</h2>
          </div>

          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-sm">
            Effective as of November 17, 2025
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-blue-500 text-gray-600 text-lg leading-relaxed mb-12">
          At Contento, we respect your privacy. This policy explains how we
          handle your information when you use our mobile application.
        </div>

        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-3">
              <span className="w-7 h-7 bg-blue-500 text-white rounded-md flex items-center justify-center text-sm">
                📧
              </span>
              Information We Collect
            </h2>

            <p className="text-gray-700 mb-3">
              When you create an account, we collect your{" "}
              <span className="bg-yellow-100 px-1.5 py-0.5 rounded font-medium">
                email address
              </span>{" "}
              to provide you with access to Contento's features, manage your
              subscription, and communicate important updates about the service.
            </p>

            <p className="text-gray-700">
              We do <strong>not</strong> collect, store, or track any other
              personal information, browsing data, device information, or usage
              analytics.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-3">
              <span className="w-7 h-7 bg-blue-500 text-white rounded-md flex items-center justify-center text-sm">
                🔒
              </span>
              How We Use Your Information
            </h2>

            <p className="text-gray-700 mb-3">
              Your email address is used solely for:
            </p>

            <ul className="text-gray-700 space-y-1 ml-3">
              <li>• Account authentication and access</li>
              <li>• Managing your subscription (free or premium plans)</li>
              <li>• Sending service-related notifications</li>
              <li>• Responding to support inquiries</li>
            </ul>

            <p className="text-gray-700 mt-3">
              We will never sell, rent, or share your email with third parties
              for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-3">
              <span className="w-7 h-7 bg-blue-500 text-white rounded-md flex items-center justify-center text-sm">
                💳
              </span>
              Subscriptions & Payments
            </h2>

            <p className="text-gray-700">
              Contento offers both{" "}
              <span className="bg-yellow-100 px-1.5 py-0.5 rounded font-medium">
                free and premium subscription plans
              </span>
              . Payment processing is handled securely through Apple's App
              Store. We do not store or have access to your payment information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-3">
              <span className="w-7 h-7 bg-blue-500 text-white rounded-md flex items-center justify-center text-sm">
                🌐
              </span>
              Third-Party Services
            </h2>

            <p className="text-gray-700">
              Contento integrates with platforms like YouTube, Twitter, and
              Reddit to help you save content. These integrations use publicly
              available data and metadata. We do not share your personal
              information with these platforms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-3">
              <span className="w-7 h-7 bg-blue-500 text-white rounded-md flex items-center justify-center text-sm">
                🛡️
              </span>
              Content Policy
            </h2>

            <p className="text-gray-700">
              Contento is designed as a safe, productive tool for saving and
              organizing content. We do not allow, promote, or facilitate access
              to harmful, illegal, or inappropriate content. Users are expected
              to use the app responsibly and in compliance with applicable laws.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-3">
              <span className="w-7 h-7 bg-blue-500 text-white rounded-md flex items-center justify-center text-sm">
                📍
              </span>
              Location Information
            </h2>

            <p className="text-gray-700">
              Contento does <strong>not</strong> collect or track your precise
              location information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-3">
              <span className="w-7 h-7 bg-blue-500 text-white rounded-md flex items-center justify-center text-sm">
                🔐
              </span>
              Data Security
            </h2>

            <p className="text-gray-700">
              We implement industry-standard security measures to protect your
              email address and account information. However, no method of
              transmission over the internet is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-3">
              <span className="w-7 h-7 bg-blue-500 text-white rounded-md flex items-center justify-center text-sm">
                👶
              </span>
              Children's Privacy
            </h2>

            <p className="text-gray-700 mb-3">
              Contento is not intended for children under the age of 13. We do
              not knowingly collect information from children. If you believe a
              child has provided us with personal information, please contact us
              immediately at contento.app.dev@gmail.com.
            </p>

            <p className="text-gray-700">
              Users must be at least 16 years old to consent to data processing,
              or have parental/guardian consent where appropriate.
            </p>
          </div>

          {/* Changes */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-3">
              <span className="w-7 h-7 bg-blue-500 text-white rounded-md flex items-center justify-center text-sm">
                ✏️
              </span>
              Changes to This Policy
            </h2>

            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. We will
              notify you of any significant changes by updating this page. Your
              continued use of Contento after updates constitutes acceptance of
              the revised policy.
            </p>
          </div>

          {/* Rights */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-3">
              <span className="w-7 h-7 bg-blue-500 text-white rounded-md flex items-center justify-center text-sm">
                🚪
              </span>
              Your Rights
            </h2>

            <p className="text-gray-700">
              You can delete your account and associated data at any time
              through the app settings or by contacting us directly. You may
              also uninstall the app using your device's standard uninstall
              process.
            </p>
          </div>
        </div>

        {/* Contact Box */}
        <div className="bg-blue-600 text-white text-center p-10 rounded-xl mt-12">
          <h2 className="text-3xl font-bold mb-2">Questions or Concerns?</h2>
          <p className="text-blue-100 mb-4">
            If you have any questions about this Privacy Policy or how we handle
            your information, we're here to help.
          </p>
          <a
            href="mailto:contento.app.dev@gmail.com"
            className="inline-block px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            contento.app.dev@gmail.com
          </a>
        </div>

        <div className="flex justify-center mt-10">
          <a
            href="/"
            className="
              px-6 py-3 
              bg-gray-900 
              text-white 
              rounded-lg 
              font-semibold 
              hover:bg-gray-800 
              shadow-md 
              transition-all 
              text-center
            "
          >
            ← Go Back Home
          </a>
        </div>

        <div className="text-center mt-16 pt-6 border-t border-gray-200 text-sm text-gray-500">
          © 2025 Contento. Created by Lovenson Beaucicot.
        </div>
      </div>
    </div>
  );
}
