import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-evenly items-center">
        {/* Column 1 */}
        <div className=" flex flex-col gap-5 p-3">
          <div className="flex items-center p-1 bg-white">
            <img
              src="https://images.pexels.com/photos/351263/pexels-photo-351263.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="w-20 h-auto"
            />

            <p className="text-lg font-semibold text-sky-800">Underground</p>
          </div>
          <div className="flex gap-3">
            <img
              src="https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="w-8 h-auto"
            />
            <img
              src="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?size=626&ext=jpg&ga=GA1.1.1205042534.1715257737&semt=ais_user"
              alt=""
              className="w-8 h-auto"
            />
            <img
              src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?t=st=1715354213~exp=1715357813~hmac=dfc27959ffa0884ddb3d6e705f5cd3def5131cc446c65f8f5e4fcd9b8bd96b13&w=740"
              alt=""
              className="w-8 h-auto"
            />
            <img
              src="https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049587.jpg?t=st=1715354273~exp=1715357873~hmac=43765de3b803bd62d9c51d0900ed3b35a8b01d343351d4707fe53399a3228b38&w=740"
              alt=""
              className="w-8 h-auto"
            />
          </div>
        </div>
        {/* Column 2 */}
        <div className="w-3/4 md:w-2/4 lg:w-1/4">
          <table className="w-full">
            <thead>
              <tr>
                <th scope="col">Company</th>
                <th scope="col">Resources</th>
                <th scope="col">Quick Links</th>
                <th scope="col">More</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 6 }, (_, index) => (
                <tr key={index}>
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">{index + 1}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <h2>
        Made with <span>&#x2764;</span> in India, FitIndia 2024
      </h2>
    </footer>
  );
};

export default Footer;
