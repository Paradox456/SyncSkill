import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-gray-200">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6 text-white">SkillSync Privacy Policy</h1>
        <p className="mb-4 text-sm text-gray-400">Last Updated: July 14, 2025</p>

        <p className="mb-6">
          Your privacy is important to us at SkillSync. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered skill-building platform and related services (collectively, the "Service"). Please read this policy carefully to understand our views and practices regarding your personal data and how we will treat it.
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-white">1. Information We Collect</h2>
          <p>We collect information to provide better services to all our users. The types of information we collect include:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Personal Information:</strong> When you register or sign in, we collect your name, email address, and profile information (e.g., Google account data if you use Google OAuth).</li>
            <li><strong>Usage Data:</strong> We collect information about how you interact with SkillSync, including your learning paths, challenges completed, portfolio content, subscription status, and technical data such as IP address, browser type, and device information.</li>
            <li><strong>Payment Information:</strong> When you subscribe to Pro or Elite tiers, payment details are securely processed by Stripe. We do not store full payment data on our servers.</li>
            <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to improve your experience, analyze usage, and provide personalized content.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-white">2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Provide, maintain, and improve the Service, including personalized AI learning paths and dashboards.</li>
            <li>Process your subscription payments and manage your account.</li>
            <li>Communicate with you about updates, promotions, and important notices.</li>
            <li>Monitor and analyze usage to prevent fraud and ensure security.</li>
            <li>Comply with legal obligations and enforce our Terms of Service.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-white">3. How We Share Your Information</h2>
          <p>We do not sell your personal information. We may share your data in the following situations:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Service Providers:</strong> Trusted third parties who perform services on our behalf, such as Stripe for payments, OpenAI for AI content generation, and MongoDB Atlas for database hosting.</li>
            <li><strong>Legal Compliance:</strong> If required by law or in response to valid legal requests.</li>
            <li><strong>Business Transfers:</strong> In connection with any merger, acquisition, or sale of assets involving SkillSync.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-white">4. Data Security</h2>
          <p>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. This includes encryption, secure authentication (JWT and Google OAuth), and regular security reviews. However, no method of transmission or storage is 100% secure.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-white">5. Your Choices and Rights</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Account Information:</strong> You can access, update, or delete your account information by logging into your SkillSync account.</li>
            <li><strong>Cookies:</strong> You can set your browser to refuse cookies, but some parts of the Service may not function properly.</li>
            <li><strong>Marketing Communications:</strong> You may opt out of promotional emails by following the unsubscribe instructions included in such emails.</li>
            <li><strong>Data Requests:</strong> Depending on your jurisdiction, you may have rights to access, correct, or delete your personal data. Contact us at <a href="mailto:support@skillsync.ai" className="text-blue-400 underline">support@skillsync.ai</a> for requests.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-white">6. Children’s Privacy</h2>
          <p>SkillSync does not knowingly collect or solicit personal information from children under 13 without parental consent. If you are under 13, please do not use the Service. If we learn we have collected data from a child under 13, we will delete it promptly.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-white">7. International Users</h2>
          <p>If you use SkillSync outside the United States, please be aware that your information may be transferred to and processed in the United States, where our servers and databases are located. By using the Service, you consent to this transfer and processing.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-white">8. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of significant changes by email or through the Service. Continued use of SkillSync after changes constitutes acceptance of the updated policy.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2 text-white">9. Contact Us</h2>
          <p>If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
          <address className="not-italic mt-2 text-gray-400">
            <strong>SkillSync</strong><br />
            support@skillsync.ai<br />
            New York, NY, United States
          </address>
        </section>

        <p className="text-center text-gray-500 mb-8">
          By using SkillSync, you acknowledge that you have read, understood, and agreed to this Privacy Policy.
        </p>
      </div>
    </div>
  );
}
