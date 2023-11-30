import HeroImg from "../Images/aboutHero.jpg";
import service02 from "../Images/service02.jpg"
import service03 from "../Images/service03.jpg"
import service04 from "../Images/service04.jpg"
import service01 from "../Images/service01.jpg"

export const HeroData =
  {
    imgSrc: HeroImg,
    heroText: "I capturing moments in the dance of light, I transform emotions into timeless frames. I am a storyteller behind the lens, freezing fleeting beauty into everlasting images.",
  };

export const ServiceData = {
  heading: "Services",
  subheading:"Showcasing your talent and amplifying your impact"
}

export const GridInfo = [
  {
    id:"1",
    title: "Video Shoot",
    info: "Cinematic frames capture life's stories.",
    imageName:service01,

  },
  {
    id:"2",
    title: "Photo Retouching",
    info: "Enhancing images, crafting perfection.",
    imageName:service02
  },
  {
    id:"3",
    title: "Video Editing",
    info:"Crafting visual storytelling through editing.",
    imageName:service03
  },
  {    
    id:"4",
    title: "Gadget Ranting",
    info: "Tech thrills, rent spills.",
    imageName:service04
  },

];