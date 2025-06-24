export function Hero() {
  return (
    <main className="container mx-auto py-16 sm:py-24">
      <section className="flex flex-col items-center gap-y-4">
        <h1 className="text-6xl font-extra-bold">
          Run Your Business, Not Around It.
        </h1>
        <p className="text-sm max-w-3xl text-center">
          Vendoor gives you everything you need to sell smarter and operate
          smoother — from product listings to payments, inventory to deliveries,
          and chatbot-powered customer experiences.
        </p>
        <button
          type="button"
          className="rounded-full bg-gray-900 px-8 py-3 text-sm font-semibold text-white shadow-sm my-8"
        >
          GET STARTED
        </button>
      </section>
    </main>
  );
}
