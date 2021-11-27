import Header1 from "./header1";
import Projects from "./projects";
import Technologies from "./technologies";
import Exp from "./exp";
import Accomplishments from "./accomplishments";
import Social from "./social";
function Page() {
  return (
    <div className="page">
      <div class="container-fluid">
        <div class="row">
          <div class="col-2"></div>
          <div class="col color2">
            <Header1 />
            <hr className="line" />
            <Projects />
            <hr className="line" />
            <Technologies />
            <hr className="line" />
            <Exp />
            <hr className="line" />
            <Accomplishments />

            <hr />

            <div class="container">
              <div class="row">
                <div class="col-10">
                  <p>Looking for challenges</p>
                </div>
                <div class="col">
                  <Social />
                </div>
              </div>
            </div>
          </div>
          <div class="col-2"></div>
        </div>
      </div>
    </div>
  );
}
export default Page;
