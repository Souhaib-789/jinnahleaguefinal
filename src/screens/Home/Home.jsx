import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import MainImage from "../../assets/main_image.png";
import { AiOutlineFileDone } from "react-icons/ai";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";
import BannerImage from '../../assets/illustration.png'
import { useNavigate } from "react-router";
import { categories } from "../../assets/dummyapi";


const Home = () => {
  
  const [restaurants , setrestaurants] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
   getData();
  }, []);

  const getData = () => {
    fetch('www.themealdb.com/api/json/v1/1/categories.php')
    .then((response) => response.json())
    .then((json) =>  console.log('========',json))
    .catch((error) => console.error(error))
    // .finally(() => setLoading(false));
  }
  
  const info = [
    {
      id: 1,
      name: 'Secure Payment',
      description: 'Lorem ipsum is a placeholder text commonly used to demonstrate the dummy text',
      icon: <RiSecurePaymentFill size={50} color={"#f6371e"} />
    },
    {
      id: 2,
      name: 'Best Quality',
      description: 'Lorem ipsum is a placeholder text commonly used to demonstrate the dummy text',
      icon: <AiOutlineFileDone size={50} color={"#1e6af6"} />
    },
    {
      id: 1,
      name: 'Easy Delivery',
      description: 'Lorem ipsum is a placeholder text commonly used to demonstrate the dummy text',
      icon: <FaShippingFast size={50} color={"#1ef666af"} />
    },
  ]


  return (
    <div className={styles.main_div}>
      <div className={styles.home_view_one}>
        <div className={styles.flex} data-aos="fade-right">
          <text className={styles.main_heading}>Discover Restaurants that Deliver Near You</text>
          <text className={styles.span}>
            Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a document or a typeface without relying on
            meaningful content.
          </text>

          <button className={styles.main_button} >Learn More</button>
        </div>
        <div className={styles.side_view} data-aos="fade-left">
          <img src={MainImage} className={styles.main_image} />
        </div>
      </div>


      {/* <div className={styles.home_view_two}>
        {
          info.map((item, index) => {
            return (
              <div className={styles.info_card}>
                <div>{item?.icon}</div>
                <div className={styles.info_card_sub_view}>
                  <text className={styles.card_heading}>{item?.name}</text>
                  <text>{item?.description}</text>
                </div>
              </div>
            )
          })
        }
      </div> */}

      <div className={styles.restaurants_view} id="pop">
        <text className={styles.sub_heading}>Available Restaurants</text>
        <div className={styles.home_view_three}>
          {
            categories?.map((item, index) => {
              return (
                <div className={styles.restaurant_card}>
                <img src={item?.strCategoryThumb} className={styles.card_image} />
                <div className={styles.card_text_view}>
                  <text className={styles.card_title}>{item?.strCategory}</text>
                  <text style={{ color: 'grey', fontSize: '12px' }}>{item?.location}</text>
                 
                  <button className={styles.card_button} onClick={()=> navigate('restaurent')}>VISIT</button>
                </div>
              </div>
              )
            })
          }

        </div>

      </div>

      <div className={styles.home_view_four}>
        <div className={styles.bg_bubble_c}></div>
        <img src={BannerImage} className={styles.banner_image} />
        <div className={styles.banner_sub_view}>
          <text className={styles.sub_heading}>Buy the best food of your favorite choice</text>
          <text className={styles.span}>Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a document or a typeface without relying on</text>
        </div>
      </div>

    </div>
  );
};

export default Home;
