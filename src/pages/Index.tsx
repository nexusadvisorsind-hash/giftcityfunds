// src/pages/Index.tsx
import { Link } from "react-router-dom";
import heroImage from "/lovable-uploads/178cd483-83cc-496d-bd09-df449dbf3c00.png";

function Index(): JSX.Element {
  return (
    <div className="min-h-screen">
      <section className="py-12 md:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">GIFT City Funds</h1>
          <p className="text-lg md:text-2xl mb-6">India's Premier IFSC Investment Platform</p>

          <div className="flex justify-center gap-4">
            <Link to="/investments" className="bg-blue-600 text-white px-4 py-2 rounded">Explore Funds</Link>
            <Link to="/contact" className="border px-4 py-2 rounded">Contact Us</Link>
          </div>
        </div>

        <div className="mt-6">
          <img src={heroImage} alt="GIFT City" className="w-full h-auto object-cover rounded-b-xl" />
        </div>
      </section>
    </div>
  );
}

export default Index;