export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 to-indigo-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-5xl bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-8 md:p-12">

        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-900 text-center mb-6">
          Privacy <span className="text-indigo-600">Policy</span>
        </h1>

        <p className="text-indigo-700 mb-4 text-sm md:text-base">
          At <strong>SmartCards Study</strong>, your privacy is very important to us. This Privacy Policy explains what information we collect and how we use it when you use our web application.
        </p>

        <section className="mb-6">
          <h2 className="text-lg font-semibold text-indigo-800 mb-2">1. Information We Do Not Collect</h2>
          <ul className="list-disc list-inside text-indigo-700 space-y-1">
            <li>We do <strong>not</strong> collect any personal information such as names, emails, or contact details.</li>
            <li>We do <strong>not</strong> require any login or registration.</li>
            <li>We do <strong>not</strong> track your usage or browsing behavior.</li>
            <li>We do <strong>not</strong> use cookies or any tracking technologies.</li>
            <li>All flashcard data is stored locally in the app and no data is sent to any external servers.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold text-indigo-800 mb-2">2. How We Use Your Data</h2>
          <ul className="list-disc list-inside text-indigo-700 space-y-1">
            <li>Since we do not collect any personal data, there is no data usage for marketing or analytics.</li>
            <li>Your interaction with the flashcards remains private on your device.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold text-indigo-800 mb-2">3. Third-Party Services</h2>
          <p className="text-indigo-700">
            We do not integrate any third-party services that collect your data.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold text-indigo-800 mb-2">4. Data Security</h2>
          <ul className="list-disc list-inside text-indigo-700 space-y-1">
            <li>As no personal data is collected or stored, there is minimal risk of data breach.</li>
            <li>All content is delivered directly in your browser.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold text-indigo-800 mb-2">5. Changes to This Policy</h2>
          <ul className="list-disc list-inside text-indigo-700 space-y-1">
            <li>We may update this Privacy Policy occasionally to reflect any changes in our practices.</li>
            <li>We encourage you to review this policy periodically.</li>
          </ul>
        </section>

        <section className="text-center mt-10 border-t border-indigo-200 pt-6 text-indigo-700">
          <p className="text-sm md:text-base italic text-indigo-600">
            For any questions regarding this Privacy Policy, please reach out through the official support channel.
          </p>
        </section>
      </div>
    </div>
  );
}
