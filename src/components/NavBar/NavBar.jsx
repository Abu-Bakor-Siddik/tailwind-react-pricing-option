import React from 'react';
import Link from './Link';

const navigationData = [
  {
    id: "nav_001",
    name: "Home",
    path: "/"
  },
  {
    id: "nav_002",
    name: "About",
    path: "/about"
  },
  {
    id: "nav_003",
    name: "Services",
    path: "/services"
  },
  {
    id: "nav_004",
    name: "Blog",
    path: "/blog"
  },
  {
    id: "nav_005",
    name: "Contact",
    path: "/contact"
  }
];

const NavBar = () => {
    return (
        <nav>
            {/* <ul className='flex gap-10'>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul> */}

            {/* <ul className='flex'>
                {
                    navigationData.map(route => <li className='mr-10'><a href={route.path}>{route.name}</a></li> )
                }
            </ul> */}

            <ul className='flex '>
                {
                navigationData.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;