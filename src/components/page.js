import Header1 from "./header1";
import Projects from "./projects";
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
          </div>
          <div class="col-2"></div>
        </div>
      </div>
    </div>
  );
}
export default Page;
