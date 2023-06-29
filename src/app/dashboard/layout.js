'use client'
import HeaderNav from '../components/HeaderNav'
 
export default function Layout({ children }) {
 
  return (
    <>
      <HeaderNav />
      <main>{children}</main>
    </>
  )
}