export const Macros = ({
  protein,
  fat,
  carbs,
  proteinGoal,
  fatGoal,
  carbGoal,
}) => {
  return (
    <div className="bg-customSecondary/25 rounded-2xl w-6/12 p-3 md:p-4 h-52 md:h-72 max-w-72">
      <div className="h-full w-full">
        <div className="grid grid-rows-6 grid-cols-1 h-full w-full">
          <h1 className="text-lg font-semibold font-poppins text-customAccent text-start md:text-2xl h-10 row-span-1 col-span-1">
            Macros
            <span className="text-xs pl-2">(grams)</span>
          </h1>
          <div className="row-span-5 col-span-1">
            <div className="grid grid-cols-3 grid-rows-1 h-full">
              {/*Protein Slider */}
              <div className="col-span-1 row-span-1 h-full">
                <div className="h-full w-full grid grid-rows-6 grid-cols-1 justify-items-center">
                  <div className="relative rounded-full row-span-5 col-span-1 w-10/12 md:w-8/12 h-full bg-customPrimary">
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-[${
                        (protein / proteinGoal) * 100
                      }%] min-h-10 md:min-h-14 rounded-full bg-customSecondary max-h-full`}
                    >
                      <div className="absolute top-0 left-0 right-0">
                        <div className="h-10 md:h-14 w-full rounded-full border-4 md:border-[5px] border-customSecondary bg-customPrimary flex justify-center items-center">
                          <p className="text-customAccent text-xs md:text-sm font-bold font-poppins">
                            {protein}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row-span-1 col-span-1 flex justify-end items-center">
                    <p className="text-sm md:text-base font-redHatText text-customAccent/80 font-medium">
                      Protein
                    </p>
                  </div>
                </div>
              </div>
              {/*Fat Slider */}
              <div className="col-span-1 row-span-1 h-full">
                <div className="h-full w-full grid grid-rows-6 grid-cols-1 justify-items-center">
                  <div className="relative rounded-full row-span-5 col-span-1 w-10/12 md:w-8/12 h-full bg-customPrimary">
                      <div
                      className={`absolute bottom-0 left-0 right-0 h-[${
                        (fat / fatGoal) * 100
                      }%] min-h-10 md:min-h-14 max-h-full rounded-full bg-customSecondary`}
                    >
                      <div className="absolute top-0 left-0 right-0">
                        <div className="h-10 md:h-14 w-full rounded-full border-4 md:border-[5px] border-customSecondary bg-customPrimary flex justify-center items-center">
                          <p className="text-customAccent text-xs md:text-sm font-bold font-poppins">
                            {fat}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row-span-1 col-span-1 flex justify-end items-center">
                    <p className="text-sm md:text-base font-redHatText text-customAccent/80 font-medium">
                      Fat
                    </p>
                  </div>
                </div>
              </div>
              {/*Carbs Slider */}
              <div className="col-span-1 row-span-1 h-full">
                <div className="h-full w-full grid grid-rows-6 grid-cols-1 justify-items-center">
                  <div className="relative rounded-full row-span-5 col-span-1 w-10/12 md:w-8/12 h-full bg-customPrimary">
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-[${
                        (carbs / carbGoal) * 100
                      }%] min-h-10 md:min-h-14 rounded-full bg-customSecondary max-h-full`}
                    >
                      <div className="absolute top-0 left-0 right-0">
                        <div className="h-10 md:h-14 w-full rounded-full border-4 md:border-[5px] border-customSecondary bg-customPrimary flex justify-center items-center">
                          <p className="text-customAccent text-xs md:text-sm font-bold font-poppins">
                            {carbs}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row-span-1 col-span-1 flex justify-end items-center">
                    <p className="text-sm md:text-base font-redHatText text-customAccent/80 font-medium">
                      Carbs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Macros;
