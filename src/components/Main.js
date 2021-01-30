import React, { useLayoutEffect, useState } from 'react';
import '../styles/Main.css';
import CreationCard from './CreationCard';
import imageInteractive from '../images/desktop/image-interactive.jpg';
import deepEarth from '../images/desktop/image-deep-earth.jpg';
import nightArcade from '../images/desktop/image-night-arcade.jpg';
import soccerTeam from '../images/desktop/image-soccer-team.jpg';
import grid from '../images/desktop/image-grid.jpg';
import fromAbove from '../images/desktop/image-from-above.jpg';
import pocketBorealis from '../images/desktop/image-pocket-borealis.jpg';
import curiosity from '../images/desktop/image-curiosity.jpg';
import fisheye from '../images/desktop/image-fisheye.jpg';
import imageInteractiveMobile from '../images/mobile/image-interactive.jpg';
import deepEarthMobile from '../images/mobile/image-deep-earth.jpg';
import nightArcadeMobile from '../images/mobile/image-night-arcade.jpg';
import soccerTeamMobile from '../images/mobile/image-soccer-team.jpg';
import gridMobile from '../images/mobile/image-grid.jpg';
import fromAboveMobile from '../images/mobile/image-from-above.jpg';
import pocketBorealisMobile from '../images/mobile/image-pocket-borealis.jpg';
import curiosityMobile from '../images/mobile/image-curiosity.jpg';
import fisheyeMobile from '../images/mobile/image-fisheye.jpg';

function useMediaQuery() {
    const [screenSize, setScreenSize] = useState([0, 0]);

    useLayoutEffect(() => {
        function updateScreenSize() {
            setScreenSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener("resize", updateScreenSize);
        updateScreenSize();
        return () => window.removeEventListener("resize", updateScreenSize);
    }, []);

    return screenSize;
}

function Main() {
    const [width] = useMediaQuery();
    let mobile = false;

    if (width <= 600) {
        mobile = true;
    } else {
        mobile = false;
    }

    return (
        <div className="main">
            <div className="main__top">
                <img src={mobile ? imageInteractive : imageInteractiveMobile} alt="Loading..." />
                <div className="main__topContent">
                    <h1 className="font-josefin">The leader in interactive VR</h1>
                    <p className="font-alata">
                        Founded in 2011, Loopstudios has been producing world-class virtual reality
                        projects for some of the best companies around the globe. Our award-winning
                        creations have transformed businesses through digital experiences that bind
                        to their brand.
                    </p>
                </div>
            </div>

            <div className="main__bottom">
                <h1 className="font-josefin">Our creations</h1>
                <div className="main__bottomHeaderBtn font-alata">See all</div>
                <div className="main__bottomCreation">
                    <CreationCard image={mobile ? deepEarthMobile : deepEarth} title="Deep earth" />
                    <CreationCard image={mobile ? nightArcadeMobile : nightArcade} title="Night arcade" />
                    <CreationCard image={mobile ? soccerTeamMobile : soccerTeam} title="Soccer team VR" />
                    <CreationCard image={mobile ? gridMobile : grid} title="The grid" />
                    <CreationCard image={mobile ? fromAboveMobile : fromAbove} title="From up above VR" />
                    <CreationCard image={mobile ? pocketBorealisMobile : pocketBorealis} title="Pocket borealis" />
                    <CreationCard image={mobile ? curiosityMobile : curiosity} title="The curiosity" />
                    <CreationCard image={mobile ? fisheyeMobile : fisheye} title="Make it fisheye" />
                </div>
            </div>
        </div >
    )
}

export default Main
