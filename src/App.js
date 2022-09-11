// import React, { Component } from 'react';

// class App extends Component {
//   alertName = () => {
//     alert('John Doe');
//   };

//   render() {
//     return (
//       <div>
//         <h3>This is a Class Component</h3>
//         <button onClick={this.alertName}>
//           Alert
//         </button>
//       </div>
//     );
//   }
// };

// //export default App;
// import React from 'react';

// function App() {
//   const alertName = () => {
//     alert('John Doe');
//   };

//   return (
//     <div>
//       <h3>This is a Functional Component</h3>
//       <button onClick={alertName}>
//         Alert
//       </button>
//     </div>
//   );
// };

// export default App;
// import React, { Component } from 'react';

// class App extends Component {
//   state = {
//     name: ''
//   }

//   alertName = () => {
//     alert(this.state.name);
//   };

//   handleNameInput = e => {
//     this.setState({ name: e.target.value });
//   };

//   render() {
//     return (
//       <div>
//         <h3>This is a Class Component</h3>
//         <input
//           type="text"
//           onChange={this.handleNameInput}
//           value={this.state.name}
//           placeholder="Your Name"
//         />
//         <button onClick={this.alertName}>
//           Alert
//         </button>
//       </div>
//     );
//   }
// }

// //export default App;
// import React, { useState } from 'react';

// function App() {
//   const [name, setName] = useState('John Doe');

//   const alertName = () => {
//     alert(name);
//   };

//   const handleNameInput = e => {
//     setName(e.target.value);
//   };

//   return (
//     <div>
//       <h3>This is a Functional Component</h3>
//       <input
//         type="text"
//         onChange={handleNameInput}
//         value={name}
//         placeholder="Your Name"
//       />
//       <button onClick={alertName}>
//         Alert
//       </button>
//     </div>
//   );
// };

// //export default App;
// import React, { Component } from 'react';

// class App extends Component {
//   state = {
//     userName: '',
//     firstName: '',
//     lastName: ''
//   };

//   logName = () => {
//     console.log(this.state.userName);
//     console.log(this.state.firstName);
//     console.log(this.state.lastName);
//   };

//   handleUserNameInput = e => {
//     this.setState({ userName: e.target.value });
//   };
//   handleFirstNameInput = e => {
//     this.setState({ firstName: e.target.value });
//   };
//   handleLastNameInput = e => {
//     this.setState({ lastName: e.target.value });
//   };

//   render() {
//     return (
//       <div>
//         <h3>This is a Class Component</h3>
//         <input
//           type="text"
//           onChange={this.handleUserNameInput}
//           value={this.state.userName}
//           placeholder="Your Username"
//         />
//         <input
//           type="text"
//           onChange={this.handleFirstNameInput}
//           value={this.state.firstName}
//           placeholder="Your First Name"
//         />
//         <input
//           type="text"
//           onChange={this.handleLastNameInput}
//           value={this.state.lastName}
//           placeholder="Your Last Name"
//         />
//         <button
//           className="btn btn-large right"
//           onClick={this.logName}
//         >
//           Log Names
//         </button>
//       </div>
//     );
//   }
// }

// //export default App;
// import React, { useState } from 'react';

// function App() {
//   const [userName, setUsername] = useState('');
//   const [firstName, setFirstname] = useState('');
//   const [lastName, setLastname] = useState('');

//   const logName = () => {
//     console.log(userName);
//     console.log(firstName);
//     console.log(lastName);
//   };

//   const handleUserNameInput = e => {
//     setUsername(e.target.value);
//   };
//   const handleFirstNameInput = e => {
//     setFirstname(e.target.value);
//   };
//   const handleLastNameInput = e => {
//     setLastname(e.target.value);
//   };

//   return (
//     <div>
//       <h3>This is a Functional Component</h3>
//       <input
//         type="text"
//         onChange={handleUserNameInput}
//         value={userName}
//         placeholder="Your Username"
//       />
//       <input
//         type="text"
//         onChange={handleFirstNameInput}
//         value={firstName}
//         placeholder="Your First Name"
//       />
//       <input
//         type="text"
//         onChange={handleLastNameInput}
//         value={lastName}
//         placeholder="Your Last Name"
//       />
//       <button
//         className="btn btn-large right"
//         onClick={logName}
//       >
//         Log Names
//       </button>
//     </div>
//   );
// };

// //export default App;
// import React, { Component } from 'react';

// class App extends Component {
//   state = {
//     // initial state
//     userName: 'johndoe',
//     firstName: 'John',
//     lastName: 'Doe'
//   }

//   componentDidMount() {
//     setInterval(() => {
//       this.setState({
//         // update state
//         userName: 'janedoe',
//         firstName: 'Jane',
//         lastName: 'Doe'
//       });
//     }, 5000);
//   }

//   logName = () => {
//     console.log(this.state.userName);
//     console.log(this.state.firstName);
//     console.log(this.state.lastName);
//   };

//   handleUserNameInput = e => {
//     this.setState({ userName: e.target.value });
//   };
//   handleFirstNameInput = e => {
//     this.setState({ firstName: e.target.value });
//   };
//   handleLastNameInput = e => {
//     this.setState({ lastName: e.target.value });
//   };

//   render() {
//     return (
//       <div>
//         <h3>This is a Class Component</h3>
//         <input
//           type="text"
//           onChange={this.handleUserNameInput}
//           value={this.state.userName}
//           placeholder="Your Username"
//         />
//         <input
//           type="text"
//           onChange={this.handleFirstNameInput}
//           value={this.state.firstName}
//           placeholder="Your First Name"
//         />
//         <input
//           type="text"
//           onChange={this.handleLastNameInput}
//           value={this.state.lastName}
//           placeholder="Your Last Name"
//         />
//         <button
//           className="btn btn-large right"
//           onClick={this.logName}
//         >
//           Log Names
//         </button>
//       </div>
//     );
//   }
// }

// //export default App;
// import React, { useState, useEffect } from 'react';

// function App() {
//   const [userName, setUsername] = useState('johndoe');
//   const [firstName, setFirstname] = useState('John');
//   const [lastName, setLastname] = useState('Doe');

//   useEffect(() => {
//     setInterval(() => {
//       setUsername('janedoe');
//       setFirstname('Jane');
//       setLastname('Doe');
//     }, 5000);
//   });

//   const logName = () => {
//     console.log(userName);
//     console.log(firstName);
//     console.log(lastName);
//   };

//   const handleUserNameInput = e => {
//     setUsername({ userName: e.target.value });
//   };
//   const handleFirstNameInput = e => {
//     setFirstname({ firstName: e.target.value });
//   };
//   const handleLastNameInput = e => {
//     setLastname({ lastName: e.target.value });
//   };

//   return (
//     <div>
//       <h3>This is a Functional Component</h3>
//       <input
//         type="text"
//         onChange={handleUserNameInput}
//         value={userName}
//         placeholder="Your Username"
//       />
//       <input
//         type="text"
//         onChange={handleFirstNameInput}
//         value={firstName}
//         placeholder="Your First Name"
//       />
//       <input
//         type="text"
//         onChange={handleLastNameInput}
//         value={lastName}
//         placeholder="Your Last Name"
//       />
//       <button
//         className="btn btn-large right"
//         onClick={logName}
//       >
//         Log Names
//       </button>
//     </div>
//   );
// };

// //export default App;
// import React, { Component } from 'react';

// class App extends Component {
//   state = {
//     header: 'Welcome to React Hooks'
//   }

//   componentDidMount() {
//     const header = document.querySelectorAll('#header')[0];
//     setTimeout(() => {
//       header.innerHTML = this.state.header;
//     }, 3000);
//   }

//   render() {
//     return (
//       <div>
//         <h3 id="header">This is a Class Component</h3>
//       </div>
//     );
//   }
// }

// //export default App;
// import React, { Component } from 'react';

// class App extends Component {
//   state = {
//     header: 'Welcome to React Hooks'
//   }

//   componentDidMount() {
//     const header = document.querySelectorAll('#header')[0];
//     setTimeout(() => {
//       header.innerHTML = this.state.header;
//     }, 3000);
//   }

//   componentDidUpdate() {
//     const node = document.querySelectorAll('#header')[0];
//     node.innerHTML = this.state.header;
//   }

//   handleHeaderInput = e => {
//     this.setState({ header: e.target.value });
//   };

//   render() {
//     return (
//       <div>
//         <h3 id="header">This is a Class Component</h3>
//         <input
//           type="text"
//           onChange={this.handleHeaderInput}
//           value={this.state.header}
//         />
//       </div>
//     );
//   }
// }

// //export default App;
// import React, { useState, useEffect } from 'react';

// function App() {
//   const [header, setHeader] = useState('Welcome to React Hooks');

//   useEffect(() => {
//     const newheader = document.querySelectorAll('#header')[0];
//     setTimeout(() => {
//       newheader.innerHTML = header;
//     }, 3000);
//   });

//   const handleHeaderInput = e => {
//     setHeader(e.target.value);
//   };

//   return (
//     <div>
//       <h3 id="header">This is a Functional Component</h3>
//       <input
//         type="text"
//         onChange={handleHeaderInput}
//         value={header}
//       />
//     </div>
//   );
// };

// //export default App;
// import React, { Component } from 'react';

// function Unstable(props) {
//   // monitor how many times this component is rendered
//   console.log('Rendered Unstable component');
//   return (
//     <div>
//       <p>{props.value}</p>
//     </div>
//   );
// };

// class App extends Component {
//   state = {
//     value: 1
//   };

//   componentDidMount() {
//     setInterval(() => {
//       this.setState(() => {
//         return { value: 1 };
//       });
//     }, 2000);
//   }

//   render() {
//     return (
//       <div>
//         <Unstable value={this.state.value} />
//       </div>
//     );
//   }
// }
// //export default App;
// import React, { PureComponent } from 'react';

// function Unstable(props) {
//   console.log('Rendered Unstable component');
//   return (
//     <div>
//       <p>{props.value}</p>
//     </div>
//   );
// };

// class App extends PureComponent {
//   state = {
//     value: 1
//   };

//   componentDidMount() {
//     setInterval(() => {
//       this.setState(() => {
//         return { value: 1 };
//       });
//     }, 2000);
//   }

//   render() {
//     return (
//       <div>
//         <Unstable value={this.state.value} />
//       </div>
//     );
//   }
// }

// //export default App;