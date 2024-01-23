import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
    <footer className='bg-dark text-light p-3 text-center footer-component'>
      <p>Copyright &copy; {currentYear} Yash Shrestha</p>
    </footer>
    </>
  )
}

export default Footer
