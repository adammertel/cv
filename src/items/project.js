import { FaBook, FaMapMarkedAlt, FaCode, FaFileAlt } from "react-icons/fa";
import React from "react";

export var links = [
  { id: 1, label: "application", icon: <FaMapMarkedAlt /> },
  { id: 2, label: "code", icon: <FaCode /> },
  { id: 3, label: "study", icon: <FaBook /> },
  { id: 4, label: "manual", icon: <FaFileAlt /> },
];

export var statuses = [
  { id: 1, label: "in-progress", color: "#bdbdbd" },
  { id: 2, label: "done", color: "white" },
  { id: 3, label: "experimental", color: "#737373" },
];

export var outputs = [
  { id: 1, label: "study", color: "#FB8072" },
  { id: 2, label: "application", color: "#8DD3C7" },
  { id: 3, label: "visualization", color: "#BEBADA" },
  { id: 4, label: "analysis", color: "#FDB462" },
];

var tagColor = "#77A6D2";
export var tags = [
  { id: 1, label: "JS | TS | react" },
  { id: 2, label: "leafletJS" },
  { id: 3, label: "nodeJS" },
  { id: 4, label: "Python" },
  { id: 5, label: "R" },
  { id: 6, label: "PostGres | PostGIS" },
  { id: 7, label: "rethinkDB" },
  { id: 8, label: "mySQL | mariaDB" },
  { id: 9, label: "d3 | vega" },
  { id: 10, label: "HTML5 Canvas" },
  { id: 11, label: "GIS analysis" },
  { id: 12, label: "network analysis" },
  { id: 13, label: "digital humanities" },
  { id: 14, label: "complex systems" },
  { id: 15, label: "analytical systems" },
  { id: 16, label: "REST" },
  { id: 17, label: "weather analysis" },
  { id: 18, label: "environmental data" },
  { id: 19, label: "spatiotemporal | real-time" },
  { id: 20, label: "transportation data" },
  { id: 21, label: "game" },
  { id: 22, label: "graphs db | neo4J" },
  { id: 23, label: "data mining" },
  { id: 24, label: "data visualization technique" },
  { id: 25, label: "threeJs" },
];

tags.forEach((tag) => (tag["color"] = tagColor));

export var itemsProject = [
  {
    time: "2018",
    label: "Baptisteries",
    text:
      "This interactive map visualizes a database of Christian baptisteries built between the 3rd and 12th centuries. The database is a digital adaptation and formalization of the most complete (as of 2017) catalogue of baptisteries by Sebastian Ristow (Frühchristliche Baptisterien, Münster: Aschendorffsche Verlagsbuchhandlung, 1998)",
    image: "baptisteries",
    status: [2],
    output: [3],
    tags: [1, 9, 3, 11, 13],
    links: [
      { type: 1, value: "https://dissinet.cz/maps/baptisteries/" },
      {
        type: 2,
        value: "https://github.com/adammertel/baptisteries.map",
      },
    ],
  },
  {
    time: "2018 — 2019",
    label: "Historical Geocoding Assistant",
    text:
      "Open source browser-based application for assigning geographic coordinates in a more convenient and faster way than copy-pasting them from services such as Google Maps. The application was designed with historical projects in mind but is suitable for any geocoding work.",
    image: "hga",
    status: [2],
    output: [2],
    tags: [1, 2, 13],
    links: [
      {
        type: 1,
        value: "hde.geogr.muni.cz/hga/",
      },
      {
        type: 2,
        value: "https://github.com/adammertel/historical-geocoder-assistant",
      },
      {
        type: 4,
        value:
          "https://github.com/adammertel/historical-geocoder-assistant/tree/master/manual",
      },
    ],
  },
  {
    time: "2019",
    label: "Map of Lollards",
    text:
      "This map shows the places of origin of English dissidents under investigation for taking part in the revolts of 1414 or 1431, related to Lollardy, or holding various heterodox opinions that are commonly referred to as Lollard. Map clusters-based visualization to group conflicting markers.",
    image: "lollards",
    status: [2],
    output: [3],
    tags: [1, 2, 13],
    links: [
      {
        type: 1,
        value: "https://dissinet.cz/maps/lollards/",
      },
      {
        type: 2,
        value: "https://github.com/DISSINET/dissinet.lollards-map",
      },
    ],
  },
  {
    time: "2019",
    label: "Map of Cathar Houses",
    text:
      "This interactive map shows settlements in Languedoc in which Cathar religious, known as heretici in the inquisitorial registers, are attested to have dwelt publicly in houses they owned or rented. The user is able to filter the content based on temporal information.",
    image: "cathar-houses",
    status: [2],
    output: [3],
    tags: [1, 2, 13],
    links: [
      {
        type: 1,
        value: "https://dissinet.cz/maps/cathar-houses-languedoc/",
      },
      {
        type: 2,
        value: "https://github.com/DISSINET/dissinet.cathar-houses-languedoc",
      },
    ],
  },
  {
    time: "2019",
    label: "DISSINET visualizations",
    text:
      "A list of visualizations made for DISSINET project. Consists of network visualizations, maps, chord diagrams, parallel coordinates...",
    image: "dissinet-vis",
    status: [2],
    output: [3],
    tags: [9, 11, 12],
    links: [
      {
        type: 2,
        value: "https://github.com/DISSINET/visualizations",
      },
    ],
  },
  {
    time: "2017",
    label: "GEHIR Map",
    text:
      "Map Application dedicated to the GEHIR project (gehir.phil.muni.cz) that brings the possibility of visual analysis in the research of history of ancient religions.",
    image: "gehir-map",
    status: [2],
    output: [1, 2, 3, 4],
    tags: [1, 2, 11, 13],
    links: [
      {
        type: 1,
        value: "http://gehir.phil.muni.cz/map/",
      },
      {
        type: 2,
        value: "https://github.com/adammertel/gehir.mapapp",
      },
      {
        type: 3,
        value: "",
      },
    ],
  },
  {
    time: "2017 — 2020",
    label: "Analysis of the spread of Egyptian cults in Eastern Mediteranean",
    text:
      "A study applying formalized methods (network analysis, spatial analysis, environmental modeling) to understand a complex historical phenomenon.",
    image: "egypt2",
    status: [2],
    output: [1, 3, 4],
    tags: [3, 4, 11, 12, 13, 14],
    links: [
      {
        type: 2,
        value: "https://github.com/adammertel/gehir.isis-network",
      },
      {
        type: 3,
        text: "study1",
        value:
          "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0193786",
      },
      {
        type: 3,
        text: "study2",
        value:
          "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0230733",
      },
    ],
  },

  {
    time: "2017 — 2018",
    label: "Simulations and ABM in Roman World",
    text:
      "Study explores the spread of Christianity as diffusive process constrained by physical travel in the Roman Empire - implementing the transportation network with city population estimates and network-theoretical approach to analyze the spreading process.",
    image: "roman-abm",
    status: [2],
    output: [1, 4],
    tags: [4, 12, 13, 14],
    links: [
      {
        type: 3,
        value:
          "https://journals.plos.org/plosone/article/file?type=printable&id=10.1371/journal.pone.0208744",
      },
    ],
  },
  {
    time: "2014 — 2017",
    label: "Archaeological database of Bohemian-Moravian Highlands",
    text:
      "A database to display, edit and store complex archaeological data from the area of Bohemian-Moravian Highlands. Based on these data and expertise, a research study was published which applied graph-based method to model within our research area, the process of human activities in spacetime.",
    image: "naki",
    status: [2],
    output: [1, 3, 4],
    tags: [2, 3, 5, 6, 11, 12, 15, 19],
    links: [
      {
        type: 1,
        value: "https://naki.phil.muni.cz/",
      },
      {
        type: 3,
        value:
          "https://www.degruyter.com/view/j/geo.2018.10.issue-1/geo-2018-0020/geo-2018-0020.xml?fbclid=IwAR2bDsjjhzlijqQU2VuTwDcSTzOMAa04aE1u0G-xal9QX4-k4dJLOHEUgPE&intcmp=trendmd&lang=de",
      },
    ],
  },
  {
    time: "",
    label: "Analytical dashboard for radio broadcasting data",
    text:
      "Web-based dashboard created for the Czech Radio to explore and analyse broadcasting data. Built with React, Vega and REST.",
    image: "cro",
    status: [2, 3],
    output: [2],
    tags: [1, 4, 6, 15, 16, 19],
    links: [],
  },
  {
    time: "2018",
    label: "Map framework for the project of Digitizing Patterns of Power",
    text:
      "An extensive Web-GIS environment to explore spatial and relational data from the project of DPP (Digitizing Patterns of Power) based on Austrian Academy of Science.",
    image: "dpp",
    status: [2],
    output: [1, 2, 3],
    tags: [1, 2, 6, 16],
    links: [
      {
        type: 1,
        value: "https://dpp.oeaw.ac.at/portal/",
      },
    ],
  },
  {
    time: "2018 — 2019",
    label: "Albina",
    text:
      "An Interreg project created to centralize information about avalanche conditions in Alps. Consists of actual bulletins, weather maps and models.",
    image: "albina",
    status: [2],
    output: [2],
    tags: [1, 2, 4, 17, 18],
    links: [
      {
        type: 1,
        value: "avalanche.report",
      },
    ],
  },
  {
    time: "2018 — 2019",
    label: "BesteLagen",
    text: "Map application to visualize, promote and navigate in wine areas.",
    image: "bestelagen",
    status: [2],
    output: [2],
    tags: [1, 2, 3, 8],
    links: [{ type: 1, value: "https://www.bestelagen.at/" }],
  },
  {
    time: "2014 — 2015",
    label: "Application for study of low-emission zones",
    text:
      "Application created with the cooperation with CDV (Center of Transport Research) to analyze possibilities and implications of applying low-emission zones.",
    image: "emissions",
    status: [2, 3],
    output: [1, 2, 3, 4],
    tags: [1, 10, 11, 12, 20],
    links: [],
  },
  {
    time: "2017",
    label: "Gods on the barge",
    text:
      "Game / interactive simulation inspired by the interdisciplinary GEHIR project (gehir.phil.muni.cz). Player plays as one selected godness and tries to spread his/her religion in the area.",
    image: "godsonthebarge",
    status: [2, 3],
    output: [1, 2],
    tags: [1, 10, 14, 21],
    links: [
      { type: 2, value: "https://github.com/adammertel/gods_on_the_barge" },
    ],
  },
  {
    time: "2019",
    label: "ArchaeoDB",
    text:
      "Web-based application to collect and analyze archaeological data. Works with real-time database (rethinkDB), node and socket.io.",
    image: "archaeodb",
    status: [2],
    output: [2],
    tags: [1, 3, 7, 15],
    links: [],
  },
  {
    time: "2020",
    label: "Dissinet Database",
    text:
      "Web-based environment to collect historical data and store and integrate them in a graph database (neo4J). Essential part of the DISSINET project (dissinet.cz) to analyze the content of historical textual sources.",
    image: "ddb",
    status: [1],
    output: [2],
    tags: [1, 22, 15, 13, 3],
    links: [],
  },
  {
    time: "2019",
    label: "Monasteries",
    text:
      "Side-project of DISSINET (dissinet.cz) to collect, integrate and analyze extensive spatiotemporal data about monasteries.",
    image: "monasteries",
    status: [1],
    output: [1],
    tags: [3, 7, 23, 15],
    links: [
      {
        type: 3,
        value:
          "https://pdfs.semanticscholar.org/2a97/e4e2b449fc1f4de70911ca575ac701e0024c.pdf",
      },
    ],
  },
  {
    time: "2018",
    label: "Leaflet.RegularGridCluster extension",
    text:
      "Leaflet plugin that implements grid-style visualization and clustering method.",
    image: "regulargridcluster",
    status: [2],
    output: [3],
    tags: [1, 2, 24],
    links: [
      {
        type: 2,
        value: "https://github.com/adammertel/Leaflet.RegularGridCluster",
      },
    ],
  },
  {
    time: "2018",
    label: "Leaflet.MarkerCluster.PlacementStrategies extension",
    text:
      "Subplugin that impelements new possibilities to place markers for Leaflet.MarkerCluster",
    image: "leafletplacement",
    status: [2],
    output: [3],
    tags: [1, 2, 24],
    links: [
      {
        type: 2,
        value:
          "https://github.com/adammertel/Leaflet.MarkerCluster.PlacementStrategies",
      },
      {
        type: 1,
        value:
          "https://adammertel.github.io/Leaflet.MarkerCluster.PlacementStrategies/demo/demo1.html",
      },
    ],
  },
  {
    time: "2019",
    label: "Leaflet.Control.Select extension",
    text:
      "A plugin for Leaflet library that adds a new menu-like control component.",
    image: "leafletselect",
    status: [2],
    output: [3],
    tags: [1, 2, 24],
    links: [
      {
        type: 1,
        value: "https://adammertel.github.io/Leaflet.Control.Select/",
      },
      {
        type: 2,
        value: "https://github.com/adammertel/Leaflet.Control.Select",
      },
    ],
  },
  {
    time: "2018",
    label: "Leaflet.MarkerCluster.List extension",
    text:
      "Subplugin for the Leaflet.MarkerCluster to display clustered child elements in the form of a list.",
    image: "selectlist",
    status: [2],
    output: [3],
    tags: [1, 2, 24],
    links: [
      {
        type: 2,
        value: "https://github.com/adammertel/Leaflet.MarkerCluster.List",
      },
    ],
  },
  {
    time: "2017",
    label: "My Suburb",
    text:
      "Hackaton experiment about integrating OSM data into a comprehensive map application displaying the ideal part of the city for based on preferences.",
    image: "suburb",
    status: [3],
    output: [2],
    tags: [1, 8, 11, 20],
    links: [],
  },
  {
    time: "2017",
    label: "Argo Explorer",
    text: "Exploratory tool for historical Spatiotemporal datasets.",
    image: "argo",
    status: [1, 3],
    output: [2, 3],
    tags: [1, 2, 10, 14, 15, 19, 24],
    links: [
      {
        type: 2,
        value: "https://github.com/adammertel/argo-explorer",
      },
    ],
  },
  {
    time: "2019",
    label: "Photo Reward",
    text:
      "A free-time project that should keep you motivated by flashing a nice picture once a time.",
    image: "",
    status: [3],
    output: [2],
    tags: [1, 16],
    links: [
      {
        type: 2,
        value: "https://github.com/adammertel/photo-reward",
      },
    ],
  },
  {
    time: "2018",
    label: "Last.fm analysis",
    text:
      "Analyses of music preferences based on genres, geographical location...",
    image: "lastfm",
    status: [3],
    output: [2],
    tags: [4, 24, 11, 12],
    links: [
      {
        type: 2,
        value: "https://github.com/adammertel/lastfm_analysis",
      },
    ],
  },
  {
    time: "2016",
    label: "GIS data generalization",
    text:
      "Python and PostGIS based project that generalize geographical data based on brute-force algorythms.",
    image: "generalizace",
    status: [3],
    output: [1],
    tags: [4, 23, 6, 11],
    links: [],
  },
  {
    time: "2016",
    label: "Police data analysis",
    text:
      "Analysis and visualization of the impact of gambling sites on the criminality in the city.",
    image: "police",
    status: [2],
    output: [1, 4],
    tags: [4, 11, 19, 20, 24],
    links: [
      {
        type: 3,
        value:
          "https://www.tandfonline.com/doi/full/10.1080/19475683.2016.1200670",
      },
    ],
  },
  {
    time: "2015",
    label: "Linking Graph With Map For The Purpose Of Historical Research",
    text:
      "Expert system that visualizes historical data throught a map, graph, charts and tables at the same time.",
    image: "hde",
    status: [3],
    output: [1, 2, 3],
    tags: [1, 9, 10, 15, 12, 13],
    links: [
      {
        type: 3,
        value:
          "https://www.academia.edu/26925717/Linking_Graph_with_Map_for_the_Purpose_of_Historical_Research._Analysis_of_Moravian_Dowries_1348-1420_Case_Study",
      },
    ],
  },
];
