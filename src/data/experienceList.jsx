import { ListItemDropdown } from "../components/experience_dropdown/ListItemDropdown";
import * as options from "./listItemOptions";

const experienceList = [
    [
      {
          "string": "Migrated sensitive processes away from the application level by developing event-driven Cloud Functions in Firebase, optimizing system performance and enabling seamless expansion to support future growth and increasing demands.",
          "subcomponent": null
      },
      {
          "string": "Developed in a virtual Linux environment accessed over SSH via Google Workstations.",
          "subcomponent": null
      }
  ],
    [
      {
          "string": "Increased development speed by 35% by generating forms using available third-party libraries like Formik and Yup.",
          "subcomponent": <ListItemDropdown key="dropdown-Forms" options={options.tabiVenues} />
      },
      {
          "string": "Enriched user experience by creating advanced features and responsive designs using CSS and Bootstrap.",
          "subcomponent": null
      },
      {
          "string": "Increased front-end performance by 50% by leveraging data structures and algorithms to improve functions.",
          "subcomponent": null
      },
      {
          "string": "Mitigated financial vulnerabilities, decreased risk of malicious requests, and protected user data by designing RESTful Web APIs in .NET Core with multilayered request validation and request models with stringent data annotations.",
          "subcomponent": null
      },
      {
          "string": "Ensured confidentiality, integrity, and availability of information in relational database development by engineering normalized tables, stored procedures, and user-defined functions using SQL Server and T-SQL.",
          "subcomponent": null
      },
      {
          "string": "Employed SOLID principles and C# design patterns in back-end architecture by developing ASP.NET API controllers that implement ADO.NET data-access interfaces with classes instantiated as singletons in dependency injection.",
          "subcomponent": null
      },
      {
          "string": "Restricted access to sensitive site features with authorization, authentication, and roles-based security policies.",
          "subcomponent": null
      },
      {
          "string": "Contributed to workflow in Agile environment through daily stand-ups, code reviews, and code talks.",
          "subcomponent": null
      },
      {
          "string": "Created staging and production-ready code by emphasizing accountability in the version control and hosting process with Git and GitHub, decreasing production bugs by 75%.",
          "subcomponent": null
      }
  ],
  [
    {
        "string": "Scored in the 98th percentile on the Armed Services Vocational Aptitude Battery (ASVAB).",
        "subcomponent": null
    },
    {
        "string": "Used electronic healthcare systems to maintain HIPAA compliance on overseas deployment, ensuring privacy and quality treatment for 500 soldiers, resulting in Army Commendation and Army Achievement Medals.",
        "subcomponent": null
    }
],

[
  {
      "string": "Developed web application that accesses APIs to plan stargazing trips using real-time space data - Repository",
      "subcomponent": <ListItemDropdown options={options.spaceProject} />
  },
  {
      "string": "Translated mathematical formulas into JavaScript to elicit smart features from raw geographical data.",
      "subcomponent": null
  }
]

];

export default experienceList;
