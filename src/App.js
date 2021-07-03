import React from 'react'
import Navbar from './Components/Navbar';
import Thumbnail from "./Components/Thumbnail";
import SectionHeading from "./Components/SectionHeading";
import ImportantText from "./Components/ImportantText";
import t11 from "./images/1.jpg";
import t12 from "./images/2.jpg";
import t13 from "./images/3.jpg";
import t21 from './images/1-fun-freebies.jpg'
import t22 from './images/2-order-and-pay-ahead.jpg';
import t23 from './images/3-get-to-free-faster.jpg';


export default function App() {
    return (
      <>
        <Navbar />
        <section className="flex flex-col space-y-12 px-4 md:px-16 md:mt-24 py-24 pt-0">
          <SectionHeading
            title="Getting started is easy"
            desc="Earn Stars and get rewarded in a few easy steps."
          ></SectionHeading>

          <div className="flex md:flex-row flex-col px-4">
            <Thumbnail title="Create an account" img={t11} type="number">
              To get started, <ImportantText>join now.</ImportantText> You can
              also <ImportantText> Join in the app </ImportantText> to get
              access to the full range of Starbucks® Rewards benefits.
            </Thumbnail>

            <Thumbnail
              title="Order and pay how you’d like"
              img={t12}
              type="number"
            >
              Use cash, credit/debit card or save some time and pay right
              through the app. You’ll collect Stars all ways.{" "}
              <ImportantText> Learn how </ImportantText>
            </Thumbnail>

            <Thumbnail title="Earn Stars, get Rewards" img={t13} type="number">
              As you earn Stars, you can redeem them for Rewards—like free food,
              drinks, and more. Start redeeming with as little as 25 Stars!
            </Thumbnail>
          </div>
        </section>


        



        <section className="flex flex-col space-y-12 px-4 md:px-16 md:mt-12 py-24 pt-0">
          <SectionHeading
            title="Endless Extras"
            desc="Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee."
          ></SectionHeading>

          <div className="flex md:flex-row flex-col px-4">
            <Thumbnail title="Fun freebies" img={t21}>
              Not only can you earn free cost coffee, look forward to a birthday
              treat plus coffee and tea refills.
              <ImportantText classes="md:block mt-3">Learn more.</ImportantText>
            </Thumbnail>

            <Thumbnail title="Order & pay ahead" img={t22}>
              Enjoy the convenience of in-store, curbside or drive-thru pickup
              at select stores.
              <ImportantText classes="md:block mt-3">Learn more.</ImportantText>
            </Thumbnail>

            <Thumbnail title="Get to free faster" img={t23}>
              Earn Stars even quicker with Bonus Star challenges, Double Star
              Days and exciting games.
              <ImportantText classes="md:block mt-3">Learn more.</ImportantText>
            </Thumbnail>
          </div>
        </section>



      </>
    );
}
