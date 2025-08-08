import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CelebrationForm = () => {
   const [formData, setFormData] = useState({
    name: '',
    email: '',
    class: '',
    mobileno: '',
    event: '',
   });


   const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
    e.preventDefault();  //stop page refresh
    alert(`Thanks For Joining , ${formData.name} !  🎉 `);
    navigate('/ThankYou');
    // sent this data to backend
   };

   return(

    <div className="min-h-screen flex items-center justify-center bg-#0D0B1F px-4">
      <div className="w-full max-w-2xl bg-gradient-to-br animate-fadeInUp from-[#2c003e] via-[#3b0a58] to-[#1a1a1a] rounded-xl shadow-lg p-8 md:p-10 transition-all duration-700 ease-in-out transform opacity-0 translate-y-6 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-baskerville text-center mb-8 bg-gradient-to-r from-[#f9e0ae] via-[#f7b267] to-[#d864a9] bg-clip-text text-transparent animate-gradient p-3">
          Join The Celebration
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
            <div className="col-span-1">
              <label className="block mb-1 font-baskerville bg-gradient-to-r from-[#f9e0ae] via-[#f7b267] to-[#d864a9] bg-clip-text text-transparent">
  Full Name
</label>

            <input type="text"
            name="name"
            placeholder="Enter Your Full Name"
            className="w-full p-2 border border-gray-400 rounded"
            onChange={handleChange}
            required />

            </div>



<div className="col-span-1">
<label className="block mb-1 font-baskerville bg-gradient-to-r from-[#f9e0ae] via-[#f7b267] to-[#d864a9] bg-clip-text text-transparent">Email Id</label>
            <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Your Email"
          className="w-full p-2 border border-gray-400 rounded"
          onChange={handleChange}
          required
        />
        </div>


        <div >
            <label className="block mb-1 font-baskerville text-sm text-white bg-gradient-to-r from-[#f9e0ae] via-[#f7b267] to-[#d864a9] bg-clip-text text-transparent">Class</label>

        <select 
        name="class"
        value={formData.class}
        className="w-full p-2 rounded border border-gray-400 "
        onChange={handleChange}
        required
        defaultValue=""
>
          
          <option value=""disabled>Select Your Class</option>
          <option value="FYBSC(CS)">FYBSC(CS)</option>
          <option value="SYBSC(CS)">SYBSC(CS)</option>
          <option value="TYBSC(CS)">TYBSC(CS)</option>
          <option value="FYBCA">FYBCA</option>
          <option value="SYBCA">SYBCA</option>
          <option value="TYBCA">TYBCA</option>
          <option value="FYBSC(BT)">FYBSC(BT)</option>
          <option value="SYBSC(BT)">SYBSC(BT)</option>
          <option value="TYBSC(BT)">TYBSC(BT)</option>
          <option value="FYBSC(BI)">FYBSC(BI)</option>
          <option value="SYBSC(BI)">SYBSC(BI)</option>
          <option value="TYBSC(BI)">TYBSC(BI)</option>

         </select>
</div>

<div className="col-span-1" >
<label className="block mb-1 font-baskerville bg-gradient-to-r from-[#f9e0ae] via-[#f7b267] to-[#d864a9] bg-clip-text text-transparent">Mobile Number</label>

         <input type="tel"
         name="mobileno"
         placeholder='Mobileno'
         className="w-full p-2 border border-gray-400 rounded"
         onChange={handleChange}
         required
         />
</div>


<div className="col-span-1 sm:col-span-2">
    <label className="block mb-1 font-baskerville bg-gradient-to-r from-[#f9e0ae] via-[#f7b267] to-[#d864a9] bg-clip-text text-transparent">Event</label>
        <select name="event"  
          className="w-full p-2 border border-gray-400 rounded"
          onChange={handleChange}
          required
          defaultValue=""
          >

            <option value="" disabled>Choose Event Participation</option>
            <option value="Culture" >Culture</option>
            <option value="Creativity" >Creativity</option>
            <option value="Community" >Community</option>
            <option value="Competition" >Competition</option>
          
          </select>
</div>

          <div className="col-span-1 md:col-span-2">

          <button type="submit"
             className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-500 font-playfai hover:animate-bounce"

          >Submit
          </button>
</div>

        </form>
    </div>
    </div>
   );
};


export default CelebrationForm;