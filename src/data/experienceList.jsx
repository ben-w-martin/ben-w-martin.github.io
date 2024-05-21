import { ListItemDropdown } from "../components/experience_dropdown/ListItemDropdown";
import * as options from "./listItemOptions";

const experienceList = [
  [
    {
      string:
        "Developed application that renders information about space objects visible at a given location.",
      subcomponent: <ListItemDropdown options={options.spaceProject} / >,
    },
    {
      string:
        "Collaborated with designer to develop Figma mockup into a responsive user interface with React and Vite.",
      subcomponent: null,
    },
    {
      string:
        "Incorporated mathematical formulas into application logic to display direction, distance between client location and space objects.",
      subcomponent: null,
    },
    {
      string:
        "Leveraged Artificial Intelligence to increase workflow efficiency, eliminate redundant processes.",
      subcomponent: null,
    },
  ],
  [
    {
      string:
        "Engineered robust database structures, tables, stored procedures, and functions using SQL.",
      subcomponent: null,
    },
    {
      string:
        "Developed RESTful APIs with .NET Core to ensure secure HTTP request routing between client and server.",
      subcomponent: null,
    },
    {
      string:
        "Created domain and data-annotated request models in ASP.NET for reliable binding and universal type-accuracy.",
      subcomponent: null,
    },
    {
      string:
        "Implemented third party component libraries such as Formik, Yup, and React Google Maps to create powerful User Interfaces with type-safe input capabilities.",
      subcomponent: (
        <ListItemDropdown key="dropdown-Forms" options={options.tabiVenues} />
      ),
    },
    {
      string:
        "Contributed to Agile environment through daily stand-ups, code reviews, and code talks.",
      subcomponent: null,
    },
    {
      string:
        "Collaborated on production efforts through Git and GitHub version control services, merge conflict resolution, and clear communication with senior developers.",
      subcomponent: null,
    },
    {
      string:
        "Provided meaningful feedback on Pull Requests to improve upon adherence to development standards and industry best practices.",
      subcomponent: null,
    },
    {
      string:
        "Produced roles-based user profiles with tailored access and content management capabilities.",
      subcomponent: null,
    },
    {
      string:
        "Leveraged data structures and algorithms to conform API response objects to custom formats, creating a richer functionality and user experience.",
      subcomponent: null,
    },
  ],
  [
    {
      string:
        "Provided clinical behavioral health support and education while deployed in a combat zone.",
      subcomponent: null,
    },
    {
      string:
        "Utilized electronic healthcare systems to conduct excellent patient care with detailed technical notes and documentation.",
      subcomponent: null,
    },
    {
      string:
        "Designed digital graphics, content, and promotional media for marketing events and clinical services.",
      subcomponent: null,
    },
  ],
];

export default experienceList;
