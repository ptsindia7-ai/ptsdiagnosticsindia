import ImageSlider from "../components/ImageSlider";
import WhyChooseUs from "../components/WhyChooseUs";
import UpcomingProducts from "../components/UpcomingProducts";
import WhyPartnerUs from "../components/WhyPartnerUs";

export default function MergedSections() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="w-full bg-gradient-to-b from-white via-white to-red-50/30 pt-10 pb-10">
        <div className="max-w-5xl mx-auto text-center px-4">
          {/* HEADING */}
          <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 leading-tight">
            Innovating Point-of-Care with <br /> People, Technology, and Service
          </h1>

          {/* SUBTEXT */}
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            PTS Diagnostics empowers patients and healthcare professionals with
            the right information at the right time to make the right decisions
          </p>

          {/* CTA BUTTON */}
          <button className="mt-8 bg-[#DF1931] hover:bg-[#DF1931] text-white px-8 py-3 rounded-lg font-medium transition">
            Explore Our Products
          </button>
        </div>

        <div className="w-full max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* IMAGE 1 */}
            <img
              src="about/abt-hero1.png"
              className="w-full h-64 object-cover rounded-[30px]"
              alt="Image 1"
            />

            {/* IMAGE 2 */}
            <img
              src="about/abt-hero2.png"
              className="w-full h-64 object-cover rounded-[30px]"
              alt="Image 2"
            />

            {/* IMAGE 3 */}
            <img
              src="about/abt-hero3.png"
              className="w-full h-64 object-cover rounded-[30px]"
              alt="Image 3"
            />
          </div>
        </div>
      </section>

      <section className="relative w-full py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-20 relative z-10">
          {/* LEFT IMAGE */}
          <img
            src="about/abt-who.png"
            alt="Healthcare professionals"
            className="w-full h-full object-cover rounded-3xl shadow-sm"
          />

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-3 leading-snug">
              Who We Are
            </h2>

            <p className="text-gray-600 mt-5 leading-relaxed">
              PTS Diagnostics is an innovative point-of-care diagnostics
              solutions provider dedicated to empowering both patients and
              healthcare professionals. Our name represents the three pillars
              that drive our long-term success: People, Technology, and Service.
              Headquartered in Whitestown, Indiana, we design, manufacture, and
              market solutions that serve healthcare providers and patients
              across hundreds of countries worldwide. With facilities in
              Indianapolis, IN, and Sunnyvale, CA, plus sales offices in North
              America, Europe, Latin America, and the Pacific Rim, our reach is
              truly global.
            </p>

            <button className="mt-7 bg-[#DF1931] hover:bg-[#DF1931] text-white px-7 py-3 rounded-lg font-medium transition">
              Know More
            </button>
          </div>
        </div>
      </section>

      {/* IMPACT SECTION */}

      <section className="relative w-full bg-[#DF1931] py-12 text-white overflow-hidden">
        {/* BOTTOM-LEFT DECOR IMAGE */}
        <img
          src="/images/vector4.png" // <-- Replace with your actual image filename
          alt="decor"
          className="absolute bottom-0 left-0 w-50 md:w-40 pointer-events-none select-none"
        />

        {/* CONTENT */}
        <div className="max-w-7xl mx-auto text-center px-6 relative z-10">
          {/* TITLE */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-12">
            Our Global Impact
          </h2>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-0">
            <div>
              <h3 className="text-6xl font-semibold">135+</h3>
              <p className="text-xl mt-2 mr-8 opacity-90">Countries</p>
            </div>

            <div>
              <h3 className="text-6xl font-semibold">2.5M+</h3>
              <p className="text-xl mt-2  mr-4 opacity-90">Devices Deployed</p>
            </div>

            <div>
              <h3 className="text-6xl font-semibold">500K+</h3>
              <p className="text-xl mt-2 mr-20 opacity-90">Tests Daily</p>
            </div>

            <div>
              <h3 className="text-6xl font-semibold">98.7%</h3>
              <p className="text-xl mt-2 mr-6 opacity-90">Accuracy Rate</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-white">
        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Our Journey
          </h2>

          <p className="text-gray-600 whitespace-nowrap">
            From groundbreaking innovations to global milestones, our journey
            reflects a legacy of care and progress.
          </p>
        </div>

        {/* IMAGE */}
        <div className="mt-12 flex justify-center">
          <img
            src="/images/journey.png" // <-- Replace with your actual file path
            alt="Our Journey Timeline"
            className="w-full max-w-7xl object-contain"
          />
        </div>
      </section>

      <section className="w-full py-16 px-4 md:px-10 bg-white">
        {/* MAIN HEADING */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#DF1931] mb-12">
          One Sinocare
        </h2>

        {/* REUSABLE CARD STYLE */}
        {/* Use this className for all red boxes */}

        {/* MISSION */}
        <div className="bg-[#DF1931] text-white rounded-3xl p-8 md:p-10 shadow-lg border-b-8 border-blue-400 max-w-xl mx-auto mb-10">
          <h3 className="text-2xl font-semibold text-center mb-4">Mission</h3>
          <p className="text-center leading-relaxed">
            Guided by love with a commitment to global access and health
            outcomes, we deliver innovative, high-quality solutions for people
            living with diabetes and related chronic diseases.
          </p>
        </div>

        {/* VISION */}
        <div className="bg-[#DF1931] text-white rounded-3xl p-8 md:p-10 shadow-lg border-b-8 border-blue-400 max-w-3xl mx-auto mb-10">
          <h3 className="text-2xl font-semibold text-center mb-4">Vision</h3>
          <p className="text-center leading-relaxed">
            Establishing ourselves as a leader in the delivery of digitally
            enabled products which improve quality of life for people with
            diabetes and related chronic diseases through affordable, accessible
            technologies.
          </p>
        </div>

        {/* CORE VALUES */}
        <div className="bg-[#DF1931] text-white rounded-3xl p-8 md:p-10 shadow-lg border-b-8 border-blue-400 max-w-5xl mx-auto mb-10">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Core Values
          </h3>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {/* COLUMN 1 */}
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-xl">✚</span> Commitment to Customers
              </h4>
              <p>
                Commitment to enabling our customers to lead healthier lives
                through high-quality, affordable, and easy to use products and
                services.
              </p>
            </div>

            {/* COLUMN 2 */}
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-xl">✚</span> Commitment to Employees
              </h4>
              <p>
                Provide a caring and fulfilling environment which values the
                individual and fosters professional growth.
              </p>
            </div>

            {/* COLUMN 3 */}
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-xl">✚</span> Commitment to Partners,
                Society, and Shareholders
              </h4>
              <p>
                Provide a caring and fulfilling environment which values the
                individual and fosters professional growth.
              </p>
            </div>
          </div>
        </div>

        {/* EMPLOYEE BEHAVIORAL MODEL */}
        <div className="bg-[#DF1931] text-white rounded-3xl p-8 md:p-10 shadow-lg border-b-8 border-blue-400 max-w-7xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Employee Behavioral Model
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Column 1 */}
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-xl">✚</span> Customer First –
                Conscientiousness
              </h4>
              <ul className="list-disc ml-5 space-y-1">
                <li>Understand customer needs through active listening</li>
                <li>Have a sense of urgency</li>
                <li>Learn from mistakes</li>
                <li>Have a commitment to excellence</li>
                <li>Committed to on-time deliveries</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-xl">✚</span> Embracing Change –
                Collaboration
              </h4>
              <ul className="list-disc ml-5 space-y-1">
                <li>Be open to change</li>
                <li>Challenges bring growth</li>
                <li>
                  Have a mindset that Sinocare Group companies are one team
                </li>
                <li>Be open to other points of view</li>
                <li>Build cross-functional relationships</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-xl">✚</span> Commitment to Partners,
                Society, and Shareholders
              </h4>
              <ul className="list-disc ml-5 space-y-1">
                <li>Never compromise on quality</li>
                <li>
                  Continuously develop new products, services, and solutions
                </li>
                <li>Have a continuous improvement mindset</li>
                <li>
                  Always exhibit professionalism with high ethical standards
                </li>
                <li>Strive to exceed expectations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <div>
            <img
              src="/images/who.png"
              alt="Laboratory"
              className="w-full h-[500px] object-cover rounded-[40px]"
            />
          </div>

          {/* RIGHT FORM */}
          <div className="w-full">
            {/* Small Heading */}
            <h3 className="text-sm font-semibold text-[#DF1931] uppercase flex items-center gap-2">
              Who We Are
              <img src="/images/plus.svg" alt="plus" className="w-3 h-3" />
            </h3>

            {/* Main Heading */}
            <h2 className="text-4xl font-semibold text-black mt-2">
              Let’s Talk Diagnostics
            </h2>

            {/* FORM */}
            <form className="mt-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-4 bg-[#F7F7F7] rounded-lg outline-none"
                />
                <input
                  type="text"
                  placeholder="Whatsapp Number"
                  className="w-full p-4 bg-[#F7F7F7] rounded-lg outline-none"
                />
              </div>

              <input
                type="email"
                placeholder="E-mail"
                className="w-full p-4 bg-[#F7F7F7] rounded-lg outline-none"
              />

              <input
                type="text"
                placeholder="Your Address"
                className="w-full p-4 bg-[#F7F7F7] rounded-lg outline-none"
              />

              <input
                type="text"
                placeholder="Product of Interest"
                className="w-full p-4 bg-[#F7F7F7] rounded-lg outline-none"
              />

              {/* BUTTON */}
              <button
                type="submit"
                className="mt-4 bg-[#DF1931] text-white px-10 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-[#c31329] transition"
              >
                Send Message
                <span className="text-lg">›</span>
              </button>
            </form>
          </div>
        </div>

        {/* BOTTOM-RIGHT DECORATIVE SHAPE (Optional) */}
        <img
          src="/images/vector2.png"
          alt="decor"
          className="absolute bottom-0 right-0 w-40 pointer-events-none"
        />
      </section>
      <WhyPartnerUs />
    </>
  );
}
