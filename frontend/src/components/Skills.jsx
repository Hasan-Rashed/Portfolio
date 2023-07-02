import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Flash from 'react-reveal/Flash';
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';
import RubberBand from 'react-reveal/RubberBand';

import html from '../assets/icons/html.svg';
import css from '../assets/icons/css.svg';
import mui from '../assets/icons/mui.svg';
import bootstrap from '../assets/icons/bootstrap.svg';
import tailwind from '../assets/icons/tailwind.svg';
import react from '../assets/icons/react.svg';
import redux from '../assets/icons/redux.svg';
import express from '../assets/icons/express.svg';
import js from '../assets/icons/js.svg';
import node from '../assets/icons/node.svg';
import mongodb from '../assets/icons/mongodb.svg';
import mysql from '../assets/icons/mysql.svg';


import git from '../assets/tools icons/git.svg';
import github from '../assets/tools icons/github.svg';
import chrome from '../assets/tools icons/chrome.svg';
import firebase from '../assets/tools icons/firebase.svg'
import linux from '../assets/tools icons/linux.svg';
import netlify from '../assets/tools icons/netlify.svg';
import npm from '../assets/tools icons/npm.svg';
import postman from '../assets/tools icons/postman.svg';
import ps from '../assets/tools icons/ps.svg';
import railway from '../assets/tools icons/railway.svg';
import terminal from '../assets/tools icons/terminal.svg';
import vercel from '../assets/tools icons/vercel.svg'
import vscode from '../assets/tools icons/vscode.svg';
import windows from '../assets/tools icons/windows.svg';


const Skills = () => {

    const progressBar = [
        { name: 'JavaScript', value: 75, color: '#EFD81D' },
        { name: 'NodeJS', value: 60, color: '#6EB04F' },
        { name: 'ReactJS', value: 75, color: '#5CCFEE' },
        { name: 'ExpressJS', value: 60, color: '#2C2C2C' },
        { name: 'ReduxJS', value: 55, color: '#7046B2' },
        { name: 'Mongodb', value: 50, color: '#008D42' },
        { name: 'MYSQL', value: 50, color: '#D88700' },
        { name: 'Jira PM', value: 60, color: '#247DF2'}
    ];

    const technologies = [
        { name: 'HTML', icon: html },
        { name: 'CSS', icon: css },
        { name: 'Material UI', icon: mui },
        { name: 'Bootstrap5', icon: bootstrap },
        { name: 'TailwindCSS', icon: tailwind },
        { name: 'ReactJS', icon: react },
        { name: 'Redux', icon: redux },
        { name: 'ExpressJS', icon: express },
        { name: 'JavaScript', icon: js },
        { name: 'NodeJS', icon: node },
        { name: 'MongoDB', icon: mongodb },
        { name: 'MySQL', icon: mysql },
    ];


    const tools = [
        { name: 'Git', icon: git },
        { name: 'Github', icon: github },
        { name: 'Chrome', icon: chrome },
        { name: 'Firebase', icon: firebase },
        { name: 'Linux', icon: linux },
        { name: 'Netlify', icon: netlify },
        { name: 'NPM', icon: npm },
        { name: 'Postman', icon: postman },
        { name: 'Photoshop', icon: ps },
        { name: 'Railway', icon: railway },
        { name: 'Terminal', icon: terminal },
        { name: 'Vercel', icon: vercel },
        { name: 'VS Code', icon: vscode },
        { name: 'Windows', icon: windows },

    ]
    
    
  return (
    <div className="select-none">
        <div className="container mx-auto text-gray-600 items-center justify-center py-10 px-5">
            <div className='pt-2 pb-5 md:pb-10'>
                <Slide bottom>
                    <h3 className="text-lg font-semibold text-center">Skills</h3>
                    <p className="leading-3 text-sm text-center pb-1">Skills are achievement</p>

                    <div className='py-3'>
                        <p className="py-2">I use JavaScript fairly often, usually with ReactJS, Redux, NodeJS, ExpressJS and also run NodeJS based workflow via ViteJS for web projects.</p>
                        <p className="py-2">My main server side language is javascript, it often paired with MySQL and MongoDB. Most of project I love write code from scratch. Check out my GitHub page for random projects.</p>
                    </div>
                </Slide>
            </div>


            {/* core skills */}
            <div className='py-5 md:py-10'>
                <h3 className="text-md font-semibold text-center">Core Skills</h3> <div className="bg-black h-0.5 w-80 mx-auto"></div>

                    {/* progress bars */}
                    <div className='py-5 md:py-10 items-center mx-auto justify-center text-center'>
                            {
                                progressBar.map((progress, index) => (
                                    <Flip bottom key={index}>
                                        <div className='w-24 py-3 md:py-0 inline-block px-3'>
                                            <CircularProgressbar value={progress.value} text={0} strokeWidth= {12}
                                            styles={buildStyles({
                                            textColor: "red",
                                            pathColor: progress.color,
                                            trailColor: "#d6d6d6"
                                            })}
                                            />
                                            {progress.name}
                                        </div>
                                    </Flip>
                                ))
                            }
                    </div>
            </div>


            {/* technology uses */}
            <div className='mx-auto items-center text-center py-5'>
                <h3 className="text-md font-semibold text-center">Technology that I use</h3> <div className="bg-black h-0.5 w-80 mx-auto"></div>

            {/* technologies uses */}
                <div className='py-5 md:py-10'>
                    {
                        technologies.map((tech, index) => (
                            <Flash key={index}>
                                <div className='inline-block px-3 py-3 md:py-2'>
                                    <img src={tech.icon} alt={tech.name} className="w-5 inline-block" />
                                    <span className='px-1'>{tech.name}</span>
                                </div>
                            </Flash>
                        ))
                    }
                </div>
            </div>
            

            {/* technology uses */}
            <div className='mx-auto items-center text-center py-5'>
                <h3 className="text-md font-semibold text-center">Tools</h3> <div className="bg-black h-0.5 w-80 mx-auto"></div>

            {/* technologies uses */}
                <div className='py-5 md:py-10'>
                    {
                        tools.map((tool, index) => (
                            <RubberBand key={index}>
                                <div className='inline-block px-3 py-3 md:py-2'>
                                    <img src={tool.icon} alt={tool.name} className="w-5 inline-block" />
                                    <span className='px-1'>{tool.name}</span>
                                </div>
                            </RubberBand>
                        ))
                    }
                </div>
            </div>

        </div>
    </div>
  )
}

export default Skills