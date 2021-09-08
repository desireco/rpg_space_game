const HUD = () => {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex justify-evenly my-2 text-white">
        <div className="flex flex-1">
          <div className="mx-2 flex">
            <p className="mr-1">Level: </p>

            <p>1</p>
          </div>

          <div className="mx-2 flex">
            <p className="mr-1">Bits: </p>

            <p>0</p>
          </div>
        </div>

        <div className="flex flex-1">
          <p className="mr-2">Exp.</p>

          <div className="shadow w-full bg-purple-100 mr-2">
            <div className="bg-purple-800 text-xs leading-none h-full w-1/4" />
          </div>
        </div>
      </div>

      <div className="border-b-2 border-gray-200 border-solid">
        <ul className="flex cursor-pointer">
          <li className="py-2 px-6 bg-white text-black mr-0.5 w-full">
            Attributes
          </li>
          <li className="py-2 px-6 bg-gray-400 text-gray-500 mr-0.5 w-full">
            Ship
          </li>
          <li className="py-2 px-6 bg-gray-400 text-gray-500 mr-0.5 w-full">
            Storage
          </li>
          <li className="py-2 px-6 bg-gray-400 rounded-t-md text-gray-500 mr-0.5 w-full">
            Craft
          </li>
        </ul>
      </div>

      <div className="flex flex-1">
        <div className="flex flex-col flex-1 bg-white text-black p-2">
          <p className="text-gray-900 mb-3">Ship attributes</p>

          <div className="flex">
            <div className="flex flex-col mr-4">
              <p className="text-black mb-1">Attack</p>
              <p className="text-black mb-1">Defense</p>
              <p className="text-black mb-1">Speed</p>
              <p className="text-black mb-1">A.I.</p>
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex mb-1">
                <p>0</p>

                <button className="h-6 w-10 bg-blue-600 mx-2 rounded text-white">
                  +
                </button>

                <button className="h-6 w-6 bg-yellow-500 rounded-full">
                  i
                </button>
              </div>

              <div className="flex mb-1">
                <p>0</p>

                <button className="h-6 w-10 bg-blue-600 mx-2 rounded text-white">
                  +
                </button>

                <button className="h-6 w-6 bg-yellow-500 rounded-full">
                  i
                </button>
              </div>

              <div className="flex mb-1">
                <p>0</p>

                <button className="h-6 w-10 bg-blue-600 mx-2 rounded text-white">
                  +
                </button>

                <button className="h-6 w-6 bg-yellow-500 rounded-full">
                  i
                </button>
              </div>

              <div className="flex mb-1">
                <p>0</p>

                <button className="h-6 w-10 bg-blue-600 mx-2 rounded text-white">
                  +
                </button>

                <button className="h-6 w-6 bg-yellow-500 rounded-full">
                  i
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 bg-white text-black p-2">
          <p className="text-gray-900 mb-3">Your attributes</p>

          <div className="flex">
            <div className="flex flex-col mr-4">
              <p className="text-black mb-1">Intelligence</p>
              <p className="text-black mb-1">Social</p>
              <p className="text-black mb-1">Repair(?)</p>
              <p className="text-black mb-1">Fortune(luck)</p>
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex mb-1">
                <p>-10</p>

                <button className="h-6 w-10 bg-blue-600 mx-2 rounded text-white">
                  +
                </button>

                <button className="h-6 w-6 bg-yellow-500 rounded-full">
                  i
                </button>
              </div>

              <div className="flex mb-1">
                <p>0</p>

                <button className="h-6 w-10 bg-blue-600 mx-2 rounded text-white">
                  +
                </button>

                <button className="h-6 w-6 bg-yellow-500 rounded-full">
                  i
                </button>
              </div>

              <div className="flex mb-1">
                <p>0</p>

                <button className="h-6 w-10 bg-blue-600 mx-2 rounded text-white">
                  +
                </button>

                <button className="h-6 w-6 bg-yellow-500 rounded-full">
                  i
                </button>
              </div>

              <div className="flex mb-1">
                <p>0</p>

                <button className="h-6 w-10 bg-blue-600 mx-2 rounded text-white">
                  +
                </button>

                <button className="h-6 w-6 bg-yellow-500 rounded-full">
                  i
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HUD;
