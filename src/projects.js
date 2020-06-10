import HackHunt from "images/projects/hackhunt.webm"
import Mud from "images/projects/mud.webm"
import AnywhereFitness from "images/projects/anywhere fitness.webm"
import FoodTrackr from "images/projects/foodtrackr.webm"

export const projects = [
  {
    title: "HackHunt",
    stack: ["react", "node", "sql", "js"],
    links: {
      hosted: "https://hackathon-portal-client.now.sh/",
      backend: "https://github.com/Labs-EU4/hackathon-portal-server",
      frontend: "https://github.com/Labs-EU4/hackathon-portal-client",
    },
    desc:
      "Hackhunt is a webapp for organizing, finding and joining hackathons. ",
    video: HackHunt,
  },
  // <b>I worked on improving the test coverage, redesigning the ui and implemeting new endpoints on the backend</b>

  {
    title: "MUD",
    stack: ["react", "python", "js"],
    links: {
      hosted: "https://cseu4-victor-team2-mud.netlify.app/register",
      backend: "https://github.com/cseu4-victor-bw1/team2_backend",
      frontend: "https://github.com/cseu4-victor-bw1/team2_frontend",
    },
    desc:
      "A mud game with different room built with HTML Canvas API an django on the backend",
    video: Mud,
  },

  {
    title: "Anywhere Fitness",
    stack: ["react", "js", "html", "bootstrap"],
    links: {
      hosted: "https://anywherefitness.now.sh/",
      backend: "",
      frontend: "https://github.com/BW-Anywhere-Fitness-Nov-18-22/front-end",
    },
    desc: "A simple webapp for scheduling and managing fitness classes",
    video: AnywhereFitness,
  },

  {
    title: "FoodTrackr",
    stack: ["js", "html", "less"],
    links: {
      hosted: "https://sharp-allen-b3dded.netlify.app/",
      backend: "",
      frontend: "https://github.com/Build-Week-FoodTruck-TrackR/Marketing",
    },
    desc:
      "An app for mobile devices to keep track of food trucks in your area. I worked on the marketing page for this.",
    video: FoodTrackr,
  },
]
