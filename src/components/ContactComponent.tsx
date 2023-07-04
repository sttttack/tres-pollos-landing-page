import Board from "../assets/images/cuttingboard.jpg";

export default function ContactComponent() {
  return (
    <div
      className={`overflow-y-hidden overflow-hidden flex justify-center items-center`}
    >
      <div
        className={`w-screen bg-cover brightness-40 h-[80vh]`}
        style={{
          backgroundImage: `url(${Board})`,
        }}
      >
        <div className="container mt-[30vh] mx-auto md:px-6 lg:w-[1440px] animate-slideUp">
          <div className="container px-6 md:px-12">
            <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
              <div className="flex justify-center flex-col md:flex-row">
                <div className="mb-12 w-full md:w-6/12 lg:w-full lg:px-6 xl:w-6/12">
                  <div className="flex flex-wrap">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="h-6 w-6"
                        ></svg>
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold dark:text-white">
                        General information
                      </p>
                      <p className="text-neutral-500 dark:text-neutral-200">
                        info@trespollos.ge
                      </p>
                      <p className="text-neutral-500 dark:text-neutral-200">
                        +995 551 12 10 20
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 w-full md:w-6/12 lg:w-full lg:px-6 xl:w-6/12">
                  <div className="flex flex-wrap">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          {/* SVG path code */}
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold dark:text-white">
                        Sales questions
                      </p>
                      <p className="text-neutral-500 dark:text-neutral-200">
                        sales@trespollos.ge
                      </p>
                      <p className="text-neutral-500 dark:text-neutral-200">
                        +995 551 12 10 20
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 w-full md:w-6/12 lg:w-full lg:px-6 xl:w-6/12">
                  <div className="flex flex-wrap">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          {/* SVG path code */}
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold dark:text-white">Address</p>
                      <p className="text-neutral-500 dark:text-neutral-200">
                        Mukhrani, Mtskheta
                      </p>
                      <p className="text-neutral-500 dark:text-neutral-200">
                        Georgia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
