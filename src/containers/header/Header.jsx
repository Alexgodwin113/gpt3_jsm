import React from 'react'
import './header.css'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div class="gpt3__header section__padding" id="home">
      <div class="gpt3__header-content">
        <h1 class="gradient__text"> Let's Build Something amazing with GPT-3  OpenAI </h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all 
          exercise blessing. Indulgence way everything joy alteration boisterous the attachment.
          Party we years to order allow asked of.</p>
        <div class="gpt3__header-content__input">
          <input type="email" placeholder='Your Email Address' />
          <button type="button"> Get Started </button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header