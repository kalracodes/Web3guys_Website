import React from 'react'
import CustomerReviewHome from './customer_review_home'
import WhyChooseUs from './why_choose_us'
import WebChange from './web_change'
import Faqs from './Faqs'
import "./homepage2.css"
function Homepage2() {
  return (
    <div className="homepage2">
      <WebChange/>
      <WhyChooseUs/>
      <Faqs/>
      <CustomerReviewHome/>
    </div>
  )
}

export default Homepage2