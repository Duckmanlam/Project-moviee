export default function Payment() {
    return (
      <div className="text-20 text-center my-5">
        CineMax
        <hr className="w-full h-px mt-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="flex">
          <div className="mr-auto w-1/2 text-left ml-20 my-40">
            <p className="text-24 font-bold -mt-24 mb-7">Payment Method</p>
            <div className=" w-11/12 rounded-3xl flex items-center pl-4 border border-Label dark:border-gray-700">
              <input
                checked
                id="bordered-radio-2"
                type="radio"
                value=""
                name="bordered-radio"
                className="rounded-3xl w-4 h-4 bg-gray-100 text-Label border-Grayscale60"
              />
              <img
              className="ml-4"
                src="https://lh3.google.com/u/0/d/18Ao1qbUlYKilFYYg4ATZWaiKEyxHbkFr=w1418-h1362-iv1"
                alt=""
                
              />
              <label
                for="purple-radio"
                className=" w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                PayPal
              </label>
            </div>
            <div className=" mt-6 py-2 w-11/12 flex items-center pl-4 border border-gray-200 rounded-3xl dark:border-gray-700">
              <input
                id="bordered-radio-1"
                type="radio"
                value=""
                name="bordered-radio"
                className="rounded-3xl w-4 h-4 text-Label bg-gray-100 border-gray-300"
              />
              <img
              className="ml-4"
                src="https://lh3.google.com/u/0/d/1IKSN0OKO_e4_5yy4ddauK7idezxzSmHX=w2826-h1362-iv1"
                alt=""
              ></img>
              <label
                for="bordered-radio-1"
                class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                
              </label>
            </div>
            <p className="text-Grayscale60 text-16 font-medium mt-7">
              Or checkout using a credit card{" "}
            </p>
            <label className="block mr-1 mt-6">
              <span className=" after:ml-0.5 after:text-red-500 block text-sm font-medium  text-Grayscale70">
                Cardholder Name
              </span>
              <input
                type="lastname"
                name="lastname"
                className="mt-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-Label focus:ring-Label block w-80 rounded-3xl sm:text-sm focus:ring-1"
                placeholder=""
              />
            </label>
            <div className="flex">
              <label className="block mr-1 mt-6">
                <span className=" after:ml-0.5 after:text-red-500 block text-sm font-medium  text-Grayscale70">
                  Card Number
                </span>
                <input
                  type="CardNumber"
                  name="CardNumber"
                  className=" mt-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-Label focus:ring-Label block w-64 rounded-3xl sm:text-sm focus:ring-1"
                  placeholder="Ex:  31111 1111 1111 1111"
                />
              </label>
              <label className="block mr-1 mt-6">
                <span className=" ml-6 after:ml-0.5 after:text-red-500 block text-sm font-medium  text-Grayscale70">
                  Expiration
                </span>
                <input
                  type=""
                  name=""
                  className="mt-2 px-3 py-2 ml-5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-Label focus:ring-Label block w-36 rounded-3xl sm:text-sm focus:ring-1"
                  placeholder="MM/YY"
                />
              </label>
              <label className="block mr-1 mt-6">
                <span className=" ml-6 after:ml-0.5 after:text-red-500 block text-sm font-medium  text-Grayscale70">
                  CVV
                </span>
                <input
                  type="lastname"
                  name="lastname"
                  className="mt-2 px-3 py-2 ml-5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-Label focus:ring-Label block w-36 rounded-3xl sm:text-sm focus:ring-1"
                  placeholder=""
                />
              </label>
            </div>
            <label className="block mr-1 mt-6">
              <span className=" after:ml-0.5 after:text-red-500 block text-sm font-medium  text-Grayscale70">
                Postal Code
              </span>
              <input
                type="code"
                name="code"
                className="mt-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-Label focus:ring-Label block w-40 rounded-3xl sm:text-sm focus:ring-1"
                placeholder="Postal or ZIP code"
              />
            </label>
          </div>
          {/*------------------- */}
          <div className="bg-Grayscale10 w-1/2 pb-96 pt-10 shrink-0 ml-auto text-18 font-medium">
            <div className="ml-20 mr-20">
              <ul className="flex my-6">
                <li class="text-Grayscale60">Subtotal</li>
                <li class="ml-auto">$4.99</li>
              </ul>
              <ul className="flex my-6">
                <li class="text-Grayscale60">Plan type</li>
                <li class="ml-auto">Monthly</li>
              </ul>
              <ul className="flex my-6">
                <li class="text-Grayscale60">Monthly plan discount</li>
                <li class="ml-auto">-$5</li>
              </ul>
              <hr class="w-auto h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <ul className="flex my-6">
                <li class="text-Grayscale60">Billed Now</li>
                <li class="ml-auto  text-Primary">$35</li>
              </ul>           
              <p class="text-left text-16 text-Grayscale70">
                You will be charged $5 every yearly thereafter while the
                subscription is active. Cancel any time.
              </p>
              <button
                type="button"
                className="mt-16 text-white w-96 bg-Label border font-medium rounded-3xl text-center text-sm px-5 py-2.5 "
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  