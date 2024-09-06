"use client";

import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { BsPeople } from "react-icons/bs";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Tooltip } from "@nextui-org/react"; // Ensure this is correctly installed

const sidebarItems = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: CgProfile,
  },
  {
    name: "Patients",
    href: "/admin/users",
    icon: BsPeople,
  },
  {
    name: "Doctors",
    href: "/admin/doctors",
    icon: BsPeople,
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebarCollapse = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  return (
    <div
      className={`h-screen sidebar__wrapper ${isCollapsed ? "collapsed" : ""}`}
    >
      <button className="btn shadow-xl" onClick={toggleSidebarCollapse}>
        {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
      </button>
      <aside
        className="sidebar rounded-r-lg shadow-2xl bg-primary-500 text-gray-100"
        data-collapse={isCollapsed}
      >
        <div className="sidebar__top text-primary">
          <Image
            width={80}
            height={80}
            className="sidebar__logo rounded-full"
            src="/logo.png" // Ensure this path is correct
            alt="logo"
          />
          <p className="sidebar__logo-name">SwasthyaSamriddhi</p>
        </div>
        <ul className="sidebar__list text-slate-900 dark:text-slate-50">
          {sidebarItems.map(({ name, href, icon: Icon }) => (
            <li className="sidebar__item" key={name}>
              <Tooltip content={name} placement="right">
                <Link
                  className={`sidebar__link ${
                    pathname === href ? "sidebar__link--active" : ""
                  }`}
                  href={href}
                >
                  <span className="sidebar__icon">
                    <Icon className="inline-block mr-2" />
                  </span>
                  {!isCollapsed && <span className="sidebar__name">{name}</span>}
                </Link>
              </Tooltip>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
