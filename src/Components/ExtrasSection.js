import React from 'react';
import Thumbnail from "./Thumbnail";
import ImportantText from "./ImportantText";
import SectionHeading from "./SectionHeading";
import t21 from "../images/1-fun-freebies.jpg";
import t22 from "../images/2-order-and-pay-ahead.jpg";
import t23 from "../images/3-get-to-free-faster.jpg";

export default function ExtrasSection() {
    return (
        <div className="flex flex-col space-y-12 px-4 md:px-16 md:mt-12 py-24 pt-0">
            <SectionHeading title="Endless Extras" heading_classes="">
                Joining Starbucks® Rewards means unlocking access to exclusive
                benefits. Say hello to easy ordering, tasty Rewards and—yes, free
                coffee.
            </SectionHeading>

            <div className="flex sm:flex-row flex-col px-4">
                <Thumbnail title="Fun freebies" img={t21}>
                    Not only can you earn free cost coffee, look forward to a birthday
                    treat plus coffee and tea refills.
                    <ImportantText classes="md:block mt-3">Learn more.</ImportantText>
                </Thumbnail>

                <Thumbnail title="Order & pay ahead" img={t22}>
                    Enjoy the convenience of in-store, curbside or drive-thru pickup at
                    select stores.
                    <ImportantText classes="md:block mt-3">Learn more.</ImportantText>
                </Thumbnail>

                <Thumbnail title="Get to free faster" img={t23}>
                    Earn Stars even quicker with Bonus Star challenges, Double Star Days
                    and exciting games.
                    <ImportantText classes="md:block mt-3">Learn more.</ImportantText>
                </Thumbnail>
            </div>
        </div>
    );
}
