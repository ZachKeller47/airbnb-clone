import React from 'react'
import './Home.css'
import Banner from './Banner.js'
import Card from './Card'

function Home() {
    return (
        <div className='home'>
            <Banner />
            <div className='home__section'>
                <Card
                    src="https://withlocals-com-res.cloudinary.com/image/upload/w_320,h_261,c_fill,g_auto,q_auto,dpr_3.0,f_auto/website/ipad-general-optimized?im_w=720"
                    title="Online Experiences"
                    description="Unique activities we can do together, led by a world of hosts."
                />
                <Card 
                    src="https://static1.realtyexecutives.com/site-files/85e90258-a83c-4440-a389-13e70584d849?im_w=720"
                    title="Unique Stays"
                    description="Spaces that are more than just a place to sleep."
                />
                <Card 
                    src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2015/7/17/0/Teri-Koss_Organically-Inspired_1.jpg.rend.hgtvcom.966.644.suffix/1437147078053.jpeg?im_w=720"
                    title="Entire Homes"
                    description="Comfortable private places, with room for friends or family."
                />
            </div>

            <div className='home__section'>
                <Card 
                    src="https://p.bookcdn.com/data/Photos/Big/7620/762014/762014956/Skyline-View-Cb-Platinum-Penthouses-Next-To-London-Eye-photos-Exterior.JPEG?im_w=720"
                    title="Penthouse in London"
                    description="Enjoy your stay in the skies of London, in this beautiful spacious luxury penthouse."
                    price="€300/night"
                />
                <Card 
                    src="https://overwaterbungalowsguide.com/wp-content/uploads/2020/01/Conrad-Bora-Bora-Nui-Presidential-Villajpg-1.jpg?im_w=720"
                    title="Bora Bora Bungalow"
                    description="Wake up to an all-inclusive stunning 360 degree views of ocean in Bora Bora."
                    price="$600/night"
                />
                <Card 
                    src="https://i.pinimg.com/736x/23/a4/f4/23a4f4e48e0d081c8eae82a13d405976.jpg"
                    title="Traditional Berlin Home"
                    description="Beautiful modern home in the north side of Berlin."
                    price="€250/night"
                />
            </div>
        </div>
    )
}

export default Home
