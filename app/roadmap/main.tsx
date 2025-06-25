const featuresData = [
  {
    title: "Streamlined Efficiency",
    description:
      "From inventory and ordering to sales and analytics, our all-in-one platform handles the complexities so you can focus on the art of food.",
  },
  {
    title: "Actionable Insights",
    description:
      "Stop guessing. Our intuitive dashboard gives you clear insights into your sales trends, popular items, and customer behavior, helping you grow.",
  },
  {
    title: "Seamless Simplicity",
    description:
      "Designed with your entire team in mind. Our platform is powerful yet easy to use, requiring minimal training to get started.",
  },
];

export function Main() {
  return (
    <div className="container mx-auto max-w-5xl py-24 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Designed for Your Kitchen
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          TheKtchn was founded on a simple idea: the best chefs and food
          businesses deserve the best tools. Discover how our features are built
          to handle the unique challenges of your business.
        </p>
      </div>

      <div className="mt-20 flex flex-col gap-y-16">
        {featuresData.map((feature, index) => {
          const isEvenRow = index % 2 === 0;

          return (
            <div key={feature.title} className="grid md:grid-cols-2">
              <div className={isEvenRow ? "" : "md:col-start-2"}>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-lg text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
