import React, { useContext } from 'react'

export const Nav = () => {
  return (
    <nav className="flex items-center justify-between py-4">
      <p className="text-grey-900 text-2xl font-bold">Auctioneer</p>
      <div className="flex">
        <a
          href="/api/login"
          className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600"
        >
          Login
        </a>
        <a
          href="/api/logout"
          className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600"
        >
          Logout
        </a>
      </div>
    </nav>
  )
}
