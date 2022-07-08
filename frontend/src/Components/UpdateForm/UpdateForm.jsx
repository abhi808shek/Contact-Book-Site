import React from 'react'
import "./styles/updateform.css"
import Profile_Photo from "./views/profile.png"

const UpdateForm = () => {
  return (
    <div>
      <div className="update-form-background-img">
        <div className="update-form-container">
          <div className="update-form-content-box">
            <h1 className="update-form-title">Update the Contact Details</h1>
            <div className="update-container">
              <div className="update-form">
                <div className="update-form-inner-box">
                  <label htmlFor="" className="update-form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="update-form-input-box"
                    placeholder="Ex. Johnny Depp "
                  />
                </div>

                <div className="update-form-inner-box">
                  <label htmlFor="" className="update-form-label">
                    Email I’D
                  </label>
                  <input
                    type="email"
                    className="update-form-input-box"
                    placeholder="Ex. xxx@mail.com "
                  />
                </div>

                <div className="update-form-inner-box">
                  <label htmlFor="" className="update-form-label">
                    Choose Password
                  </label>
                  <input
                    type="password"
                    className="update-form-input-box"
                    placeholder="Choose a strong password "
                  />
                </div>

                <div className="update-form-inner-box ">
                  <label htmlFor="" className="update-form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="update-form-input-box"
                    placeholder="Choose a strong password "
                  />
                </div>
                <button className="update-form-submit-btn">Update</button>
              </div>
              <div className="update-form-image-box">
                <h1 className="update-form-profile-text">Profile Photo</h1>
                <div>
                  <img src={Profile_Photo} alt="" className='img'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateForm