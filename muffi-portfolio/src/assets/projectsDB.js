import Timecamp from "../assets/Timecamp.mp4"
import Nature from "../assets/Nature.mp4"
import Coschedule from "../assets/Coschedule.mp4"
import Lovoda from "../assets/Lovoda.mp4"
export const ProjectDB = [
    {
        id: 1,
        images:[],
        title: "TimeCamp's Clone",
        App: "FULL STACK APP",
        techStack: ["react js", "Node js", "mongoDB", "express js", 'chakra UI'],
        executedIn: "5",
        type:"Collaborative",
        about: ["An Time and task management website where user can track the time they spent on particular project or on a task, useful for industrial level where one can keep track of their employee's login time.", `
        Areas of Responsibilities: 1) Entire Backend using express JS and MongoDB. 2) Homepage UI`
        ],
        live: "https://timecamp-clone-nem111.netlify.app/",
        GitHub: "https://github.com/Mufadal03/Timecamp-Clone.git",
        source:Timecamp
    },
    {
        id: 2,
        images:[],
        title: "Coschedule Clone",
        App: "FRONTEND",
        techStack: ["react js", "redux",'chakra UI'],
        executedIn: "5",
        type:"Collaborative",
        about: [" An Calendary and task management website","Used Redux to main states in app and to store data",
        `Areas of Responsibilites : 1) Marketing Calendar Page, 2) Marketing Suite Page, 3) Calendar Home Page.`
        ],
        live: "https://coscheduleclonebymuffi.netlify.app/",
        GitHub: "https://github.com/sangle2022/ripe-receipt-7221.git",
        source :Coschedule
        
    },
    {
        id: 3,
        images:[],
        title: "Lovoda's Clone",
        App: "FRONTEND",
        techStack: ["react js","react-router", 'chakra UI'],
        executedIn: "5",
        type:"Individual",
        about: ["An E Commerce website where user can buy women accessiories","Used React-router for all the routes."],
        live: "https://lovoda-by-mufadal.netlify.app/",
        GitHub: "https://github.com/Mufadal03/Lovoda-Clone",
        source:Lovoda
    },
    {
        id: 4,
        images:[],
        title: "Nature's Basket Clone",
        App: "FRONTEND",
        type:"Collaborative",
        techStack: ["HTML","CSS",'JAVASCRIPT'],
        executedIn: "5",
        about: [" An Indian grocery and gourmet food delivery website."," Used JSON server for database.",`Areas of Responsibilites : 1) Offer Page 2) Checkout Page, 3) Cart Page. 4) Payment Page`],
        live: "https://nature-sbasket.netlify.app/",
        GitHub: "https://github.com/Mufadal03/Nature-sBasket",
        source:Nature
        
    }
]