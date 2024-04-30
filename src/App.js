import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    const { value } = e.target;
    if (interests.includes(value)) {
      setInterests(interests.filter((interest) => interest !== value));
    } else {
      setInterests([...interests, value]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <h1>Hi, I'm {name}</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      {/* Newsletter Signup Form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label>Interests:</label>
          <br />
          <input
            type="checkbox"
            id="technology"
            name="interests"
            value="Technology"
            onChange={handleCheckboxChange}
            checked={interests.includes("Technology")}
          />
          <label htmlFor="technology">Technology</label>
          <br />
          <input
            type="checkbox"
            id="travel"
            name="interests"
            value="Travel"
            onChange={handleCheckboxChange}
            checked={interests.includes("Travel")}
          />
          <label htmlFor="travel">Travel</label>
          <br />
          <input
            type="checkbox"
            id="food"
            name="interests"
            value="Food"
            onChange={handleCheckboxChange}
            checked={interests.includes("Food")}
          />
          <label htmlFor="food">Food</label>
          <br />
          <input
            type="checkbox"
            id="sports"
            name="interests"
            value="Sports"
            onChange={handleCheckboxChange}
            checked={interests.includes("Sports")}
          />
          <label htmlFor="sports">Sports</label>
          <br />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* Display submitted message */}
      {submitted && (
        <div>
          <p>Thank you, {name}! Your signup was successful.</p>
          {interests.length > 0 && (
            <p>Your interests: {interests.join(", ")}.</p>
          )}
        </div>
      )}
    </main>
  );
}

export default App;
