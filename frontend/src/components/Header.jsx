import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCredentials } from "../slices/authSlice";
import { useLogoutMutation } from "../slices/usersApiSlice";

import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.svg";
import rashedImg from "../assets/rashed.png";

import { WaveLoading } from "react-loadingg";
import { toast } from "react-toastify";
import LoginModal from "./LoginModal";

const navigation = [
  { name: "HOME", to: "/", current: false },
  { name: "ABOUT", to: "/about", current: false },
  { name: "PROJECTS", to: "/projects", current: false },
  { name: "CONTACT", to: "/contact", current: false },
  //   { name: 'ADMIN LOGIN', to: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  // get user info from redux store
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall, { isLoading }] = useLogoutMutation();

  // logout handler
  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap(); // call logout api
      dispatch(clearCredentials()); // clear local storage with clearCredentials action
      navigate("/"); // navigate to home page

      toast.success("Logged out successfully");
    } catch (err) {
      console.log(err);
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-gray-800 shadow select-none">
      <div className="container mx-auto">
        <Disclosure as="nav">
          {({ open }) => (
            <>
              <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block w-6 h-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block w-6 h-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                    <div className="flex items-center flex-shrink-0">
                      <Link to="/">
                        <img
                          className="block w-auto h-8 lg:hidden"
                          src={logo}
                          alt="Rashed logo"
                        />
                      </Link>

                      <Link to="/">
                        <img
                          className="hidden w-auto h-8 lg:block"
                          src={logo}
                          alt="rashed logo"
                        />
                      </Link>
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                      <div className="flex space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "rounded-md px-3 py-2 text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            <Link to={item.to}>{item.name}</Link>
                          </a>
                        ))}

                        {/* modal to login */}
                        {/* <LoginModal /> */}
                      </div>
                    </div>
                  </div>

                  {userInfo ? (
                    <>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                          <div>
                            <Menu.Button className="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                              <span className="sr-only">Open user menu</span>
                              <img
                                className="w-8 h-8 rounded-full"
                                src={rashedImg}
                                alt="rashed image"
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    <Link to="/profile">
                                      Your Profile <AccountCircleIcon />
                                    </Link>
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    Settings
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    <Link
                                      onClick={logoutHandler}
                                      className="text-primary"
                                    >
                                      Sign out <ExitToAppIcon />
                                    </Link>

                                    {/* loader for logout */}
                                    {isLoading && (
                                      <WaveLoading
                                        color="#0080FF"
                                        size="large"
                                      />
                                    )}
                                  </a>
                                )}
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </>
                  ) : (
                    <>
                      <LoginModal />
                      {/* <div className='grid grid-cols-1 md:grid-cols-2 py-2 md:py-0'>
                                    <SignUpModal />
                                </div> */}
                    </>
                  )}
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      // as="a"
                      // href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {/* {item.name} */}
                      <Link to={item.to}>{item.name}</Link>
                    </Disclosure.Button>
                  ))}

                  {/* modal to login */}
                  {/* <LoginModal /> */}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
