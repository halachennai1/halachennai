import React from 'react';

const LegalTermsPage = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-black">AGREEMENT TO OUR LEGAL TERMS</h2>
      <p className="text-lg text-black">
        We are Hala Chennai ("Company", "we", "us", or "our"), a company registered in India at
        Azad nagar 1 street Aminjikari, Chennai, Tamil Nadu 600029.
      </p>
      <p className="text-lg text-black">
        We operate the website{' '}
        <a
          href="https://halachennai-frontend-o6lj.vercel.app/"
          className="text-blue-500 underline"
        >
          https://halachennai-frontend-o6lj.vercel.app/
        </a>{' '}
        (the "Site"), as well as any other related products and services that refer or link to these
        legal terms (the "Legal Terms") (collectively, the "Services").
      </p>
      <p className="text-lg text-black">
        You can contact us by phone at 9445358569, email at{' '}
        <a href="mailto:halachennai@gmail.com" className="text-blue-500 underline">
          halachennai@gmail.com
        </a>
        , or by mail to Azad nagar 1 street Aminjikari, Chennai, Tamil Nadu 600029, India.
      </p>
      <p className="text-lg text-black">
        These Legal Terms constitute a legally binding agreement made between you, whether
        personally or on behalf of an entity ("you"), and Hala Chennai, concerning your access to and
        use of the Services. You agree that by accessing the Services, you have read, understood,
        and agreed to be bound by all of these Legal Terms. <b>IF YOU DO NOT AGREE WITH ALL OF
        THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE
        SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.</b>
      </p>
      <p className="text-lg text-black">
        We will provide you with prior notice of any scheduled changes to the Services you are
        using. The modified Legal Terms will become effective upon posting or notifying you by
        halachennai@gmail.com, as stated in the email message. By continuing to use the Services
        after the effective date of any changes, you agree to be bound by the modified terms.
      </p>
      <p className="text-lg text-black">
        The Services are intended for users who are at least 18 years old. Persons under the age of 18
        are not permitted to use or register for the Services.
      </p>
      <p className="text-lg text-black">We recommend that you print a copy of these Legal Terms for your records.</p>
      
      <h2 className="text-xl font-bold mt-6 text-black">TABLE OF CONTENTS</h2>
      <ul className="list-disc ml-6 text-lg text-black">
        <li>OUR SERVICES</li>
        <li>INTELLECTUAL PROPERTY RIGHTS</li>
        <li>USER REPRESENTATIONS</li>
        <li>USER REGISTRATION</li>
        <li>PRODUCTS</li>
        <li>PURCHASES AND PAYMENT</li>
        <li>RETURN POLICY</li>
        <li>PROHIBITED ACTIVITIES</li>
        <li>USER GENERATED CONTRIBUTIONS</li>
        <li>CONTRIBUTION LICENCE</li>
        <li>GUIDELINES FOR REVIEWS</li>
        <li>SERVICES MANAGEMENT</li>
        <li>PRIVACY POLICY</li>
        <li>TERM AND TERMINATION</li>
        <li>MODIFICATIONS AND INTERRUPTIONS</li>
        <li>GOVERNING LAW</li>
        <li>DISPUTE RESOLUTION</li>
        <li>CORRECTIONS</li>
        <li>DISCLAIMER</li>
        <li>LIMITATIONS OF LIABILITY</li>
        <li>INDEMNIFICATION</li>
        <li>USER DATA</li>
        <li>ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</li>
        <li>SMS TEXT MESSAGING</li>
        <li>MISCELLANEOUS</li>
        <li>CONTACT US</li>
      </ul>

      <h2 className="text-xl font-bold mt-6 text-black">OUR SERVICES</h2>
      <p className="text-lg text-black">
        The information provided when using the Services is not intended for distribution to or use by
        any person or entity in any jurisdiction or country where such distribution or use would be
        contrary to law or regulation or which would subject us to any registration requirement within
        such jurisdiction or country. Accordingly, those persons who choose to access the Services
        from other locations do so on their own initiative and are solely responsible for compliance with
        local laws, if and to the extent local laws are applicable.
      </p>

      <h2 className="text-xl font-bold mt-6 text-black">INTELLECTUAL PROPERTY RIGHTS</h2>
      <p className="text-lg text-black">
        We are the owner or the licensee of all intellectual property rights in our Services, including all
        source code, databases, functionality, software, website designs, audio, video, text,
        photographs, and graphics in the Services (collectively, the "Content"), as well as the
        trademarks, service marks, and logos contained therein (the "Marks"). Our Content and Marks
        are protected by copyright and trademark laws and treaties around the world.
      </p>
      <p className="text-lg text-black">
        The Content and Marks are provided in or through the Services "AS IS" for your personal,
        non-commercial use only. Subject to your compliance with these Legal Terms, we grant you a
        non-exclusive, non-transferable, revocable licence to access the Services and download or
        print a copy of any portion of the Content to which you have properly gained access solely for
        your personal, non-commercial use.
      </p>

      {/* Add all other sections here in a similar structured format */}
      
      <h2 className="text-xl font-bold mt-6 text-black">CONTACT US</h2>
      <p className="text-lg text-black">
        In order to resolve a complaint regarding the Services or to receive further information
        regarding use of the Services, please contact us at:
      </p>
      <address className="text-lg text-black">
        Hala Chennai<br />
        Azad nagar 1 street, Aminjikari, Chennai, Tamil Nadu 600029, India<br />
        Phone: 9445358569<br />
        Email: <a href="mailto:halachennai@gmail.com" className="text-blue-500 underline">halachennai@gmail.com</a>
      </address>
    </div>
  );
};

export default LegalTermsPage;
