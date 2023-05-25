import React from 'react';

const dummyData = {
    date: "2023-05-25",
    explanation: "The Cat's Eye Nebula (NGC 6543) is one of the best known planetary nebulae in the sky. Its more familiar outlines are seen in the brighter central region of the nebula in this impressive wide-angle view. But this wide and deep image combining data from two telescopes also reveals its extremely faint outer halo. At an estimated distance of 3,000 light-years, the faint outer halo is over 5 light-years across. Planetary nebulae have long been appreciated as a final phase in the life of a sun-like star. More recently, some planetary nebulae are found to have halos like this one, likely formed of material shrugged off during earlier episodes in the star's evolution. While the planetary nebula phase is thought to last for around 10,000 years, astronomers estimate the age of the outer filamentary portions of this halo to be 50,000 to 90,000 years. Visible on the right, some 50 million light-years beyond the watchful planetary nebula, lies spiral galaxy NGC 6552.",
    hdurl: "https://apod.nasa.gov/apod/image/2305/NGC6543_wide.jpg",
    title: "Cat's Eye Wide and Deep",
    }

const NasaPhoto = (props) => {
    return (
        <div className="nasa-photo-wrapper">
            <h3>{props.photo.title}</h3>
            <p>{props.photo.date}</p>
            <img src={props.photo.hdurl} />
            <p>{props.photo.explanation}</p>
        </div>
    
    );
}

export default NasaPhoto;