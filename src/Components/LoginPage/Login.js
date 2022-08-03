import React from 'react';
import  './templand.css';

const Login = () => {
  return (
    <div>
    
      <div className="parent clearfix">
  <div className="bg-illustration">
    <h1>
      <span>By Aakash Goradia</span>
    </h1>
    <div className="burger-btn">
      <span />
      <span />
      <span />
    </div>
  </div>
  <div className="container">
    <div className="screen">
      <div className="screen__content">
        <form className="login" autoComplete='on'>
          <h1>
            Login to Access Your <span> Account</span>
          </h1>
          <div className="login__field">
            <em className="login__icon fas fa-user" />
            <input
              type="text"
              className="login__input"
              placeholder="User name / Email"
            />
          </div>
          <div className="login__field">
            <em className="login__icon fas fa-lock" />
            <input
              type="password"
              className="login__input"
              placeholder="Password"
            />
          </div>
          <button className="button login__submit">
            <span className="button__text">Log In Now --&gt;</span>
            <i className="button__icon fas fa-chevron-right" />
          </button>
        </form>
        {/* <div class="social-login">
                  <h3>log in via</h3>
                  <div class="social-icons">
                      <a href="#" class="social-login__icon fab fa-instagram"></a>
                      <a href="#" class="social-login__icon fab fa-facebook"></a>
                      <a href="#" class="social-login__icon fab fa-twitter"></a>
                  </div>
              </div> */}
      </div>
      <div className="screen__background">
        <span className="screen__background__shape screen__background__shape4" />
        <span className="screen__background__shape screen__background__shape3" />
        <span className="screen__background__shape screen__background__shape2" />
        <span className="screen__background__shape screen__background__shape1" />
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login
