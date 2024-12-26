import React from 'react'
import './Footer.css'
import '../../GlobalT1.css'
import { useSelector } from 'react-redux'
function Footer() {
  const data = useSelector(s=>s.formData.basicInfo.name)
  return (
    <div className="footer">
        <p>&copy; {data}</p>
    </div>
  )
}

export default Footer
