import Market from "../assets/images/market.jpg";

export default function ServicesComponent() {
  return (
    <div className="relative mb-[70px]">
      <div
        className={`flex justify-center items-center flex-col w-auto h-[100vh] md:h-[80vh] bg-cover brightness-40`}
        style={{
          backgroundImage: `url(${Market})`,
        }}
      >
        <div
          className={`left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center`}
        >
          <h1
            className={`font-ribeye text-[52px] text-white text-center animate-slideUp pt-10`}
          >
            Services
          </h1>
          <p
            className={`w-[] pl-6 pr-6 text-center lg:w-[70vw] text-white font-dmsans md:text-lg`}
          >
            At Tres Pollo's, we prioritize the safety and hygiene of our
            products. Our state-of-the-art facility boasts a HACCP (Hazard
            Analysis Critical Control Point) compliant slaughtering house,
            ensuring the highest standards of cleanliness, sanitation, and
            quality control. We adhere to rigorous protocols to guarantee that
            our poultry products meet and exceed industry regulations, providing
            you with peace of mind and confidence in every purchase.
          </p>
          <br />
          <p
            className={`w-[] pl-6 pr-6 text-center lg:w-[70vw] text-white font-dmsans md:text-lg`}
          >
            We understand the importance of timely delivery, and that's why we
            offer reliable and prompt delivery services. Once your order is
            placed, our dedicated team springs into action, carefully packaging
            your chosen products to maintain their freshness and flavor. We
            leverage a well-coordinated logistics network to ensure that your
            order reaches your doorstep in optimal condition, ready to be
            utilized in your culinary endeavors.
          </p>
        </div>
      </div>
    </div>
  );
}
