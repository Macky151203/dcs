import Image from "next/image"
import { useState } from "react"
import img1 from "../public/favicon.ico"
import graph from "../images/graph.jpg"
import airbnb from "../images/airbnb.jpg"
import google from "../images/google.jpg"
import hubspot from "../images/hubspot.jpg"
import Group from "../images/Group.jpg"
import slack from "../images/slack.jpg"
import Group25 from "../images/Group25.jpg"
import Group19 from "../images/Group19.jpg"
import Group20 from "../images/Group20.jpg"
import Group21 from "../images/Group21.jpg"
import Group22 from "../images/Group22.jpg"
import Group23 from "../images/Group23.jpg"
import Group24 from "../images/Group24.jpg"
import Group26 from "../images/Group26.jpg"
import f1 from "../images/f1.jpg"
import f2 from "../images/f2.jpg"
import f3 from "../images/f3.jpg"
import gpw from "../images/gpw.jpg"
import iosw from "../images/iosw.jpg"
import iosb from "../images/iosb.jpg"
import gpb from "../images/gpb.jpg"
import ham from "../images/ham.png"
import {FaInstagramSquare} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'



export default function Home() {

  const [open, setopen] = useState(true)

  // function handle(e){
  //   let list= document.querySelector('ul')
  //   e.name==='menu'? (e.name="close",list.classList.add('top-[80px]'), list.classList.add('opacity-100')) :( e.name="menu", list.classList.remove('top-[80px]'),list.classList.remove('opacity-100') )
  // }

  return (
    <>


      {/* nav */}

      <nav className="bg-white shadow-md p-4 s md:flex flex-row justify-evenly items-center relative z-0">
        <div className="flex flex-row justify-between">
          <span className="text-xl">team.flow</span>
          <span className="md:hidden block cursor-pointer"><button onClick={() => setopen(!open)}  ><Image className="w-8" src={ham} /></button></span>
        </div>



        <ul className={`top-16 transition-all ease-in duration-300 ${open ? 'opacity-0 md:opacity-100' : ''}   md:py-0 py-4 pl-7 md:pl-0 w-full md:w-auto left-0 md:flex flex-row md:items-center  z-[-1] md:z-auto md:static absolute bg-slate-200 md:bg-transparent`}>
          <li className="mx-4 md:my-0 my-6 cursor-pointer hover:text-violet-600">How it works</li>
          <li className="mx-4 md:my-0 my-6 cursor-pointer hover:text-violet-600">Product</li>
          <li className="mx-4 md:my-0 my-6 cursor-pointer hover:text-violet-600">Pricing</li>
          <li className="mx-4 md:my-0 my-6 cursor-pointer hover:text-violet-600">Resources</li>
          <li className="mx-4 md:my-0 my-6 cursor-pointer md:ml-40 hover:text-violet-600">Log in</li>

          <button className=" md:flex bg-opacity-70 text-violet-600 bg-violet-300 p-2 md:ml-2 rounded-">Get Started from</button>
        </ul>
      </nav>



      {/* Hero */}

      <div className="flex flex-col items-center mt-10">
        <div className="flex flex-row rounded-2xl bg-green-300 bg-opacity-60 pr-2">
          <div className="hidden md:flex rounded-2xl bg-green-500 p-1 text-white items-center">
            Save 90%
          </div>
          <div className="ml-1 flex items-center">
            get account at 59$
          </div>
        </div>

        <div className="md:text-6xl text-3xl font-semibold p-3 md:w-3/5 text-center">
          Manage the team everyone wants to be on
        </div>

        <div className="md:w-2/5 text-center mt-2 text-gray-500">
          Simple platform that tells you master what great managers do best, as develop trust, collaborate amd drive team performance
        </div>

        <div className="flex md:flex-row flex-col items-center">
          <form className="flex md:flex-row flex-col items-center" type="submit">
          <input type="email" required placeholder="name@yourcomapny.com" className="w-64 p-2  mt-4 border-2" />
          <button className="bg-violet-500 p-2 md:mt-4 mt-1 cursor-pointer px-8 rounded-sm text-white">Try it free</button>
          </form>
        </div>


      </div>


      {/* graph */}

      <div className=" flex items-center justify-center mt-6 md:mt-10  drop-shadow-2xl mb-4">
        <Image className="md:w-3/4" src={graph} />
      </div>

      {/* mid */}

      <div className="mt-4 md:mt-20 flex flex-col">

        <div className="text-center text-xl">
          TRUSTED BY OVER <span className="font-semibold">10000+</span> WORLDS BEST TEAMS
        </div>

        <div className="flex flex-row items-center justify-evenly mt-4">
          <Image className="w-12 md:w-auto" src={airbnb} />
          <Image className="w-12 md:w-auto" src={google} />
          <Image className="w-12 md:w-auto" src={Group} />
          <Image className="w-12 md:w-auto" src={hubspot} />
          <Image className="hidden md:flex" src={slack} />
        </div>

      </div>



      <div className="flex md:flex-row flex-col mt-20 p-10 bg-slate-100 justify-center">
        <Image className="md:w-3/7 mr-10" src={Group25} />

        <div className="flex flex-col mt-2 md:mt-0 md:w-2/5">

          <div className="text-center md:text-left flex flex-col md:w-3/5  m-2 rounded-md p-4 bg-gray-200 border-b-4 md:border-b-0 md:border-l-4 border-violet-500">
            <div className="font-semibold">Survey your team</div>
            <div className="text-gray-500">Powerful questions that get to the heart of how team members really feel</div>
          </div>

          <div className="text-center md:text-left flex flex-col md:w-3/5 m-2 rounded-md p-4">
            <div className="font-semibold">Resolve issues quickly</div>
            <div className="text-gray-500">Anonymous messaging that connects managers and employees</div>
          </div>

          <div className="text-center md:text-left flex flex-col md:w-3/5 m-2 rounded-md p-4">
            <div className="font-semibold">Plan your 1-on-1s</div>
            <div className="text-gray-500">Plan meeting together and give a stake employees and teams</div>
          </div>

          <div className="text-center md:text-left flex flex-col md:w-3/5 m-2 rounded-md p-4">
            <div className="font-semibold">Track your progress</div>
            <div className="text-gray-500">Easy-to-read reports and sharable results hepl managers and teams</div>
          </div>


        </div>

      </div>




      {/* make work easier */}

      <div className="mt-14 flex flex-col">

        <div className="font-bold text-3xl md:text-5xl text-center">Make your work easier</div>
       
          <div className="flex flex-wrap justify-center items-center mt-8 md:ml-20 ml-4">
            <div className="flex flex-col md:w-1/3 w-full justify-center mt-4 md:mt-2  md:items-left">
              <div className="flex items-center justify-center md:justify-start">
              <Image className="" src={Group21} />
              </div>
              <div className="text-center md:text-left font-semibold text-xl mt-2">Team Survey & Reports</div>
              <div className="text-center md:text-left text-gray-500 md:w-1/2">Short anonymous surveys tracks your teams needs weekly so you can focus</div>
            </div>
            <div className="flex flex-col md:w-1/3 w-full justify-center mt-4 md:mt-2 md:items-left">
              <div className="flex items-center justify-center md:justify-start">
              <Image className="" src={Group19} />
              </div>
              <div className="text-center md:text-left font-semibold text-xl mt-2">Collaborative 1:1</div>
              <div className="text-center md:text-left text-gray-500 md:w-1/2">Build relationships by planning 1-on-1s and start meetings</div>
            </div>
            <div className="flex flex-col md:w-1/3 w-full justify-center mt-4 md:mt-2 md:items-left">
              <div className="flex items-center justify-center md:justify-start">
              <Image className="" src={Group20} />
              </div>
              <div className="text-center md:text-left font-semibold text-xl mt-2">Learning center</div>
              <div className="text-center md:text-left text-gray-500 md:w-1/2">Quickly get solutions tailored to your personel challenges from the manager</div>
            </div>
            <div className="flex flex-col md:w-1/3 w-full justify-center mt-4 md:mt-2 md:items-left">
              <div className="flex items-center justify-center md:justify-start">
              <Image className="" src={Group22} />
              </div>
              <div className="text-center md:text-left font-semibold text-xl mt-2">Anonymous Messages</div>
              <div className="text-center md:text-left text-gray-500 md:w-1/2">Develop trust in a safe channel for important converstations</div>
            </div>
            <div className="flex flex-col md:w-1/3 w-full justify-center mt-4 md:mt-2 md:items-left">
              <div className="flex items-center justify-center md:justify-start">
              <Image className="" src={Group23} />
              </div>
              <div className="text-center md:text-left font-semibold text-xl mt-2">Conversation Engine</div>
              <div className="text-center md:text-left text-gray-500 md:w-1/2">Communicate strongly with recommended talking points </div>
            </div>
            <div className="flex flex-col md:w-1/3 w-full justify-center mt-4 md:mt-2 md:items-left">
              <div className="flex items-center justify-center md:justify-start">
              <Image className="" src={Group24} />
              </div>
              <div className="text-center md:text-left font-semibold text-xl mt-2">Exclusives Manager</div>
              <div className="text-center md:text-left text-gray-500 md:w-1/2">Access manager tips, activities and best practices from our team of experts</div>
            </div>
          </div>
        


      </div>


      {/* next part */}
      <div className="mt-10  bg-slate-100 flex flex-col-reverse md:flex-row justify-center p-4">
          <div className="md:w-2/5 flex flex-col md:items-start items-center justify-center">
            <div className="text-center md:text-left md:w-2/3 text-2xl md:text-4xl font-bold mt-4 md:mt-1">We work how you work everyday</div>
            <div className=" text-gray-500 text-center md:text-left md:w-2/3 mt-4">Since the easiest things to use actually get used, we adapts to the way your team works - not the other way around</div>
            <div className="mt-6 flex md:justify-start justify-center"><button className="bg-violet-500 p-2 md:mt-4 mt-1 cursor-pointer px-8 rounded-sm text-white">Get started here</button></div>
          </div>
          <div className="md:w-2/5"><Image src={Group26} /></div>
      </div>



      {/* cust part */}
      <div className="mt-20 flex flex-col items-center justify-center">
          <div className="md:w-1/4 w-1/2 text-2xl md:text-4xl font-bold text-center">Why customers love working with us</div>
          <div className="md:w-1/4 text-center mt-8 text-gray-600">"Its amazing what has helped me learn. I dont worry about blindspots and 1-on-1s have never been more productive. The team loves it"</div>
          <div className="flex flex-row mt-8">
            <div className="md:w-64 flex flex-col items-center md:flex-row p-4 rounded-md md:border-t-4 border-t-0 border-gray-900  ">
              <div><Image src={f1} /></div>
              <div className="flex flex-col ml-2 items-center md:items-start">
                  <div className="font-semibold">Jorge Robertson</div>
                  <div className="text-gray-600">CS at Google</div>
              </div>

            </div>
            <div className="md:w-64 hidden md:flex flex-row p-4">
              <div><Image src={f2} /></div>
              <div className="flex flex-col ml-2">
                  <div className="font-semibold">Fransisco Bell</div>
                  <div className="text-gray-600">Designer at Microsoft</div>
              </div>

            </div>
            <div className="md:w-64 hidden md:flex flex-row p-4">
              <div><Image src={f3} /></div>
              <div className="flex flex-col ml-2">
                <div className="font-semibold">Beth Fox</div>
                <div className="text-gray-600">Developer at Airbnb</div>
              </div>

            </div>
          </div>
      </div>



      {/* 2nd last */}

      <div className="flex justify-center items-center mt-20 m-2">
        <div className="flex flex-col md:flex-row md:w-2/3 rounded-2xl bg-violet-500 justify-evenly items-center p-10">
          <div className="md:w-2/5 text-white text-2xl font-bold">84% of the employees who use directly trust their manager</div>
          <div className="flex flex-row">
            <div className="ml-2 mt-4 "><Image className="rounded-xl" src={gpw} /></div>
            <div className="ml-2 mt-4"><Image className="rounded-xl" src={iosw} /></div>
            
          </div>
        </div>
      </div>



      {/* footer */}
      <div className="mt-10 pb-16 flex flex-col md:flex-row justify-evenly items-start md:items-start bg-gray-800 pt-8 pl-4 space-y-4">
        <div className="flex flex-col space-y-2 text-white ">
            <div className=" cursor-pointer">Company</div>
            <div className="hidden md:flex cursor-pointer">About us</div>
            <div className="hidden md:flex cursor-pointer">Blog</div>
            <div className="hidden md:flex cursor-pointer">Carrers</div>
            <div className="hidden md:flex cursor-pointer">Contact Us</div>
        </div>
        <div className="flex flex-col space-y-2 text-white ">
          <div className=" cursor-pointer">Support</div>
          <div className="hidden md:flex cursor-pointer">Help center</div>
          <div className="hidden md:flex cursor-pointer">Safety center</div>
          <div className="hidden md:flex cursor-pointer">Community</div>

        </div>
        <div className="flex flex-col space-y-2 text-white ">
          <div className=" cursor-pointer">legal</div>
          <div className="hidden md:flex cursor-pointer">Cookies policy</div>
          <div className="hidden md:flex cursor-pointer">Privacy policy</div>
          <div className="hidden md:flex cursor-pointer">Terms of service</div>

        </div>
        <div className="flex flex-col space-y-2 text-white">
            <div className="hidden md:flex cursor-pointer">Install</div>
            <div><Image className="rounded-2xl w-24 cursor-pointer" src={gpb} /></div>
            <div><Image className="rounded-2xl w-24 cursor-pointer" src={iosb} /></div>
        </div>
        
      </div>

      <div className="h-1 bg-gray-700"></div>
      <div className="flex flex-row justify-between bg-gray-800 text-white p-8 md:pl-40 md:pr-40">
        <div>@2023- All Rights Reserved</div>
        <div className="md:flex hidden flex-row space-x-4">
          <div>< FaInstagramSquare style={{fontSize:"25px"}} /></div>
          <div><FaYoutube style={{fontSize:"25px"}} /></div>
          <div><FaTwitter s tyle={{fontSize:"25px"}} /></div>
          
        </div>
      </div>









    </>
  )
}