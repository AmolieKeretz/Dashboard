import "../src/components/menu/menu.scss";
//icon
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineAnalytics } from "react-icons/md";
import { IoIosReorder } from "react-icons/io";
import { IoIosPeople } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { MdOutlineRateReview } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { GiAnticlockwiseRotation } from "react-icons/gi";

export const menu = [
    {
        id: 1,
        title: "Dashboard",
        url: "/",
        icon: MdOutlineDashboard,
    },
    {
        id: 2,
        title: "Analytics",
        url: "/",
        icon: MdOutlineAnalytics,
    },
    {
        id: 3,
        title: "Order",
        url: "/orders",
        icon: IoIosReorder,
    },
    {
        id: 4,
        title: "Customer",
        url: "/",
        icon: IoIosPeople,
    },{
        id: 5,
        title: "Offers",
        url: "/",
        icon: BiSolidOffer,
    },
    {
        id: 6,
        title: "Reviews",
        url: "/",
        icon: MdOutlineRateReview,
    },{
        id: 7,
        title: "Settings",
        url: "/",
        icon: IoSettingsOutline,
    },
    {
        id: 8,
        title: "Security",
        url: "/",
        icon: MdOutlineSecurity,
    },{
        id: 9,
        title: "Help center",
        url: "/",
        icon: IoIosHelpCircleOutline,
    },
    {
        id: 10,
        title: "Logout",
        url: "/",
        icon: GiAnticlockwiseRotation,
    },
];

export const orders = [
    {
      id: 1,
      img: "/1.jpg",
      customerName: "aaaaa",
      customerNumber: "white",
      customerAddress: "aaaaaaa",
      price: "$250.99",
      date: "01.02.2023",
      time: "12:12",
    },
    {
        id: 2,
        img: "/2.jpg",
        customerName: "bbbbb",
        customerNumber: "white",
        customerAddress: "aaaaaaa",
        price: "$250.99",
        date: "01.02.2023",
        time: "12:12",
      },
      {
        id: 3,
        img: "/3.jpg",
        customerName: "aaaaaaa",
        customerNumber: "white",
        customerAddress: "aaaaaaa",
        price: "$250.99",
        date: "01.02.2023",
        time: "12:12",
      },
      {
        id: 4,
        img: "/4.jpg",
        customerName: "aaaaaaa",
        customerNumber: "white",
        customerAddress: "aaaaaaa",
        price: "$250.99",
        date: "01.02.2023",
        time: "12:12",
      },
      {
        id: 5,
        img: "/5.jpg",
        customerName: "aaaaaaa",
        customerNumber: "white",
        customerAddress: "aaaaaaa",
        price: "$250.99",
        date: "01.02.2023",
        time: "12:12",
      },
      {
        id: 6,
        img: "/6.jpg",
        customerName: "aaaaaaa",
        customerNumber: "white",
        customerAddress: "Saaaaaaa",
        price: "$250.99",
        date: "01.02.2023",
        time: "12:12",
      },
      {
        id: 7,
        img: "/7.jpg",
        customerName: "Paaaaaaa",
        customerNumber: "white",
        customerAddress: "aaaaaaa",
        price: "$250.99",
        date: "01.02.2023",
        time: "12:12",
      },
      {
        id: 8,
        img: "/8.jpg",
        customerName: "aaaaaaaion",
        customerNumber: "white",
        customerAddress: "Soaaaaaaa",
        price: "$250.99",
        date: "01.02.2023",
        time: "12:12",
      },
      {
        id: 9,
        img: "/9.jpg",
        customerName: "aaaaaaa",
        customerNumber: "white",
        customerAddress: "Saaaaaaa",
        price: "$250.99",
        date: "01.02.2023",
        time: "12:12",
      },
      {
        id: 10,
        img: "/10.jpg",
        customerName: "aaaaaaan",
        customerNumber: "white",
        customerAddress: "Saaaaaaa",
        price: "$250.99",
        date: "01.02.2023",
        time: "12:12",
      },
    
  ];
  export const singleProduct = {
    id: 1,
    title: "AAAAAAAA",
    img: "/1.jpg",
    info: {
      productId: "Ps5SDF1156d",
      price: "$250.99",
      Restaurence: "Soo",
    },
  };