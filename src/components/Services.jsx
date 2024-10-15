const services = [
    {
      id: 1,
      title: "Responsive Web Development",
      description: "Crafting responsive and high-performance websites using modern front-end frameworks like React and Next.js.",
    },
    {
      id: 2,
      title: "UI/UX Design Implementation",
      description: "Bringing design concepts to life by transforming static designs into fully functional, interactive user interfaces.",
    },
    {
      id: 3,
      title: "Single Page Application Development",
      description: "Building dynamic and fast single-page applications (SPAs) with efficient state management and smooth navigation.",
    },
    {
      id: 4,
      title: "Cross-Browser Compatibility",
      description: "Ensuring seamless functionality and visual consistency across all major browsers and devices.",
    },
    {
      id: 5,
      title: "Website Performance Optimization",
      description: "Improving website speed and user experience by optimizing assets, reducing load times, and enhancing accessibility.",
    },
    {
      id: 6,
      title: "Interactive Component Development",
      description: "Creating reusable and interactive components, improving user engagement and maintaining code scalability.",
    },
  ];
  

const Services = () => {
  return (
    <div className="bg-black text-white py-20" id="services">
      <div className="contanier mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service)=>{
                return(
                <div key={service.id}
                className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform
                transition-transform duration-300 hover:scale-105
                "
                >
                    <div className="text-right text-2xl font-bold text-transparent bg-clip-text
                    bg-gradient-to-r from-green-600 to-blue-400
                    ">
                        {service.id}
                    </div>
                    <div>
                        <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text
                    bg-gradient-to-r from-green-600 to-blue-400">
                            {service.title}
                        </h3>
                        <p className="mt-2 text-gray-300">{service.description}</p>
                        <a href="#" className="mt-4 inline-block text-green-400
                        hover:text-blue-500
                        ">Read More</a>
                    </div>
                </div>

                )

            })}
        </div>
      </div>
    </div>
  );
};

export default Services;
