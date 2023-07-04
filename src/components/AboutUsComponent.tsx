import Chicken from "../assets/images/raw-chicken.jpg";

export default function AboutUsComponent() {
  return (
    <div className="relative mb-[70px]">
      <div
        className={`flex justify-center items-center flex-col w-auto h-[100vh] md:h-[80vh] bg-cover brightness-40 `}
        style={{
          backgroundImage: `url(${Chicken})`,
        }}
      >
        <div
          className={`left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center`}
        >
          <h1
            className={`font-ribeye text-[52px] text-white text-center animate-slideUp pt-10`}
          >
            About Us
          </h1>
          <p
            className={`w-[] pl-6 pr-6 text-center lg:w-[70vw] text-white font-dmsans md:text-lg`}
          >
            At Tres Pollo's, we are passionate about providing the highest
            quality poultry products while maintaining a strong commitment to
            animal welfare and sustainable farming practices. With years of
            experience in the industry, we have developed a deep understanding
            of the needs and preferences of our customers. Our dedicated team of
            skilled professionals works tirelessly to ensure that our poultry is
            raised in a healthy and natural environment, free from antibiotics
            and hormones. We take pride in nurturing our birds with utmost care,
            allowing them to roam freely and feeding them a nutritious diet that
            results in flavorful, tender meat and eggs. We believe in
            transparency and integrity, and we strive to build lasting
            relationships with our customers based on trust and quality. When
            you choose Tres Pollo's, you can be confident that you are making a
            responsible choice for your family's health and supporting a
            sustainable agricultural system.
          </p>
        </div>
      </div>
    </div>
  );
}
