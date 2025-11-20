export default function ThreeImageLayout() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* IMAGE 1 */}
        <img
          src="images/img1.png"
          className="w-full h-64 object-cover rounded-[30px]"
          alt="Image 1"
        />

        {/* IMAGE 2 */}
        <img
          src="images/img2.png"
          className="w-full h-64 object-cover rounded-[30px]"
          alt="Image 2"
        />

        {/* IMAGE 3 */}
        <img
          src="images/img3.png"
          className="w-full h-64 object-cover rounded-[30px]"
          alt="Image 3"
        />

      </div>
    </div>
  );
}
