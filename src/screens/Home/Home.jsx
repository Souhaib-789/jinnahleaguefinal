import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { MdAddCircle } from "react-icons/md";
import Navbar from "../../components/Navbar/Navbar";
import { DemoPie } from "../../components/chart/chart";
import CustomizedDialogs from "../../components/modal/modal";


const Home = (props) => {

  const [openModal, setopenModal] = useState(false)
  const [category, setcategory] = useState()
  const [amount, setamount] = useState()
  const [descrption, setdescription] = useState()


  useEffect(() => {
    fetch('http://localhost:5000/api/finance')
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.error(error))
      // .finally(() => setLoading(false));
  }, []);


  const data = [
    {
      type: 'Medicine',
      value: 27,
    },
    {
      type: 'Hospital',
      value: 25,
    },
    {
      type: 'Birthday party',
      value: 18,
    },
    {
      type: 'Wedding',
      value: 15,
    },
    {
      type: 'Show',
      value: 10,
    },
    {
      type: 'Ramzan',
      value: 5,
    },
  ];

  const onClickAddAmount = () => {
    if (!category) {
      alert('Please select category first')
    }
    else if (!amount) {
      alert('Please enter amount')
    } 
    else if (!descrption) {
      alert('Please enter description')
    }
    else{
      setopenModal(false)
      let finance = [
        {
          uid: 1,
          amount: amount,
          category: category,
          description: descrption
        }
      ]

      console.log('----------------', finance);
    }
  }
  return (
    <>

      <Navbar />
      <div className={styles.main_div}>
        <div className={styles.home_view_one}>

          <div className={styles.chart_container}>
            <DemoPie data={data} />
          </div>
          <div className={styles.heading_view}>
            <text>Income : Rs. 5000 /-</text>
          </div>
          <MdAddCircle  color='white' onClick={() => setopenModal(true)}  className={styles.add_icon} />

        </div>


        <div className={styles.restaurants_view} id="pop">
          <text className={styles.sub_heading}>My Expenses</text>
          {/* <div className={styles.home_view_three}>
          {
            categories?.map((item, index) => {
              return (
                <div className={styles.restaurant_card}>
                
                  <text className={styles.card_title}>Medicine </text>        
                  <text className={styles.card_title}>Rs. 3000 /- </text>          
               
              </div>
              )
            })
          }

        </div> */}

        </div>

        <CustomizedDialogs
          categoryValue={category}
          setCategory={(e) => setcategory(e.target.value)}

          amountValue={amount}
          setAmount={(e) => setamount(e.target.value)}

          descriptionValue={descrption}
          setDescription={(e) => setdescription(e.target.value)}

          visible={openModal}
          onClose={() => setopenModal(false)}
          Add={onClickAddAmount}
        />
      </div>
    </>
  );
};

export default Home;
