import theme_pattern from "../../assets/theme_pattern.svg";

const MyProject = () => {
  return (
    <div>
      <div className="about-title">
        <h1 className="text-red-500">My Latest Project</h1>
        <img src={theme_pattern} alt="" />
      </div>
    </div>
  );
};

export default MyProject;
