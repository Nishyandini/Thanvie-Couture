import React, { useState } from 'react';
import '../home-page/home-page.css';
import debounce from 'lodash.debounce';
import '../../helper/helper.css';

import homeImageLeft1 from '../../images/saree photoshoot/1e83c3b5-f371-49d8-8386-ee4c9bb0470f1575450346521-GoSriki-White-Khadi-Blend-Solid-Printed-Saree-39715754503425-1.jpg';
import homeImageRightTop1 from '../../images/saree photoshoot/765f7289cd6c4d42f74074a4798aedc0.jpg';
import homeImageRightMid1 from '../../images/saree photoshoot/98494db28f1501b7b07a78dbcb224add.jpg';
import homeImageRightBottom1 from '../../images/saree photoshoot/DSC_0290_27cc0fd0-bc4b-4718-b16c-0e6f671ff063_540x.jpg';

import homeImageLeft2 from '../../images/saree photoshoot/d85dd92c1901615644f5081ac69f4c24.jpg';
import homeImageRightTop2 from '../../images/saree photoshoot/6ce3dc7a88817448860ff66ba3c7fb57.jpg';
import homeImageRightMid2 from '../../images/saree photoshoot/d85dd92c1901615644f5081ac69f4c24.jpg';
import homeImageRightBottom2 from '../../images/saree photoshoot/6ce3dc7a88817448860ff66ba3c7fb57.jpg';

const HomePage = () => {

    const getHomePageJson = (index, imageLeft, imageRightTop, imageRightMid, imageRightBottom, collectionName) => {
        return {
            "index": index,
            "homeImageLeft": imageLeft,
            "homeImageRightTop": imageRightTop,
            "homeImageRightMid": imageRightMid,
            "homeImageRightBottom": imageRightBottom,
            "collectionName": collectionName
        }
    }

    const getHomePageArray = () => {
        return [
            getHomePageJson(0, homeImageLeft1, homeImageRightTop1, homeImageRightMid1, homeImageRightBottom1, "Designer Wear"),
            getHomePageJson(1, homeImageLeft2, homeImageRightTop2, homeImageRightMid2, homeImageRightBottom2, "Designer Wear")
        ];
    }

    const [homePageJson, setHomePageJson] = useState(getHomePageArray()[1]);

    const handleOnWheel = index => {
        let array = getHomePageArray();
        if (index === array.length - 1) {
            index = 0;
        } else {
            index = index + 1;
        }
        setHomePageJson(array[index]);
    }


    return (
        <div onWheel={debounce(() => handleOnWheel(homePageJson.index), 100, { leading: false, trailing: true })}>
            <div className="home-page">
                <div className="main-left-section background-img-style box-shadow"
                    style={{ backgroundImage: `url(${homePageJson.homeImageLeft})` }}>
                </div>
                <div className="main-right-section">
                    <div className="img-top image-size flip-animation background-img-style box-shadow"
                        style={{ backgroundImage: `url(${homePageJson.homeImageRightTop})` }}>
                    </div>
                    <div className="img-middle image-size flip-animation background-img-style box-shadow"
                        style={{ backgroundImage: `url(${homePageJson.homeImageRightMid})` }}>
                    </div>
                    <div className="img-bottom image-size flip-animation background-img-style box-shadow"
                        style={{ backgroundImage: `url(${homePageJson.homeImageRightBottom})` }}>
                    </div>
                </div>
                <h1 className="collection-name">{homePageJson.collectionName}</h1>
                <div className="signature montreuil-font">Sugirthakala Mohan</div>
            </div>
        </div>
    )
}

export default HomePage;