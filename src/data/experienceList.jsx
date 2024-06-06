import { ListItemDropdown } from "../components/experience_dropdown/ListItemDropdown";
import * as options from "./listItemOptions";

const experienceList = [
  [
    {
      string:
        "Created scalable Cloud Functions in Firebase, optimizing system performance and enabling seamless expansion to support future growth and increasing user demands.",
      subcomponent: null,
    }
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
        "Scored in the 98th percentile on the Armed Services Vocational Aptitude Battery (ASVAB) test.",
      subcomponent: null,
    },
    {
      string:
        "Used electronic healthcare systems to maintain HIPAA compliance on overseas deployment, ensuring confidentiality, integrity, and availability of patient information, resulting in Army Commendation and Army Achievement Medals.",
      subcomponent: null,
    },
  ],
  [
    {
      string:
        "Developed web application that leverages APIs to plan stargazing trips using real-time space data.",
      subcomponent: <ListItemDropdown options={options.spaceProject} />,
    },
    {
      string:
        "Used mathematical formulas in code to leverage geographical data to create smart features.",
      subcomponent: null,
    }
  ]
];

export default experienceList;
