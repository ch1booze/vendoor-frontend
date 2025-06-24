import { LuArrowRight } from "react-icons/lu";

export function Features() {
  return (
    <section id="features" className="container mx-auto max-w-6xl">
      <div className="grid grid-cols-1 items-center rounded-2xl bg-green-100 p-8 lg:grid-cols-2">
        <div>
          <img
            src="https://i.imgur.com/G5gR03O.png"
            alt="Dashboard showing spending insights"
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="flex flex-col">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Smart Customer Interactions
          </h2>

          <div className="mt-8 flex flex-col gap-y-6">
            <div>
              <h3 className="font-semibold text-gray-900">
                Let Customers Connect Naturally
              </h3>
              <p className="mt-1 text-gray-600">
                Enable customers to place orders, ask about sales, check
                availability, and get support using natural language through
                chatbots on platforms they already love - WhatsApp and
                Instagram.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Ideal for:</h3>
              <p className="mt-1 text-gray-600">
                Clothing stores, meal delivery services, grocery retailers,
                e-commerce businesses
              </p>
            </div>
          </div>

          <a
            href="#"
            className="mt-8 inline-flex w-fit items-center gap-x-2 text-sm font-semibold text-green-600 transition-colors hover:text-green-500"
          >
            TRY CHATTING NOW
            <LuArrowRight />
          </a>
        </div>
      </div>

      <div className="grid grid-col-2 items-center p-8 lg:grid-cols-2">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Seamless Payments and Subscriptions
          </h2>

          <div className="mt-8 flex flex-col gap-y-6">
            <div>
              <h3 className="font-semibold text-gray-900">
                Build Customer Relationships with Easy Payments
              </h3>
              <p className="mt-1 text-gray-600">
                Manage payments and recurring subscriptions with ease. Automate
                follow-ups, reconcile payments with invoices, and deliver
                frictionless service that keeps your customers coming back.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Ideal for:</h3>
              <p className="mt-1 text-gray-600">
                Gyms, fitness centers, barbershops, salons, membership-based
                services
              </p>
            </div>
          </div>

          <a
            href="#"
            className="mt-8 inline-flex w-fit items-center gap-x-2 text-sm font-semibold text-green-600 transition-colors hover:text-green-500"
          >
            CHECKOUT OUR PAYMENT EXTRACTOR
            <LuArrowRight />
          </a>
        </div>

        <div>
          <img
            src="https://i.imgur.com/G5gR03O.png"
            alt="Dashboard showing spending insights"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 items-center rounded-2xl bg-green-100 p-8 lg:grid-cols-2">
        <div>
          <img
            src="https://i.imgur.com/G5gR03O.png"
            alt="Dashboard showing spending insights"
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="flex flex-col">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Intelligent Inventory Management
          </h2>

          <div className="mt-8 flex flex-col gap-y-6">
            <div>
              <h3 className="font-semibold text-gray-900">
                Stay Stocked and Informed
              </h3>
              <p className="mt-1 text-gray-600">
                Track inventory in real time, identify what sells best, and
                avoid stockouts. Make data-driven decisions that align with your
                customers’ needs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Ideal for:</h3>
              <p className="mt-1 text-gray-600">
                Retail stores, restaurants, pharmacies, product-based businesses
              </p>
            </div>
          </div>

          <a
            href="#"
            className="mt-8 inline-flex w-fit items-center gap-x-2 text-sm font-semibold text-green-600 transition-colors hover:text-green-500"
          >
            TEST OUR INVENTORY ESTIMATOR
            <LuArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
