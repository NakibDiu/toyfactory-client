const testimonials = [
  {
    id: 1,
    name: "John Doe",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed tempus bibendum nunc non scelerisque. Sed ut felis id lectus vestibulum gravida.",
  },
  {
    id: 2,
    name: "Jane Smith",
    content:
      "Vestibulum vulputate quam et urna vestibulum, eget hendrerit turpis fringilla. Phasellus ut convallis est, id sollicitudin enim. Ut tincidunt risus a commodo vehicula.",
  },
  {
    id: 3,
    name: "Michael Johnson",
    content:
      "Nunc dignissim purus non metus lobortis, ac blandit risus vestibulum. Mauris ac lacinia ex. Aliquam venenatis dui nisl, ac malesuada quam commodo id.",
  },
];

const Testimonials = () => {
  return (
    <div>
      <h1 className="text-3xl lg:text-5xl font-bold text-center text-gray-600">
        Testimonials
      </h1>
      <div className="flex flex-wrap justify-center">
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className="max-w-sm w-full md:max-w-md rounded-lg overflow-hidden shadow-lg bg-white m-4"
        >
          <div className="p-4 relative">
            <div className="mt-4">
              <p className="text-gray-800 text-base leading-7 relative">
                <span className="text-3xl block">&ldquo;</span>
                {testimonial.content}
                <span className="text-3xl">&rdquo;</span>
              </p>
            </div>
          </div>
          <div className="bg-gray-100 px-4 py-2">
            <p className="text-gray-700 font-semibold">{testimonial.name}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Testimonials;
