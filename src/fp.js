import React from 'react';
import './fp.css';


const Container = () => {
  return (
    <div className="container">
      <div className="left-side">
        <h1 className='heading'>Project M.</h1>
        <div className="top-side">
            
        </div>
      <div className="horizontal-line">
      <ul>
                <li>Home</li>
                <li>Messages</li>
                <li>Tasks</li>
                <li>Members</li>
                <li>Settings</li>
            </ul>
            <hr/>
            <p>My Projects</p>
            <dl>
                <li>Mobile App</li>
                <li>Website Redesign</li>
                <li>Design System</li>
                <li>Wireframes</li>
            </dl>
            <section>
                <h2>Thoughts Time</h2>
                <p>We don't have any notice for<br></br> you, till then you can share <br></br>  your thoughts with your  <br></br>   peers.   <br></br>
                <input type="text"placeholder='Write a code'/>
                </p>
            </section>

      </div>
      </div>
      <div className="vertical-line"></div>
      
      <div className="right-side">
      <div className="top-side">
      <div className="search-bar">
        <i class="icon-search"></i>
        <input className="search" type="text" placeholder="Search for anything..." />
      </div>
      </div>
      <div className="horizontal-line">
        <h1>Mobile App</h1>
        <div className='container1'>
        <div className="column">
            <ul>To Do</ul>
            <hr className='start'/>
            <div className="column1">
            <div className="workings">
                <h6 className="low1">Low</h6>
                <h2>Brainstorming</h2>
                <p className="para1">Brainstorming brings team members' diverse<br></br>experience into play.</p>
            </div>
            <div className="workings">
            <h6 className="high1">High</h6>
                <h2>Research</h2>
                <p className="para1">User research helps you to create an optimal<br></br>product for users.</p>
            </div>
            <div className="workings">
            <h6 className="high1">High</h6>
                <h2>Wireframes</h2>
                <p className="para1">Low fidelity wireframes include the most basic<br></br>content and visuals.</p>
            </div>
            </div>
        </div>
        <div className="column">
        <ul>On Progress</ul>
        <hr className="working"/>
        <div className="column1">
        <div className="workingw">
            
            <h6 className="low1">Low</h6>
                <h2>Onboarding Illustrations</h2>
                
        </div>
        <div className="workingw">
        <h6 className="low1">Low</h6>
                <h2>Moodboard</h2>
                
        </div>
       
                
      
        </div>
        </div>
        <div className="column">
        <ul>Done</ul>
        <hr className="finished"/>
        <div className="column1">
        <div className="workingf">
            <h6 className="complete1">Complete</h6>
            <h2>Mobile App Design</h2>

        </div>
        <div className="workingf">
        <h6 className="complete1">Complete</h6>
        <h2>Design System</h2>
        <p className="para1">It just needs to adapt the UI from what you did<br></br>before
        </p>
        </div>
        
        </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Container;
