import Link from 'next/link';

const HomeHero = () => (
  <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center bg-white">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 lg:pl-24 md:pr-16 flex flex-col md:items-start  md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-3 font-medium text-gray-900">
          Drop or Multi Send Nft’s
        </h1>
        <p className="mb-10 leading-relaxed">
          We have built a tool to facilitate artists to multi send or drop NFT’s in one click.
        </p>
        <div className="flex justify-center">
          <button
            type="button"
            className="inline-flex items-center bg-black text-primary rounded-xl border-0 py-4 px-7 focus:outline-none hover:bg-gray-600  text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 mr-2 font-bold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M12 4v16m8-8H4"
              />
            </svg>
            <Link href="/distribution">
              <div className="font-bold">Start Drop</div>
            </Link>
          </button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          className="object-cover object-center rounded w-96 h-96"
          alt="hero"
          src="/images/hero_side_image.png"
        />
      </div>
    </div>
  </section>
);

export default HomeHero;
