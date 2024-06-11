import Image from "next/image";

const HeroContainer = () => {

  return (
    <div className="hero-container">
      <style jsx>{`
        .hero-container {
          /* Add the gradient background to the hero container if needed */
        }
        .divider {
          background-image: radial-gradient(66.11% 66.11% at 50% 33.89%, rgba(255, 255, 255, 0.4) 0px, rgba(255, 255, 255, 0) 100%), linear-gradient(278.88deg, rgb(255, 255, 255), rgb(102, 227, 255) 28.83%, rgb(167, 135, 255) 56.31%, rgb(255, 200, 117) 86.49%);
          /* Adjust any other necessary styles */
        }
      `}</style>
      <Image
        src="/images/Ring.svg"
        alt="Glowing Orange Circle"
        width={200}
        height={200}
      />
      <div className="container absolute flex flex-col items-center text-center z-10">
        <h1 className="fade-in">PETTER ÅNDERBAKK</h1>
        <h2 className="fade-in">FRONT-END DEVELOPER</h2>
        <Image
          src="/images/Petter.jpg"
          alt="Image of Petter smiling"
          className="fade-in petter-image"
          width={200}
          height={200}
        />
        <span className="divider fade-in h-[4px] w-[180px] mt-8 mb-4 rounded-full"></span>
        <p className="fade-in">Oslo, Norway</p>
      </div>
    </div>
  );
};

export default HeroContainer;
