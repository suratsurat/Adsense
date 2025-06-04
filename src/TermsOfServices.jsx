export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 to-indigo-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-5xl bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-8 md:p-12">

        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-900 text-center mb-6">
          <span className="text-indigo-600">Terms </span> & <span className="text-indigo-600">Conditions </span>
        </h1>

        <p className="text-indigo-700 mb-6 text-sm md:text-base text-center">
          Please read these terms and conditions carefully before using SmartCards Study.
          By accessing or using the service, you agree to be bound by these terms.
        </p>

        <section className="mb-6">
          <h2 className="text-lg font-semibold text-indigo-800 mb-2">1. Acceptance of Terms</h2>
          <p className="text-indigo-700">
            By accessing or using the SmartCards Study application, you agree to comply with
            and be bound by these Terms & Conditions. If you do not agree, please do not use the app.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold text-indigo-800 mb-2">2. Use of the Service</h2>
          <ul className="list-disc list-inside text-indigo-700 space-y-1">
            <li>You agree to use the app for personal, non-commercial purposes only.</li>
            <li>You will not attempt to disrupt, hack, or misuse the application in any way.</li>
            <li>You are responsible for any content you interact with within the app.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold text-indigo-800 mb-2">3. Intellectual Property</h2>
          <p className="text-indigo-700">
            All content, design, and code within SmartCards Study is owned by the creators of the app.
            You may not reproduce, distribute, or modify any part of the app without written permission.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold text-indigo-800 mb-2">4. Limitation of Liability</h2>
          <p className="text-indigo-700">
            SmartCards Study comes with no guarantees. We are not responsible for any issues, losses, or problems that may arise from using the app.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold text-indigo-800 mb-2">5. Changes to Terms</h2>
          <p className="text-indigo-700">
            We may update these Terms & Conditions at any time. Changes will be posted on this page
            with an updated revision date.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold text-indigo-800 mb-2">6. Termination</h2>
          <p className="text-indigo-700">
            We reserve the right to suspend or terminate your access to SmartCards Study at any time,
            without notice or liability, for any reason including breach of these terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold text-indigo-800 mb-2">7. Governing Law</h2>
          <p className="text-indigo-700">
            These terms shall be governed and construed in accordance with the laws of your jurisdiction,
            without regard to its conflict of law provisions.
          </p>
        </section>

        <div className="mt-10 text-center text-indigo-600 text-sm md:text-base italic">
          Please read all terms carefully. Your continued use of SmartCards Study indicates your agreement with these conditions.
        </div>
      </div>
    </div>
  );
}
