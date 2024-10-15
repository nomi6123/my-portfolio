import Aboutme from "../assets/image.png";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="contanier mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={Aboutme}
            alt=""
            className="w-72 h-80 rounded-[40px] object-cover  object-center mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              As a passionate frontend developer, I craft seamless, responsive
              web experiences that merge creativity with functionality. With a
              keen eye for design and a love for clean code, I bring ideas to
              life through intuitive, user-centric interfaces. My portfolio is a
              testament to my dedication to building elegant solutions that not
              only look beautiful but also deliver exceptional performance
              across all devices.
            </p>
            <div className="space-y-4">
                {/* html and css */}
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  HTML & CSS
                </label>
                <div className="grow rounded-full h-2.5 bg-gray-800">
                  <div
                    className="bg-gradient-to-r from-green-300 to-blue-500 h-2.5
                rounded-full transform transition-transfrom duration-300 hover:scale-105 w-[83%]
                "
                  ></div>

                </div>
              </div>
              {/* react js */}
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  React Js
                </label>
                <div className="grow rounded-full h-2.5 bg-gray-800">
                  <div
                    className="bg-gradient-to-r from-green-300 to-blue-500 h-2.5
                rounded-full transform transition-transfrom duration-300 hover:scale-105 w-[90%]
                "
                  ></div>

                </div>
              </div>
              {/* next js */}
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  Next Js
                </label>
                <div className="grow rounded-full h-2.5 bg-gray-800">
                  <div
                    className="bg-gradient-to-r from-green-300 to-blue-500 h-2.5
                rounded-full transform transition-transfrom duration-300 hover:scale-105 w-[75%]
                "
                  ></div>

                </div>
              </div>
              {/* node js */}
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  Node Js
                </label>
                <div className="grow rounded-full h-2.5 bg-gray-800">
                  <div
                    className="bg-gradient-to-r from-green-300 to-blue-500 h-2.5
                rounded-full transform transition-transfrom duration-300 hover:scale-105 w-[20%]
                "
                  ></div>

                </div>
              </div>
            </div>

            {/* SPACE */}
            <div className="mt-12 flex justify-between text-center">
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                    bg-gradient-to-r from-green-400 to-blue-500
                    ">
                        3+
                    </h3>
                    <p>Years Exprince</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                    bg-gradient-to-r from-green-400 to-blue-500
                    ">
                        25+
                    </h3>
                    <p>Projects Completed</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                    bg-gradient-to-r from-green-400 to-blue-500
                    ">
                        10+
                    </h3>
                    <p>Happy Clients</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
