import React from 'react'
import { useState } from 'react';

const Form = () => {

    const [formData, setFormData] = useState({
        firstName : "", lastName:"", email:"", street:"", city:"", state:"" , zip:"",country:"India",select:true,
        comment:"", Candidate:"", Offers:"",  notify:""
      })
    
     function changeHandler(event){
      const {name,value, type, checked} = event.target;
      setFormData(prevFormData =>{
        return{
          ...prevFormData,
          [name] : type === "checkbox" ? checked : value
        }
      })
    
     }
    
      function submitHandler(event){
        event.preventDefault()
        console.log(formData)
      }

  return (
    <div>
      <div className='w-full h-full flex flex-col justify-center items-center mt-4 mb-5'>
      <div>
        <h1 className='font-bold underline mb-3'>Fill All Your Details</h1>
      </div>
      <form className='w-3/4 flex flex-col bg-gray-200 p-4 rounded-md border-black border' onSubmit={submitHandler}>

          <label>First name</label>
          <input className='border-blue-200 border rounded-md pl-2'
          type="text"
          name="firstName"
          onChange={changeHandler}
          placeholder='First name'
          value={formData.firstName}
          />

          <label>Last name</label>
          <input className='border-blue-200 border rounded-md pl-2'
          type="text"
          name="lastName"
          onChange={changeHandler}
          placeholder='Second name'
          value={formData.lastName}
          />

          <label>Email address</label>
          <input className='border-blue-200 border rounded-md pl-2'
          type="email"
          name="email"
          onChange={changeHandler}
          placeholder='Email'
          value={formData.email}
          />

          <label>Country</label>
          <select className='border-blue-200 border rounded-md pl-2' 
          onChange={changeHandler}
          name="country"
          value={formData.country}
          >
            <option value="India">India</option>
            <option value="America">America</option>
            <option value="England">England</option>
            <option value="France">France</option>
            <option value="Japan">Japan</option>
          </select>

          <label>Street address</label>
          <input  className='border-blue-200 border rounded-md pl-2'
          type="text" 
          name="street"
          onChange={changeHandler}
          value={formData.street}
          placeholder='1234 Main st'
          />

          <label>City</label>
          <input  className='border-blue-200 border rounded-md pl-2'
          type="text" 
          name="city"
          onChange={changeHandler}
          value={formData.city}
          placeholder='Bangalore'
          />

          <label>State/Province</label>
          <input  className='border-blue-200 border rounded-md pl-2'
          type="text" 
          name="state"
          onChange={changeHandler}
          value={formData.state}
          placeholder='Karnataka'
          />

          <label>ZIP/Postal code</label>
          <input  className='border-blue-200 border rounded-md pl-2'
          type="text" 
          name="zip"
          onChange={changeHandler}
          value={formData.zip}
          placeholder='123456'
          />


{/* checkbox */}

          <p className='font-semibold mt-3 mb-3'>By Email</p>
          <label htmlFor="comment">
          <input  className="mr-2"
          type="checkbox" 
          id='comment'
          name='comment'
          onChange={changeHandler}
          value={formData.comment}
          />
          Comments
          <p className='text-gray-400 pl-5'>Get notified when someone posts a comment on a posting</p>
          </label>

          <label htmlFor="Candidate">
          <input  className="mr-2"
          type="checkbox" 
          name='Candidate'
          id='Candidate'
          onChange={changeHandler}
          value={formData.Candidate}
          />
          
          Candidate
          <p className='text-gray-400 pl-5'>Get notifies when candidate applies for the job</p>          

          </label>

          <label htmlFor="Offers">
          <input  className="mr-2"
          type="checkbox" 
          name='Offers'
          id='Offers'
          value={formData.Offers}
          onChange={changeHandler}
          />
          Offers <br />
          <p className='text-gray-400 pl-5' >Get notified when a candidate accepts or rejects an offer</p>
          </label>


{/* Radio buttons */}

          <p className='font-semibold mt-3'>Push Notifications</p>
          <p className='text-gray-400 mb-3'>These are delivered via SMS to your mobile phone.</p>

          <label htmlFor="Everything">
            <input className='mr-2'
            type="radio" 
            name='notify'
            value="Everything"
            onChange={changeHandler}
            id='Everything'
            checked={formData.notify === "Everything"}
            />
            Everything
          </label>

          <label htmlFor="Same">
            <input className='mr-2'
            type="radio" 
            name='notify'
            value="Same as email"
            onChange={changeHandler}
            id='Same'
            checked={formData.notify === "Same as email"}
            />
            Same as email
          </label>

          <label htmlFor="notifications">
            <input className='mr-2'
            type="radio" 
            name='notify'
            id='notification'
            onChange={changeHandler}
            value="No push notification"
            checked={formData.notify === "No push notification"}
            />
            No push notifications
          </label>

          <button className='flex flex-start bg-blue-500 w-[50px] h-[30px] items-center justify-center mt-4 rounded-sm text-white font-semibold'>Save</button>
          

      </form>
    </div>
    </div>
  )
}

export default Form
