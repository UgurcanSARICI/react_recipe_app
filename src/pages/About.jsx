import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen">
      <Navbar />
      <div>
        <p className="text-center text-3xl mt-2 text-amber-500 underline">
          About This Page
        </p>
        <p className="text-center text-xl mt-3 text-white">
          NOTE: Some informations are missing because of the API. If you can't
          see the page properly please go back and try again.
        </p>
        <p className="text-center text-2xl mt-6 text-amber-500 underline">
          Tools
        </p>
        <ul className="text-white text-center mt-3">
          <li>REACT</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JAVASCRIPT</li>
          <li>AXIOS</li>
          <li>REACT ROUTER DOM</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
