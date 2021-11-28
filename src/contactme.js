import Navbar from "./components/navbar";
function Contactme() {
  return (
    <>
      <Navbar />

      <div className="Container">
        <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
          <button className="btn grad1 shadow-none">
            <spam>
              <a href="contactme">CONTACT ME</a>
            </spam>
          </button>
        </div>
        <main className="card1 form-signin border1">
          <form>
            <form>
              <div className="mb-3">
                <label for="firstname" className="form-label color3 ">
                  First Name<spam className="color4">*</spam>
                </label>
                <input
                  placeholder="Tony"
                  type="text"
                  className="form-control shadow-none search-query"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label for="lastname" className="form-label color3">
                  Last Name<spam className="color4">*</spam>
                </label>
                <input
                  placeholder="Stark"
                  type="text"
                  className="form-control shadow-none search-query"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label color3">
                  Email address<spam className="color4">*</spam>
                </label>
                <input
                  type="email"
                  placeholder="tony@starkindustries.com"
                  className="form-control shadow-none search-query"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label for="phoneno" className="form-label color3">
                  Phone number
                </label>
                <input
                  placeholder="9999999999"
                  type="number"
                  className="form-control shadow-none search-query"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleFormControlTextarea1 "
                  class="form-label color3"
                >
                  Message
                </label>
                <textarea
                  placeholder="I am Ironman."
                  class="form-control shadow-none search-query"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" className="btn grad1 shadow-none">
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
