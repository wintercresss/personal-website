/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Chicago Blackhawks',
    position: 'Software Engineer Intern',
    startDate: '2024-6',
    endDate: '2024-8',
    highlights: [
      'Collaborated with 2 full-time engineers to redesign and modernize the Fifth Third Arena website from scratch',
      'Translated Figma mockup designs of 5 key pages into responsive and interactive web pages using Next.js, React, Typescript, and Tailwind CSS',
      'Developed and maintained various GraphQL APIs with NestJS, including creating a query to fetch upcoming events',
      'Integrated interactive maps into the website using the Google Maps API, enhancing the user experience',
    ],
  },
  {
    name: 'University of Illinois Urbana-Champaign',
    position: 'Web Development Intern',
    startDate: '2024-1',
    endDate: '2024-5',
    highlights: [
      'Cooperated with a team of 3 to redesign the ATLAS intern spotlight page using HTML/CSS and JavaScript',
      'Designed and prototyped user interface designs with Figma, enhancing user experience and design scalability',
      ' Utilized the WAVE evaluation tool to audit designs, ensuring compliance with WCAG web accessibility standards',
    ],
  },
  {
    name: 'Caesar Research Group',
    position: 'Undergraduate Research Assistant',
    url: 'https://arthena.com',
    startDate: '2014-01-01',
    endDate: '2022-01-01',
    highlights: [
      'Developed an interactive network graph in JavaScript and React with 2,200 nodes and 20,000 edges to visualize co-authorship data in research papers as a part of a networking app for academic researchers',
      'Created REST API access to a Neo4j co-authorship graph database, enabling data visualization and transformation',
      'Integrated search functionality for authors by name and university affiliation, as well as a feature to find the most famous authors with the most connections',
      'Implemented the breadth-first search algorithm, allowing users to find the closest connection between two authors',
    ],
  },
];

export default work;
