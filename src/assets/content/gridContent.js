import natureImage from "../Images/image_5.jpg"
import peopleImage from "../Images/image_4.jpg"
import manMadeImage from "../Images/image_3.jpg"
import fashionImage from "../Images/image_2.jpg"
import abstractImage from "../Images/image_6.jpg"
import blackWhiteImage from "../Images/image_1.jpg"


export const Headings = {
  heading: "Featured Work",
  subHeading: "Explore some best categories",
};

export const gridInfo = [
  {
    id:"1",
    title: "Nature",
    info: "Nature's canvas captured in pixels.",
    imageName:natureImage,

  },
  {
    id:"2",
    title: "People",
    info: "Moments captured, souls revealed.",
    imageName:peopleImage
  },
  {
    id:"3",
    title: "Manmade",
    info: "Haute couture meets urban geometry.",
    imageName:manMadeImage
  },
  {    
    id:"4",
    title: "Fashion",
    info: "Elegance captured in stylish frames.",
    imageName:fashionImage
  },
  {
    id:"5",
    title: "Abstract",
    info: "Capturing Chaos in Stillness.",
    imageName:abstractImage,
  },
  {
    id:"6",
    title: "Black and White",
    info: "Timeless monochrome expressions",
    imageName:blackWhiteImage
  },
];
