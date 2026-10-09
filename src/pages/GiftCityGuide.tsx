import { Link } from "react-router-dom";
import { GuidePage, h2, p, a, ul, table, th, td, type Faq } from "@/components/GuidePage";

const faqs: Faq[] = [
  { q: "Which companies are operating in GIFT City?", a: "Companies operating in GIFT City include Indian and foreign banks, fund managers, insurers, brokers, fintech firms and technology companies such as Cognizant. IFSCA reported 939 registered entities as of June 2025." },
  { q: "Is there an IT park in GIFT City?", a: "GIFT City is not a standalone IT park, but its domestic area hosts IT and technology firms alongside financial companies, with modern office buildings and shared infrastructure." },
  { q: "Is there a Google office in GIFT City?", a: "Google announced plans in 2023 to open a global fintech operations centre in GIFT City." },
  { q: "What is the GIFT City real estate market like: residential projects and property prices?", a: "GIFT City real estate includes residential projects, flats for sale and for rent, commercial space and office space for rent in the domestic area. Prices change; check RERA registration and current listings." },
  { q: "Are there flats for sale and properties in GIFT City?", a: "Yes. Several developers have launched residential properties in GIFT City, including high-rise apartments. Check the project's RERA registration and take independent advice before buying." },
  { q: "Can I rent a flat, office space or commercial space in GIFT City?", a: "Yes. Rental flats and office space for rent in GIFT City are available through developers and property portals; commercial space in the SEZ is meant for IFSC units." },
  { q: "Are there hotels in GIFT City?", a: "Yes. GIFT City has business hotels, including international brands, serving visitors to the financial centre." },
  { q: "Who are the top developers in GIFT City?", a: "Developers with projects in GIFT City include Sobha and Brigade, among others. This site does not rank or recommend developers." },
  { q: "What are GIFT City's smart city features?", a: "GIFT City's smart city features include district cooling, an underground utility tunnel, automated waste collection and planned power and water supply." },
  { q: "What is the GIFT City liquor policy, and is an alcohol permit needed?", a: "Since December 2025, visitors from outside Gujarat do not need a temporary alcohol permit for designated facilities in GIFT City; a valid photo ID is enough. Employees use a liquor access permit." },
  { q: "What is the GIFT City transport connectivity?", a: "GIFT City connects to Ahmedabad and Gandhinagar by road and by the Ahmedabad Metro's GIFT City station, and is about 12 km from Ahmedabad airport." },
  { q: "GIFT City jobs and vacancies: finance, fintech and IT jobs", a: "GIFT City jobs include finance, fintech and IT roles at banks, fund managers, insurers and technology firms. Vacancies are listed on company career pages and job portals." },
  { q: "How does GIFT City club membership work?", a: "The GIFT City club offers membership for residents and companies in GIFT City, with sports, dining and event facilities. Contact the club for current membership terms." },
  { q: "Who owns GIFT City?", a: "GIFT City is developed by Gujarat International Finance Tec-City Company Limited (GIFTCL), a company of the Government of Gujarat. The state bought IL&FS's 50% stake in 2020." },
  { q: "Where is GIFT City located?", a: "In Gandhinagar district, Gujarat, on the banks of the Sabarmati river, about 12 km from Ahmedabad's Sardar Vallabhbhai Patel International Airport." },
  { q: "Is liquor allowed in GIFT City?", a: "Gujarat is a dry state, but since 2023 GIFT City has had a limited exemption. Under rules eased in December 2025, employees with a liquor access permit and visitors from outside Gujarat showing valid photo ID can drink at designated facilities in GIFT City. Rules change; check the latest notification before you go." },
  { q: "How do I get to GIFT City by metro?", a: "GIFT City has its own station on the Ahmedabad Metro network, linking it with Ahmedabad and Gandhinagar. Further extensions, including an airport link, have been proposed." },
  { q: "Are there jobs in GIFT City?", a: "Yes. Banks, fund managers, insurers, fintech and technology firms, and global in-house centres in GIFT City hire for finance, compliance, operations and IT roles. Company career pages and job portals list current vacancies." },
  { q: "Can I buy property in GIFT City?", a: "There are residential and commercial projects in GIFT City's domestic area from several developers. Prices and rules change; check the project's RERA registration and take independent advice. This site does not cover property investment." },
];

const GiftCityGuide = () => (
  <GuidePage
    path="/gift-city-guide"
    headline="GIFT City Guide: Location, Ownership, Connectivity, Living and Working"
    seoTitle="GIFT City Guide: Location, Metro, Liquor Rules, Jobs & Property"
    description="GIFT City, Gandhinagar, in facts: who owns it, size, location and metro, liquor rules, hotels, jobs and property, with links to official sources."
    crumb="GIFT City Guide"
    datePublished="2026-10-09"
    faqs={faqs}
    sources={["giftCity", "ifsca"]}
  >
    <p className={p}>
      <strong className="text-primary">The short answer.</strong> GIFT City (Gujarat International Finance Tec-City) is a planned business district of about 886 acres in Gandhinagar district, Gujarat, developed by a Government of Gujarat company. About 261 acres form a Special Economic Zone that contains India's International Financial Services Centre; the rest is a domestic area with offices, housing, hotels and amenities. This guide covers the place itself. For investing, start with <Link to="/what-is-gift-city" className={a}>What is GIFT City</Link>.
    </p>

    <h2 className={h2}>Key facts</h2>
    <div tabIndex={0} role="region" aria-label="Table, scroll sideways to see more" className="overflow-x-auto">
      <table className={table}>
        <tbody>
          <tr><td className={th}>Full name</td><td className={td}>Gujarat International Finance Tec-City</td></tr>
          <tr><td className={th}>Developer and owner</td><td className={td}>Gujarat International Finance Tec-City Company Ltd (GIFTCL), Government of Gujarat</td></tr>
          <tr><td className={th}>Area</td><td className={td}>About 886 acres (359 hectares); about 261 acres of SEZ, the rest domestic tariff area</td></tr>
          <tr><td className={th}>Location</td><td className={td}>Gandhinagar district, on the Sabarmati river; about 12 km from Ahmedabad airport</td></tr>
          <tr><td className={th}>Landmark buildings</td><td className={td}>GIFT One and GIFT Two towers</td></tr>
          <tr><td className={th}>Metro</td><td className={td}>GIFT City station on the Ahmedabad Metro network</td></tr>
          <tr><td className={th}>Regulator for finance</td><td className={td}><Link to="/what-is-ifsca" className={a}>IFSCA</Link></td></tr>
          <tr><td className={th}>Official website</td><td className={td}><a href="https://www.giftgujarat.in/" target="_blank" rel="noopener noreferrer" className={a}>giftgujarat.in</a></td></tr>
        </tbody>
      </table>
    </div>

    <h2 className={h2}>Master plan and future projects</h2>
    <p className={p}>
      GIFT City was announced in 2007 and designed as a smart city with district cooling, underground utility tunnels and automated waste collection. Expansion plans published in recent years would take it well beyond its original 886 acres. Check the official website for the latest master plan and project news.
    </p>

    <h2 className={h2}>Living and working in GIFT City</h2>
    <ul className={ul}>
      <li><strong className="text-primary">Jobs:</strong> finance, compliance, fund operations, banking, insurance, fintech and IT roles at the firms based there.</li>
      <li><strong className="text-primary">Property:</strong> residential and commercial projects in the domestic area. Check RERA registration; this site does not give property advice.</li>
      <li><strong className="text-primary">Hotels and clubs:</strong> GIFT City has business hotels and a club with membership for residents and companies.</li>
      <li><strong className="text-primary">Liquor rules:</strong> a limited exemption from Gujarat's prohibition at designated facilities; see the FAQ below.</li>
    </ul>

    <h2 className={h2}>Latest GIFT City news</h2>
    <p className={p}>
      For investor-relevant changes, such as new funds, tax rules and regulations, see <Link to="/insights" className={a}>Insights</Link>. For official announcements, see the IFSCA and GIFT City websites.
    </p>
  </GuidePage>
);

export default GiftCityGuide;
