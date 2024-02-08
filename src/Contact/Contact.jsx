import React from 'react'

export default function Contact() {
  
  return (
    <section className='bg-black text-bg-light '>
    <div className="container  ">
      <h1 className='text-light'>Contact Us</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label text-light">Name:</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your name" />
        </div>
        
        <div className="mb-3">
          <label htmlFor="email" className="form-label text-light">Email:</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label text-light">Message:</label>
          <textarea className="form-control" id="message" rows="3" placeholder="Type your message"></textarea>
        </div>

        <button type="submit" className="btn btn-danger m-5">Order Now</button>
      </form>
    </div>
    </section>
  );
}