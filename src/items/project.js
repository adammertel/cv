import {
  FaBook,
  FaMapMarkedAlt,
  FaCode,
  FaFileAlt,
  FaUsers,
  FaYoutube,
  FaChalkboardTeacher,
} from "react-icons/fa";
import React from "react";

export var links = [
  { id: 1, label: "application", icon: <FaMapMarkedAlt /> },
  { id: 2, label: "code", icon: <FaCode /> },
  { id: 3, label: "study", icon: <FaBook /> },
  { id: 4, label: "manual", icon: <FaFileAlt /> },
  { id: 5, label: "project", icon: <FaUsers /> },
  { id: 6, label: "video", icon: <FaYoutube /> },
  { id: 7, label: "demo", icon: <FaChalkboardTeacher /> },
];

export var statuses = [
  { id: 1, label: "in-progress", color: "#f7fcb9" },
  { id: 2, label: "done", color: "#41ab5d" },
  { id: 3, label: "experimental", color: "#004529" },
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
  { id: 2, label: "web cartography | Leaflet.js" },
  { id: 3, label: "nodeJS" },
  { id: 4, label: "Python | (geo)pandas | scikit-learn" },
  { id: 6, label: "PostgreSQL | PostGIS" },
  { id: 7, label: "RethinkDB" },
  { id: 8, label: "MySQL | MariaDB" },
  { id: 22, label: "graphs DB | neo4J" },
  { id: 9, label: "D3 | SVG | HTML5 Canvas | Vega | ThreeJs" },

  { id: 11, label: "geospatial analysis" },
  { id: 12, label: "network analysis" },
  { id: 18, label: "environmental research" },
  { id: 20, label: "transportation research" },
  { id: 13, label: "digital humanities" },
  { id: 17, label: "climate data" },

  { id: 21, label: "game" },
  { id: 25, label: "3D" },
];

tags.forEach((tag) => (tag["color"] = tagColor));

export var itemsProject = [
  {
    time: "2022",
    label: "UniQ Dashboard",
    text: "A dashboard made for exploring data collected in the project UniQ (Prague struggle over universals ca. 1348–1500)",
    image: "uniq",
    status: [],
    output: [],
    tags: [1, 2, 9],
    links: [
      {
        type: 1,
        value: "https://uniq.flu.cas.cz/map",
      },
    ],
  },
  {
    time: "2022",
    label: "River network construction",
    text: "Scraping, integrating, and processing geospatial data for ecological modeling of fish species dissemination",
    image: "rivernetwork2",
    status: [],
    output: [],
    tags: [4, 11, 18],
    links: [
      {
        type: 3,
        value:
          "https://www.biorxiv.org/content/biorxiv/early/2022/03/06/2022.03.04.481515.full.pdf",
      },
      {
        type: 3,
        value:
          "https://www.biorxiv.org/content/biorxiv/early/2023/01/09/2023.01.09.523236.full.pdf",
      },
    ],
  },
  {
    time: "2021",
    label: "Wastewater Dashboard",
    text: "Real-time visual dashboard for the study of the relationship between indicators from the wastewater plants and the local incidence in the regions of Saxony",
    image: "wastewater",
    status: [],
    output: [],
    tags: [1, 2, 6, 11],
    links: [
      {
        type: 1,
        value: "https://www.where2test.de/wastewater",
      },
      {
        type: 3,
        value:
          "https://www.abstr-int-cartogr-assoc.net/5/131/2022/ica-abs-5-131-2022.pdf",
      },
    ],
  },
  {
    time: "2021",
    label: "Analysis of historical itinerary",
    text: "Study of the power distribution and administration of the medieval kingdom through geospatial analysis of the royal charters of the medieval king",
    image: "po2",
    status: [],
    output: [],
    tags: [4, 11, 12, 13],
    links: [
      {
        type: 3,
        value: "https://osf.io/preprints/socarxiv/anq4y/",
      },
    ],
  },
  {
    time: "2022",
    label: "Flow extraction",
    text: "An experimental framework for using Earth Mover's Distance to extract flows from geospatial data",
    image: "flow",
    status: [],
    output: [],
    tags: [4, 11, 2],
    links: [
      {
        type: 1,
        value: "https://flow-extraction-server.herokuapp.com/",
      },
    ],
  },
  {
    time: "2021—2022",
    label: "Municipality COVID-19 regression model",
    text: "A geospatial analysis study using regression models to quantify spatial variation in the inhibitory effect of an international border on the COVID-19 spread",
    image: "border",
    status: [],
    output: [],
    tags: [4, 11],
    links: [
      {
        type: 3,
        value:
          "https://www.sciencedirect.com/science/article/pii/S1877584522000831",
      },
    ],
  },
  {
    time: "2021—2022",
    label: "Where2Test website",
    text: "A website consisting of applications and dashboards for predictive geospatial models, and various optimization algorithms helping users understand and manage SARS-CoV-2 pandemic",
    image: "w2t",
    status: [],
    output: [],
    tags: [1, 2, 4, 6, 9, 11],
    links: [
      {
        type: 1,
        value: "https://www.where2test.de",
      },
    ],
  },
  {
    time: "2020",
    label: "Population density 3D, Slovakia",
    text: "An interactive 3D map that visualizes the population density in Slovakia, created with react-three-fiber, data are taken from Wikipedia and worldpop dataset",
    image: "3d-slovakia",
    status: [],
    output: [2, 3],
    tags: [1, 9, 25],
    links: [
      {
        type: 1,
        value: "https://adammertel.github.io/3d-map-slovakia-population/",
      },
      {
        type: 2,
        value: "https://github.com/adammertel/3d-map-slovakia-population",
      },
    ],
  },
  {
    time: "2020",
    label: "Premonstratensian monasteries in France",
    text: "This interactive map visualizes a dataset of Premonstratensian houses in France from the foundation of the order up to the present",
    image: "premonstratensians",
    status: [],
    output: [3],
    tags: [1, 2, 11],
    links: [
      {
        type: 2,
        value: "https://github.com/adammertel/premonstratensians-france",
      },
      {
        type: 1,
        value: "https://dissinet.cz/maps/premonstratensiansfrance/",
      },
      {
        type: 5,
        value: "https://dissinet.cz",
      },
    ],
  },
  {
    time: "2018",
    label: "Baptisteries",
    text: "The interactive map visualizes a database of Christian baptisteries built between the 3rd and 12th centuries; the database is a digital adaptation and formalization of the most complete (as of 2017) catalog of baptisteries by Sebastian Ristow (Frühchristliche Baptisterien, Münster: Aschendorffsche Verlagsbuchhandlung, 1998)",
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
    time: "2018—2019",
    label: "Historical Geocoding Assistant",
    text: "Open-source browser-based application for assigning geographic coordinates more conveniently and faster than copy-pasting them from services such as Google Maps; the application was designed with historical projects in mind but is suitable for any geocoding work",
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
    text: "This map shows the places of origin of English dissidents under investigation for taking part in the revolts of 1414 or 1431, related to Lollardy, or holding various heterodox opinions that are commonly referred to as Lollard; the map uses the clusters-based visualization method to group conflicting markers.",
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
      {
        type: 5,
        value: "https://dissinet.cz",
      },
    ],
  },
  {
    time: "2018",
    label: "Map of Cathar Houses",
    text: "This interactive map shows settlements in Languedoc in which Cathar religious, known as heretici in the inquisitorial registers, are attested to have dwelt publicly in houses they owned or rented. The user is able to filter the content based on temporal information to see the spatiotemporal pattern of the phenomenon",
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
      {
        type: 5,
        value: "https://dissinet.cz",
      },
    ],
  },
  {
    time: "2019",
    label: "DISSINET visualizations",
    text: "A list of visualizations made for the DISSINET project to support and describe some of the base concepts of this project. Consists of network visualizations, maps, chord diagrams, parallel coordinates",
    image: "dissinet-vis",
    status: [2],
    output: [3],
    tags: [9, 11, 12],
    links: [
      {
        type: 2,
        value: "https://github.com/DISSINET/visualizations",
      },
      {
        type: 5,
        value: "https://dissinet.cz",
      },
    ],
  },
  {
    time: "2017",
    label: "GEHIR Map",
    text: "Map Application dedicated to the GEHIR project (gehir.phil.muni.cz) that brings the possibility of visual analysis in the research of history of ancient religions",
    image: "gehir-map",
    status: [2],
    output: [1, 2, 3, 4],
    tags: [1, 2, 11, 13],
    links: [
      // {
      //   type: 1,
      //   value: "http://gehir.phil.muni.cz/map/",
      // },
      {
        type: 2,
        value: "https://github.com/adammertel/gehir.mapapp",
      },
      {
        type: 3,
        value:
          "https://www.researchgate.net/publication/341644522_The_role_of_spatial_visual_analysis_in_historical_religious_studies",
      },
    ],
  },
  {
    time: "2017—2020",
    label: "Analysis of the spread of Egyptian cults in Eastern Mediteranean",
    text: "Application of formalized methods (network analysis, spatial analysis, environmental modeling) to understand a complex historical phenomenon of the ancient Egyptian cults; two studies summarizing the findings were published in PLOS ONE journal",
    image: "egypt2",
    status: [2],
    output: [1, 3, 4],
    tags: [3, 4, 11, 12, 13],
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
    time: "2017—2018",
    label: "Simulations and ABM in Roman World",
    text: "The study explores the spread of Christianity as a diffusive process constrained by physical travel in the Roman Empire - implementing the transportation network with city population estimates and a network-theoretical approach to analyze the spreading process.",
    image: "roman-abm",
    status: [2],
    output: [1, 4],
    tags: [4, 12, 13],
    links: [
      {
        type: 3,
        value:
          "https://journals.plos.org/plosone/article/file?type=printable&id=10.1371/journal.pone.0208744",
      },
    ],
  },
  {
    time: "2014—2017",
    label: "Archaeological database of Bohemian-Moravian Highlands",
    text: "NAKI is a framework containing a database and a web frontend environment to store, edit, and visualize complex archaeological data from the area of Bohemian-Moravian Highlands",
    image: "naki",
    status: [2],
    output: [1, 3, 4],
    tags: [2, 3, 6, 11, 12],
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
  // {
  //   time: "2018—2019",
  //   label: "Analytical dashboard for radio broadcasting data",
  //   text:
  //     "Web-based dashboard created for the Czech Radio to explore and analyse broadcasting data. Built with React, Vega and REST in a close cooperation with the analytical team.",
  //   image: "cro",
  //   status: [2, 3],
  //   output: [2],
  //   tags: [1, 4, 6,  16],
  //   links: [],
  // },
  {
    time: "2018",
    label: "Map framework for the project of Digitizing Patterns of Power",
    text: "An extensive Web-GIS environment that allows exploration of spatial and relational data from the project of DPP (Digitizing Patterns of Power). Supervised by the Austrian Academy of Science",
    image: "dpp",
    status: [2],
    output: [1, 2, 3],
    tags: [1, 2, 6],
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
    text: "Albina is an Interreg project (at UNIVIE) centralizing information about avalanche conditions in the Alps; it consists of actual bulletins, weather maps, and models",
    image: "albina",
    status: [2],
    output: [2],
    tags: [1, 2, 4, 17, 18],
    links: [
      {
        type: 1,
        value: "https://www.avalanche.report",
      },
    ],
  },
  {
    time: "2018 — 2019",
    label: "BesteLagen",
    text: "Map application created in Leaflet.js, MariaDB, and React to promote the wine areas in Austria",
    image: "bestelagen",
    status: [2],
    output: [2],
    tags: [1, 2, 3, 8],
    links: [{ type: 1, value: "https://www.bestelagen.at/" }],
  },
  {
    time: "2014 — 2015",
    label: "Application for study of low-emission zones",
    text: "A map application was created in cooperation with CDV (Center of Transport Research) to analyze the implications of low-emission zones",
    image: "emissions",
    status: [2, 3],
    output: [1, 2, 3, 4],
    tags: [1, 9, 11, 12, 20],
    links: [
      {
        type: 6,
        value: "https://www.youtube.com/watch?v=oisVDBFv978",
      },
    ],
  },
  {
    time: "2017",
    label: "Gods on the barge",
    text: "Game / interactive simulation inspired by the interdisciplinary project of GEHIR (gehir.phil.muni.cz) where users play as one selected deity and try to spread their religion by using merchant ships, placing armies, building infrastructure and using special powers",
    image: "godsonthebarge",
    status: [2, 3],
    output: [1, 2],
    tags: [1, 9, 21],
    links: [
      { type: 1, value: "https://dissinet.cz/apps/godsonthebarge/" },
      { type: 2, value: "https://github.com/adammertel/gods_on_the_barge" },
    ],
  },
  {
    time: "2020",
    label: "Analysis of vegetation diversity",
    text: "A project of the Czech Academy of Sciences analyzing and visualizing spatiotemporal patterns of vegetation diversity in the region of Moravia",
    image: "ibot",
    status: [1],
    output: [1, 3, 4],
    tags: [4, 18],
    links: [
      { type: 1, value: "https://geoportal.uhul.cz/mapy/mapyBuHist.html" },
    ],
  },
  {
    time: "2019",
    label: "ArchaeoDB",
    text: "A web-based application to edit, visualize, analyze and export archaeological data collected by the Czech Academy of Science. Built on real-time rethinkDB, node and socket.io, React and Leaflet.js",
    image: "archaeodb",
    status: [2],
    output: [2],
    tags: [1, 3, 7],
    links: [],
  },
  {
    time: "2020-2022",
    label: "inkVisitor",
    text: "Robust web-based environment to collect historical data and store and integrate them into a graph database (neo4J). Essential part of the DISSINET project (dissinet.cz) to analyze the content of historical textual sources.",
    image: "ddb",
    status: [1],
    output: [2],
    tags: [1, 22, 13, 3],
    links: [],
    links: [
      {
        type: 2,
        value: "https://github.com/DISSINET/InkVisitor",
      },
      {
        type: 1,
        value: "https://dissinet.cz/apps/inkvisitor/",
      },
      {
        type: 5,
        value: "https://dissinet.cz",
      },
    ],
  },
  {
    time: "2019",
    label: "Monasteries project",
    text: "This project integrates and analyzes spatiotemporal data about medieval monasteries from various sources, e.g., Wikipedia, local projects, books, and maps...",
    image: "monasteries",
    status: [1],
    output: [1],
    tags: [3, 7],
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
    label: "RegularGridCluster extension for Leaflet.js",
    text: "Leaflet plugin that implements grid-style visualization and clustering method. Suitable for making analytical maps comparing two datasets.",
    image: "regulargridcluster",
    status: [2],
    output: [3],
    tags: [1, 2],
    links: [
      {
        type: 2,
        value: "https://github.com/adammertel/Leaflet.RegularGridCluster",
      },
      {
        type: 7,
        value:
          "https://adammertel.github.io/Leaflet.RegularGridCluster/demo/random_data/",
      },
    ],
  },
  {
    time: "2018",
    label: "MarkerCluster PlacementStrategies extension for Leaflet.js",
    text: "Leaflet.MarkerCluster subplugin implementing new possibilities to cluster markers",
    image: "leafletplacement",
    status: [2],
    output: [3],
    tags: [1, 2],
    links: [
      {
        type: 2,
        value:
          "https://github.com/adammertel/Leaflet.MarkerCluster.PlacementStrategies",
      },
      {
        type: 7,
        value:
          "https://adammertel.github.io/Leaflet.MarkerCluster.PlacementStrategies/demo/random-data.html",
      },
    ],
  },
  {
    time: "2019",
    label: "Control.Select extension for Leaflet.js",
    text: "A plugin for Leaflet.js library adding a new menu-like control component",
    image: "leafletselect",
    status: [2],
    output: [3],
    tags: [1, 2],
    links: [
      {
        type: 1,
        value: "https://adammertel.github.io/Leaflet.Control.Select/",
      },
      {
        type: 7,
        value: "https://github.com/adammertel/Leaflet.Control.Select",
      },
    ],
  },
  {
    time: "2018",
    label: "Leaflet.MarkerCluster.List extension",
    text: "Subplugin for the Leaflet.MarkerCluster to display clustered child elements in the form of a list. Suitable mainly for maps in the mobile environment",
    image: "selectlist",
    status: [2],
    output: [3],
    tags: [1, 2],
    links: [
      {
        type: 2,
        value: "https://github.com/adammertel/Leaflet.MarkerCluster.List",
      },
      {
        type: 7,
        value:
          "https://adammertel.github.io/Leaflet.MarkerCluster.List/demo/demo1.html",
      },
    ],
  },
  {
    time: "2017",
    label: "My Suburb",
    text: "Hackaton-motivated experimental map application integrating OSM data to find the ideal part of the city based on users' preferences",
    image: "suburb",
    status: [3],
    output: [2],
    tags: [1, 8, 11, 20],
    links: [
      {
        type: 1,
        value: "https://votebox.bitbucket.io/ms/",
      },
    ],
  },
  // {
  //   time: "2017",
  //   label: "Argo Explorer",
  //   text:
  //     "Exploratory tool for historical Spatiotemporal datasets. Visualizes spatial and temporal distributions, allows creating interactive charts, displays different uncertainties...",
  //   image: "argo",
  //   status: [1, 3],
  //   output: [2, 3],
  //   tags: [1, 2, 9, 14, 15, 19, 24],
  //   links: [
  //     {
  //       type: 2,
  //       value: "https://github.com/adammertel/argo-explorer",
  //     },
  //   ],
  // },
  // {
  //   time: "2018",
  //   label: "Last.fm analysis",
  //   text: "A research started with the cooperation of the department of Musicology to explore data mined from Last.fm API presenting music preferences in the world. A set of spatial and network-based analysis were created to study the distribution of musical genres, geographical location, clustering, spread of music...",
  //   image: "lastfm",
  //   status: [3],
  //   output: [2],
  //   tags: [4, 24, 11, 12],
  //   links: [
  //     {
  //       type: 2,
  //       value: "https://github.com/adammertel/lastfm_analysis",
  //     },
  //   ],
  // },
  {
    time: "2016",
    label: "GIS data generalization",
    text: "A research project applying custom PL/pgSQL script for the  generalization of big geospatial data",
    image: "generalizace",
    status: [3],
    output: [1],
    tags: [4, 6, 11],
    links: [],
  },
  {
    time: "2016",
    label: "Police data analysis",
    text: "A study analyzed and visualized the impact of gambling sites on criminality in the city of Pardubice",
    image: "police",
    status: [2],
    output: [1, 4],
    tags: [4, 11, 20],
    links: [
      {
        type: 3,
        value:
          "https://www.tandfonline.com/doi/full/10.1080/19475683.2016.1200670",
      },
    ],
  },
  // {
  //   time: "2015",
  //   label: "Linking Graph With Map For The Purpose Of Historical Research",
  //   text: "An expert system that was built to examine the idea of the impact of using more forms of data display (map, graph, charts, tables) in the process of exploration of historical datasets.",
  //   image: "hde",
  //   status: [3],
  //   output: [1, 2, 3],
  //   tags: [1, 9, 12, 13],
  //   links: [
  //     {
  //       type: 3,
  //       value:
  //         "https://www.academia.edu/26925717/Linking_Graph_with_Map_for_the_Purpose_of_Historical_Research._Analysis_of_Moravian_Dowries_1348-1420_Case_Study",
  //     },
  //   ],
  // },
];
