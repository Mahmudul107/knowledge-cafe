import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 w-[100%]">
      <div className="flex-1">
        <a className="font-bold text-4xl font-serif">Knowledge Partner</a>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://z-p3-scontent.fdac12-1.fna.fbcdn.net/v/t39.30808-1/310551278_1760521187614189_1886860007393763522_n.jpg?stp=dst-jpg_p240x240&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeH82rVAwKfGT1tj2TUACDd6hBsZgIEPN1WEGxmAgQ83VdGjJ-rvNg-lit-YsDpitavbJxt0fsEKX2OuR0cUPj6Z&_nc_ohc=e0B7H5raP_cAX8ypfyK&_nc_ht=z-p3-scontent.fdac12-1.fna&oh=00_AfAawo7b43UhvF0gs_ySoWukFcr0gxY6RSrnP5mXhgz1LA&oe=642C13B4" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
