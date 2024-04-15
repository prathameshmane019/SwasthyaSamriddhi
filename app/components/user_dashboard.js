"use client"
import Image from "next/image";
import { BsCardChecklist } from "react-icons/bs";

import { CgProfile } from "react-icons/cg";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";
import { useRouter,usePathname } from "next/navigation"; 

const sidebarItems = [
  {
    name: "Dashboard",
    href: "/user",
    icon: CgProfile,
  },
  {
    name: "Records",
    href: "/user/records",
    icon: BsCardChecklist,
  },
];

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname()
  console.log(pathname);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleSidebarcollapse = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  return (
    <div className={`h-screen sidebar__wrapper ${isCollapsed ? 'collapsed' : ''}`}>
      <button className="btn shadow-xl " onClick={toggleSidebarcollapse}>
        {isCollapsed ? <MdKeyboardArrowRight  className=" "/> : <MdKeyboardArrowLeft />}
      </button>
      <aside className="sidebar rounded-r-lg shadow-2xl bg-primary-500  text-gray-100" data-collapse={isCollapsed}>
        <div className="sidebar__top  text-primary ">
          <Image
            width={80}
            height={80}
            className="sidebar__logo rounded-full"
            src="/logo.png"
            alt="logo"
          />
          <p className="sidebar__logo-name">SwasthyaSamriddhi</p>
        </div>
        <ul className="sidebar__list text-slate-900 dark:text-slate-50">
          {sidebarItems.map(({ name, href, icon: Icon }) => {
            return (
              <li className="sidebar__item" key={name}>
                <Link
                  className={`sidebar__link ${pathname === href ? "sidebar__link--active" : ""}`}
                  href={href}
                >
                  <span className="sidebar__icon">
                    <Icon className="inline-block mr-2" />
                  </span>
                  <span className="sidebar__name">{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
