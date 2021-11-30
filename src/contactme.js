import react, { setState, useState } from "react";
import Navbar from "./components/navbar";
function Contactme() {
  const [message, setMessage] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneno: "",
    msg: "",
  });
  let name, value;
  const getUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setMessage({ ...message, [name]: value });
  };
  const postData = async (e) => {
    e.preventDefault();
    const { firstname, lastname, email, phoneno, msg } = message;
    if (email && firstname && lastname) {
      const res = await fetch(
        "https://trans-invention-301703-default-rtdb.firebaseio.com/messagedata.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname,
            lastname,
            email,
            phoneno,
            msg,
          }),
        }
      );
      if (res) {
        setMessage({
          firstname: "",
          lastname: "",
          email: "",
          phoneno: "",
          msg: "",
        });
      }
      alert("I'll get in touch asap. Thanks for visiting.");
    } else {
      alert("Please fill the * marked data.");
    }
  };
  console.log(message);
  return (
    <>
      <Navbar />

      <div className="Container">
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
          <button className="btn grad1 shadow-none">
            <spam>
              <a href="contactme">CONTACT ME</a>
            </spam>
          </button>
        </div>
        <main className="card1 form-signin border1">
          <form>
            <form method="POST">
              <div className="mb-3">
                <label className="form-label color3 ">
                  First Name<spam className="color4">*</spam>
                </label>
                <input
                  placeholder="Tony"
                  type="text"
                  className="form-control shadow-none search-query"
                  id="exampleInputPassword1"
                  name="firstname"
                  value={message.firstname}
                  onChange={getUserData}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label color3">
                  Last Name<spam className="color4">*</spam>
                </label>
                <input
                  placeholder="Stark"
                  type="text"
                  className="form-control shadow-none search-query"
                  id="exampleInputPassword1"
                  name="lastname"
                  value={message.lastname}
                  onChange={getUserData}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label color3">
                  Email address<spam className="color4">*</spam>
                </label>
                <input
                  type="email"
                  placeholder="tony@starkindustries.com"
                  className="form-control shadow-none search-query"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={message.email}
                  onChange={getUserData}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label color3">Phone number</label>
                <input
                  placeholder="+919999999999"
                  type="tel"
                  className="form-control shadow-none search-query"
                  id="exampleInputPassword1"
                  name="phoneno"
                  value={message.phoneno}
                  onChange={getUserData}
                />
              </div>
              <div className="mb-3">
                <label className="form-label color3">Message</label>
                <textarea
                  placeholder="I am Ironman."
                  className="form-control shadow-none search-query"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={message.msg}
                  onChange={getUserData}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn grad1 shadow-none"
                onClick={postData}
              >
                <spam>SUBMIT</spam>
              </button>
            </form>
          </form>
        </main>
      </div>
    </>
  );
}
export default Contactme;
