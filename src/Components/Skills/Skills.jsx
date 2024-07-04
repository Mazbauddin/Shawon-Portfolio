import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import theme_pattern from "../../assets/theme_pattern.svg";

import { SiDaisyui, SiExpress, SiMongodb } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import {
  RiBootstrapFill,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { DiNodejs } from "react-icons/di";

const Skills = () => {
  return (
    <div>
      <div className="heading">
        <div className="heading-title">
          <h1>Skills</h1>
          <img src={theme_pattern} alt="" />
        </div>
      </div>
      <div>
        <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
          <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
            <TbBrandJavascript className=" social-img w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />

            <FaHtml5 className=" social-img w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square py-6" />

            <FaCss3Alt className=" social-img w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square py-6" />

            <RiTailwindCssFill className=" social-img w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square px-6" />
            <SiDaisyui className=" social-img text-4xl w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square px-6" />

            <RiBootstrapFill className=" social-img w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square px-6" />

            <DiNodejs className=" social-img w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square px-6" />

            <SiMongodb className="social-img w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square py-6" />

            <SiExpress className="social-img w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square px-6" />
            <RiReactjsLine className=" social-img w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
