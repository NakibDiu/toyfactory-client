import {
  FaShippingFast,
  FaHeadset,
  FaGift,
  FaCreditCard,
} from "react-icons/fa";
const Services = () => {
  const services = [
    {
      id: 1,
      title: "Worldwide Shipping",
      subtitle: "On Orders Over $99",
      icon: FaShippingFast,
    },
    {
      id: 2,
      title: "24x7 Free Support",
      subtitle: "Online Support",
      icon: FaHeadset,
    },
    {
      id: 3,
      title: "Special Gift Cards",
      subtitle: "Give The Perfect Gift",
      icon: FaGift,
    },
    {
      id: 4,
      title: "Money Back Guarantee",
      subtitle: "100% Secure Payment",
      icon: FaCreditCard,
    },
  ];
  return (
    <div className="my-9 lg:my-16 space-y-10">
      <h1 className="text-3xl lg:text-5xl font-bold text-center text-gray-600">
        Our Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-4 md:mx-auto max-w-4xl">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg shadow-lg p-4 flex items-center"
          >
            <div className="bg-gray-200 rounded-full flex items-center justify-center h-12 w-12 mr-4">
              <service.icon className="text-gray-600 text-xl" />
            </div>
            <div>
              <p className="text-gray-800 text-lg font-semibold">
                {service.title}
              </p>
              <p className="text-gray-600">{service.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
