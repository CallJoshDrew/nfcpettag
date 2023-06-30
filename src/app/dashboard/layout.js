'use client'
import HeaderNav from '../components/HeaderNav'
import AuthContextProvider from '../lib/store/authContext.jsx'

export default function Layout({ children }) {
 
  return (
    <>
      <AuthContextProvider>
        <HeaderNav />
        <main>{children}</main>
      </AuthContextProvider>
    </>
  )
}