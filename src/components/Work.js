import React from 'react';
import PickMeals from './assets/pick-meals-image.png';
import ChooseMeals from './assets/choose-image.png';
import DeliveryMeals from './assets/delivery-image.png';

const Work = () => {
    const WorkInfoData =[
        {
            image : PickMeals,
            title : "Pick Meals",
            text : "This meal is so testy and I actually test such type of veg dish first time so this is special moment for me"
        },
        {
            image : ChooseMeals,
            title : "Choose How Often",
            text : "This meal is so testy and I actually test such type of veg dish first time "
        },
        {
            image : DeliveryMeals,
            title : "Fast Deliveries",
            text : " I actually test such type of veg dish first time so this is special moment for me"
        },
    ];

  return (
    <div className='work-section-wrapper' >

        <div className='work-section-top' >
            <p className='primary-subheading' >Work</p>
            <h1 className='primary-heading' >How It Works</h1>
            <p className='primary-subheading' >
                This meal is so testy and I actually test such type of veg dish first time so this is special moment for me
                This meal is so testy and I actually test such type of veg dish first time so this is special moment for me
            </p>
        </div>

        <div className='work-section-bottom' >
            {WorkInfoData.map((data)=> (
                <div className='work-section-info' >
                    <div className='info-boxes-img-container' >
                        <img src={data.image} alt='' />
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Work