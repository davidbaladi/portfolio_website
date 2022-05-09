import React from "react";
import VideoPlayer from "react-video-js-player";
import "./project-two.css";
import Vid from "./capstone.mp4";
import Poster from "./ff.png";

const ProjectTwo = () => {
  const videoSrc = Vid;
  const poster = Poster;

  return (
    <div className="project-two-container">
      <div className="project-two" id="machine-learning">
        <div className="project-two-video">
          <VideoPlayer
            className="video-player"
            src={videoSrc}
            width="100%"
            height="100%"
            poster={poster}
            muted
          />
        </div>
        <div className="project-two-text">
          <p>
            In my final year of Electrical Engineering, I built and trained
            computer vision algorithms:&nbsp;
            <b>object detection</b> and <b>facial recognition</b>.
            <br />
            <br />
            I integrated these algorithms into a robot for voice-commanded
            object retrieval. Upon user voice command, the robot would seek a
            target object with object detection and return the object to the
            correct user using facial recognition.
            <br />
            <br />
            To accommodate for hardware and budget limitations, I programmed a
            TCP network connection that enabled the robot's microcomputer
            (Raspberry Pi) to wirelessly stream environmental footage to a
            Windows laptop for processing by these algorithms.
          </p>
          <a
            className="project-two-demo-button"
            href="https://github.com/davidbaladi/engineering_capstone"
            target="_blank"
            rel="noreferrer"
          >
            Repo
          </a>
        </div>
        <div className="title">Capstone</div>
      </div>
      <span className="project-two-span-one" />
      <span className="project-two-span-two" />
      <span className="project-two-span-three" />
      <span className="project-two-span-four" />
      <span className="project-two-span-five" />
      <span className="project-two-span-six" />
      <span className="project-two-span-seven" />
      <span className="project-two-span-eight" />
    </div>
  );
};

export default ProjectTwo;
