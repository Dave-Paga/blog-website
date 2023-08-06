import React from 'react'

export default function LoginPage() {
  return (
    <div>
      <form className='login'>
        <h1>Login</h1>
        <input type="text" placeholder="username"/>
        <input type="password" placeholder="pasword"/>
        <button>Login</button>
      </form>
    </div>
  )
}
