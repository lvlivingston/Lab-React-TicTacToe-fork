import Winner from '../Winner/Winner';

export default function Messages({ Winner, Turn }) {
  return (
    <>
      {Winner === 'X' && <div>X is Winner</div>}
      {Winner === 'O' && <div>O is Winner</div>}
      {!Winner && <div>It's a Tie!</div>}
      {Turn === 'X' && <div>X's Turn</div>}
      {Turn === 'O' && <div>O's Turn</div>}
    </>
  );
}



// import { useState } from 'react';
// import * as usersService from '../../utilities/users-service';

// export default function LoginForm({ setUser }) {
//   const [credentials, setCredentials] = useState({
//     email: '',
//     password: ''
//   });
//   const [error, setError] = useState('');

//   function handleChange(evt) {
//     setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
//     setError('');
//   }

//   async function handleSubmit(evt) {
//     // Prevent form from being submitted to the server
//     evt.preventDefault();
//     try {
//       // The promise returned by the signUp service method 
//       // will resolve to the user object included in the
//       // payload of the JSON Web Token (JWT)
//       const user = await usersService.login(credentials);
//       // const payload = JSON.parse(atob(user.split('.')[1]));
//       // console.log(payload)
//       // setUser(payload.user);
//       setUser(user);
//     } catch (err) {
//         console.log(err)
//       setError('Log In Failed - Try Again');
//     }
//   }

//   return (
//     <div>
//       <div className="form-container">
//         <form autoComplete="off" onSubmit={handleSubmit}>
//           <label>Email</label>
//           <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
//           <label>Password</label>
//           <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
//           <button type="submit">LOG IN</button>
//         </form>
//       </div>
//       <p className="error-message">&nbsp;{error}</p>
//     </div>
//   );
// }
