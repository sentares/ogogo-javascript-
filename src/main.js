const apiPoints = {
  products: 'https://fakestoreapi.com/products'
}

const main = document.querySelector('main')

fetch(apiPoints.products)
  .then((data) => data.json())
  .then((res) => renderData(res))

const renderData = (response) => {
  response.map((item) => renderCard(item))
}

const renderCard = ({ title, price, description, rating, category, image }) => {
    let layout = `
   <div
    class=" py-3 max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2 items-center"
  >
    <div
      class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1"
    >
      <h1
        class="mt-1 text-lg font-semibold sm:text-slate-900 md:text-2xl"
      >
        ${title}
      </h1>
      <p
        class="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400"
      >
        ${price}
      </p>
    </div>
    <div
      class="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0"
    >
      <img
        src="${image}"
        alt=""
        class="w-80 h-60 object-contain mx-auto rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
        loading="lazy"
      />
    </div>
    <dl
      class="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2"
    >
      <dt class="sr-only">Reviews</dt>
      <dd class="text-indigo-600 flex items-center dark:text-indigo-400">
        <svg
          width="24"
          height="24"
          fill="none"
          aria-hidden="true"
          class="mr-1 stroke-current dark:stroke-indigo-500"
        >
          <path
            d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span
          >${rating.rate} <span class="text-slate-400 font-normal">(${rating.count})</span></span
        >
      </dd>
      <dt class="sr-only">Location</dt>
      <dd class="flex items-center">
        <svg
          width="2"
          height="2"
          aria-hidden="true"
          fill="currentColor"
          class="mx-3 text-slate-300"
        >
          <circle cx="1" cy="1" r="1" />
        </svg>
        ${category}
      </dd>
    </dl>
    <div
      class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4"
    >
      <button
        type="button"
        class=  "bg-teal-900 text-white  text-sm leading-6 font-medium py-2 px-3 rounded-lg"
      >
        Check availability
      </button>
    </div>
    <p
      class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400"
    >
        ${description}
    </p>
    `

    main.innerHTML += layout
}