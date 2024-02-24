import { useState } from "react";
import { useForm } from "react-hook-form";
// import ReactDOM from "react-dom";
import { ErrorMessage } from "@hookform/error-message";

export default function Contact() {
  const { register, formState: { errors }, handleSubmit } = useForm({
    criteriaMode: "all"
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const onSubmit = (data) => console.log(data)

  return (
    <div className="container col-xxl-10 px-1 py-2">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-1">
      <h2 className="text-center">Contact Me:</h2>
      <div className="px-4">
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label text-white">Name:</label>
            <input onChange={(e) => setName(e.target.value)}
              onBlur={() => {
                if (name == "") {
                  alert("Name is required.");
                }
                register("name", {
                  required: "Name is required.",
                })
              }} type="name" className="form-control" id="exampleFormControlInput1" placeholder="Name goes here..." />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label text-white">Email address:</label>
            <input type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com..."
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => {
                if (email == "") {
                  alert("Email is required.");
                }
                register("email", {
                  required: "Email Address is required.",
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "Must enter a valid email address."
                  }
                })
              }} />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label text-white">Message:</label>
            <textarea onChange={(e) => setMessage(e.target.value)}
              onBlur={() => {
                if (message == "") {
                  alert("Please enter a message.");
                }
                register("message", {
                  required: "Please enter a message.",
                }
                )
              }} className="form-control" id="message" rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-sm btn-outline-secondary">SUBMIT</button>
          {/* Showing the error messages when incorrect information entered in form. */}
          <ErrorMessage
            errors={errors}
            name="multipleErrorInput"
            render={({ messages }) => {
              console.log("messages", messages);
              return messages
                ? Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                ))
                : null;
            }}
          />
        </form>
        <br></br>
        <button type="button" className="btn btn-sm btn-outline-secondary"><a href="mailto:nyaspo8@gmail.com">Email Me</a></button>
      </div>
      </div>
    </div>
  );
}



