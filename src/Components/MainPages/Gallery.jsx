import React from "react";
import gallery1 from "../Images/Gallery1.jpg";
import gallery2 from "../Images/Gallery2.jpg";
import gallery3 from "../Images/Gallery3.jpg";
import gallery4 from "../Images/Gallery4.jpg";
import gallery5 from "../Images/Gallery5.jpg";
import gallery6 from "../Images/Gallery6.jpg";

const Gallary = () => {
  return (
    <>
      <div className=" h-auto  w-full flex justify-center items-center">
        <div className=" box my-10 py-6 lg:w-10/12 w-11/12 mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
          <div className="w-full h-[80vh] flex flex-col space-y-6">
            <div className="relative w-full h-[40vh] overflow-hidden group">
              <img
                src={gallery1}
                alt=""
                className="object-cover w-full h-full transition-transform duration-500 ease-in group-hover:scale-110"
              />
              <div className="absolute inset-0 flex top-5 bottom-5 left-5 right-5 items-center justify-center bg-customYellow bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-lg flex flex-col text-center justify-center text-black items-center space-y-6">
                  <p className="lg:text-[1.4vw] text-[2rem]  font-bold">
                    MODERN ARCHITECTURE
                  </p>
                  <p className="text-lg font-semibold px-6">
                    Consectur adipiscing elit,sed do eiusmod tempor incididunt
                    ut labor aliqua
                  </p>
                </p>
              </div>
            </div>

            <div className="relative w-full h-[40vh] overflow-hidden group">
              <img
                src={gallery2}
                alt=""
                className="object-cover w-full h-full transition-transform duration-500 ease-in group-hover:scale-110"
              />
              <div className="absolute inset-0 flex top-5 bottom-5 left-5 right-5 items-center justify-center bg-customYellow bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-lg flex flex-col text-center justify-center text-black items-center space-y-6">
                  <p className="lg:text-[1.4vw] text-[2rem] font-bold">
                    ICE CASTLE
                  </p>
                  <p className="text-lg font-semibold px-6">
                    Consectur adipiscing elit,sed do eiusmod tempor incididunt
                    ut labor aliqua
                  </p>
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-full lg:h-[80vh] md:h-[80vh] h-[40vh] overflow-hidden group">
            <img
              src={gallery3}
              alt=""
              className="object-cover w-full h-full transition-transform duration-500 ease-in group-hover:scale-110"
            />
            <div className="absolute inset-0 flex top-5 bottom-5 left-5 right-5 items-center justify-center bg-customYellow bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-lg flex flex-col text-center justify-center text-black items-center space-y-6">
                <p className="lg:text-[1.4vw] text-[2rem]  font-bold">CUBISM</p>
                <p className="text-lg font-semibold px-6">
                  Consectur adipiscing elit,sed do eiusmod tempor incididunt ut
                  labor aliqua
                </p>
              </p>
            </div>
          </div>
          <div className="w-full h-[80vh]   flex flex-col space-y-6">
            <div className="relative w-full h-[40vh] overflow-hidden group">
              <img
                src={gallery4}
                alt=""
                className="object-cover w-full h-full transition-transform duration-500 ease-in group-hover:scale-110"
              />
              <div className="absolute inset-0 flex top-5 bottom-5 left-5 right-5 items-center justify-center bg-customYellow bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-lg flex flex-col text-center justify-center text-black items-center space-y-6">
                  <p className="lg:text-[1.4vw] text-[2rem]  font-bold">
                    HORIZONTAL ELEVATOR
                  </p>
                  <p className="text-lg font-semibold px-6">
                    Consectur adipiscing elit,sed do eiusmod tempor incididunt
                    ut labor aliqua
                  </p>
                </p>
              </div>
            </div>
            <div className="relative w-full h-[40vh] overflow-hidden group">
              <img
                src={gallery5}
                alt=""
                className="object-cover w-full h-full transition-transform duration-500 ease-in group-hover:scale-110"
              />
              <div className="absolute inset-0 flex top-5 bottom-5 left-5 right-5 items-center justify-center bg-customYellow bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-lg flex flex-col text-center justify-center text-black items-center space-y-6">
                  <p className="lg:text-[1.4vw] text-[2rem]  font-bold">
                    HOME DECORE
                  </p>
                  <p className="text-lg font-semibold px-6">
                    Consectur adipiscing elit,sed do eiusmod tempor incididunt
                    ut labor aliqua
                  </p>
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-full lg:h-[80vh] md:h-[80vh]  h-[40vh] overflow-hidden group">
            <img
              src={gallery6}
              alt=""
              className="object-cover w-full h-full transition-transform duration-500 ease-in group-hover:scale-110"
            />
            <div className="absolute inset-0 flex top-5 bottom-5 left-5 right-5 items-center justify-center bg-customYellow bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-lg flex flex-col text-center justify-center text-black items-center space-y-6">
                <p className="lg:text-[1.4vw] text-[2rem]   font-bold">
                  MODERN ARCHITECTURE
                </p>
                <p className="text-lg font-semibold px-6">
                  Consectur adipiscing elit,sed do eiusmod tempor incididunt ut
                  labor aliqua
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallary;
