import React from "react";
import Kena from "../../assets/kena.jpg";
import "./Star.css";

function Profile() {
  return (
    <>
      <div className="bg-neutral-50">
        <div className="text-3xl text-center  text-blue-500 font-bold mb-10">
          Your Profile
        </div>
        <div className="grid grid-cols-2 gap-10 mb-10 mx-5">
          <div className=" mx-5 shadow-xl hover:shadow-blue-300 hover:shadow-lg bg-white rounded-2xl p-5 text-center text-blue-500">
            <div className="grid grid-cols-2 gap-10">
              <div>Statistics</div>
              <div>Cirlce</div>
            </div>
          </div>

          <div className="flex flex-col mx-5 shadow-xl hover:shadow-blue-300 hover:shadow-lg bg-white rounded-2xl p-5 text-center text-blue-500">
            <div className="grid grid-cols-2 gap-10">
              <div className="text-start ml-5 font-semibold">
                <div className="text-3xl my-5">Rating</div>
                <div className="text-3xl my-10">3</div>
                <div className="starability-result my-10" data-rating={3}></div>
              </div>
              <div>
                <img
                  src={Kena}
                  alt="Profile"
                  className="mt-10 h-2/3 w-2/3 rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
