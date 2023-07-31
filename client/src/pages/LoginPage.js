import React from 'react'

export default function LoginPage() {
  return (
    <div>
      <form className='login'>
        <input type="text" placeholder="username"/>
        <input type="password" placeholder="pasword"/>
        <button>Login</button>
      </form>
    </div>
  )
}
