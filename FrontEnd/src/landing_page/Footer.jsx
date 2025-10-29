import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
} from "lucide-react"; 

const footerLinks = [
  {
    title: "Account",
    links: [
      "Open demat account",
      "Minor demat account",
      "NRI demat account",
      "Commodity",
      "Dematerialisation",
      "Fund transfer",
      "MTF",
      "Referral program",
    ],
  },
  {
    title: "Support",
    links: [
      "Contact us",
      "Support portal",
      "How to file a complaint?",
      "Status of your complaints",
      "Bulletin",
      "Circular",
      "Z-Connect blog",
      "Downloads",
    ],
  },
  {
    title: "Company",
    links: [
      "About",
      "Philosophy",
      "Press & media",
      "Careers",
      "Zerodha Cares (CSR)",
      "Zerodha.tech",
      "Open source",
    ],
  },
  {
    title: "Quick links",
    links: [
      "Upcoming IPOs",
      "Brokerage charges",
      "Market holidays",
      "Economic calendar",
      "Calculators",
      "Markets",
      "Sectors",
    ],
  },
];

const Footer = () => {
  const Logo = () => (
    <div className="flex items-center">
      <img src="media/logo.svg" alt="Zerodha Logo" className="h-6 w-auto" />
    </div>
  );

  return (
    <footer className="bg-white border-t border-gray-100 mt-12 pt-12 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="space-y-4 md:col-span-1">
            <Logo />
            <p className="text-sm text-gray-500">
              © 2010 - 2025, Zerodha Broking Ltd. <br /> All rights reserved.
            </p>

            <div className="flex items-center space-x-4 pt-2">
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/payaljat00"
                className="text-gray-500 hover:text-blue-600"
              >
                <Instagram size={20} />
              </a>
\              <a
                href="https://www.linkedin.com/in/payal-jat"
                className="text-gray-500 hover:text-blue-600"
              >
                <Linkedin size={20} />
              </a>
            </div>

            <div className="md:hidden border-t border-gray-200 py-2"></div>

            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://www.youtube.com/@its_payal_3"
                className="text-gray-500 hover:text-blue-600"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://wa.me/919755322184"
                className="text-gray-500 hover:text-blue-600"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title} className="space-y-4">
              <h4 className="font-semibold text-base text-gray-800">
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.links.map((linkName) => (
                  <li key={linkName}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-blue-600 hover:underline transition-colors duration-150"
                    >
                      {linkName}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
        

          <div className="text-xs text-gray-500 leading-relaxed bg-gray-50 p-6 rounded-xl border border-gray-100">
            <p className="mb-4">
              Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration
              no.: INZ000031633 | Depository services through Zerodha Broking
              Ltd. – SEBI Registration no.: IN-DP-431-2019 | Commodity Trading
              through Zerodha Commodities Pvt. Ltd. MCX: 46025 | Registered
              Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars
              Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
              Bengaluru - 560078, Karnataka, India.
            </p>
            <p className="mb-4">
              For any complaints pertaining to securities broking please write
              to{" "}
              <a
                href="mailto:complaints@zerodha.com"
                className="text-blue-600 hover:underline"
              >
                complaints@zerodha.com
              </a>
              , for DP related to{" "}
              <a
                href="mailto:dp@zerodha.com"
                className="text-blue-600 hover:underline"
              >
                dp@zerodha.com
              </a>
              . Please ensure you carefully read the Risk Disclosure Document as
              prescribed by SEBI | ICF
            </p>
            <p className="mb-4">
              Procedure to file a complaint on{" "}
              <a href="#" className="text-blue-600 hover:underline font-medium">
                SEBI SCORES
              </a>
              : Register on SCORES portal. Mandatory details for filing
              complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail
              ID. Benefits: Effective Communication, Speedy redressal of the
              grievances
            </p>
            <p className="mb-4 text-blue-600 font-medium">
              Smart Online Dispute Resolution | Grievances Redressal Mechanism
            </p>
            <p className="mb-4">
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>
            <p className="mb-4">
              Attention Investors: 1) Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository
              system w.e.f September 01, 2020. 2) Update your e-mail and phone
              number with your stock broker / depository participant and receive
              OTP directly from depository on your e-mail and/or mobile number
              to create pledge. 3) Check your securities / MF / bonds in the
              consolidated account statement issued by NSDL/CDSL every month.
            </p>
            <p>
              India's largest broker based on network as per{" "}
              <a href="#" className="text-blue-600 hover:underline font-medium">
                NSE broker factsheet
              </a>
            </p>
            <p>
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to authorize your bank to make payment in
              case of allotment. In case of non allotment the funds will remain
              in your bank account. As a business we don't give stock tips, and
              have not authorized anyone to trade on behalf of others. If you
              find anyone claiming to be part of Zerodha and offering such
              services, please <a href="#" className="text-blue-600 hover:underline font-medium">
                create a ticket here
              </a>
            </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-gray-500 mt-6">
            <a href="#" className="hover:text-blue-600 transition-colors">
              NSE
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              BSE
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              MCX
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Terms & conditions
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Policies & procedures
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Privacy policy
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Disclosure
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              For investor's attention
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Investor charter
            </a>
          </div>
          </div>
        </div>

        <div className="pb-16"></div>
      </div>
    </footer>
  );
};

export default Footer;
