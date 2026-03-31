import logo from './logo.svg'
import project_img_1 from './project_img_1.jpg'
import project_img_2 from './project_img_2.jpg'
import project_img_3 from './project_img_3.jpg'
import project_img_4 from './project_img_4.jpg'
import project_img_5 from './project_img_5.jpg'
import project_img_6 from './project_img_6.jpg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'

export const assets = {
    logo,
    project_img_1,
    project_img_2,
    project_img_3,
    project_img_4,
}

export const projectsData = [
    {
      title: "Skyline Haven",
      price: "$2,50,000",
      location: "California",
      image: project_img_1
    },
    {
      title: "Vista Verde",
      price: "$2,50,000",
      location: "San Francisco",
      image: project_img_2
    },
    {
      title: "Serenity Suites",
      price: "$2,50,000",
      location: "Chicago",
      image: project_img_3
    },
    {
      title: "Central Square",
      price: "$2,50,000",
      location: "Los Angeles",
      image: project_img_4
    },
    {
      title: "Vista Verde",
      price: "$2,50,000",
      location: "San Francisco",
      image: project_img_5
    },
    {
      title: "Serenity Suites",
      price: "$2,50,000",
      location: "Chicago",
      image: project_img_6
    },
    {
      title: "Palm Crest Villas",
      price: "$3,10,000",
      location: "Miami",
      image: project_img_2
    },
    {
      title: "Harbor Heights",
      price: "$2,85,000",
      location: "Seattle",
      image: project_img_4
    },
    {
      title: "Maple Grove Estate",
      price: "$3,40,000",
      location: "Austin",
      image: project_img_1
    },
];

export const vistaPropertiesData = projectsData.map((project, index) => ({
    id: index + 1,
    title: project.title,
    type: index % 3 === 0 ? 'House' : index % 3 === 1 ? 'Apartment' : 'Villa',
    city: project.location,
    price: 250000 + (index * 20000),
    beds: index % 2 === 0 ? 3 : 4,
    baths: index % 3 === 0 ? 2 : 3,
    floorspace: 1200 + (index * 200),
    image: project.image,
    featured: index < 6
}));

export const testimonialsData = [
    {
        name: "Donald Jackman",
        title: "Marketing Manager",
        image: profile_img_1,
        alt: "Portrait of Donald Jackman",
        rating: 5,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    },
    {
        name: "Richard Nelson",
        title: "UI/UX Designer",
        image: profile_img_2,
        alt: "Portrait of Richard Nelson",
        rating: 4,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    },
    {
        name: "James Washington",
        title: "Co-Founder",
        image: profile_img_3,
        alt: "Portrait of James Washington",
        rating: 5,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    }
];