import React from 'react'
import Thumbnail from './Thumbnail';
import ImportantText from './ImportantText';
import SectionHeading from './SectionHeading';
import t11 from "../images/1.jpg";
import t12 from "../images/2.jpg"
import t13 from "../images/3.jpg";


export default function NavOffSection(props) {
    return (
        <div className="flex flex-col space-y-12 px-4 md:px-16 md:mt-12  py-24 pt-0">
            <SectionHeading title="Getting started is easy" heading_classes="">
                Earn Stars and get rewarded in a few easy steps.
            </SectionHeading>

            <div className="flex sm:flex-row flex-col px-4">
                <Thumbnail title="Create an account" img={t11} type="number">
                    To get started, <ImportantText>join now.</ImportantText> You can
                    also <ImportantText> Join in the app </ImportantText> to get access
                    to the full range of Starbucks® Rewards benefits.
                </Thumbnail>

                <Thumbnail
                    title="Order and pay how you’d like"
                    img={t12}
                    type="number"
                >
                    Use cash, credit/debit card or save some time and pay right through
                    the app. You’ll collect Stars all ways.{" "}
                    <ImportantText> Learn how </ImportantText>
                </Thumbnail>

                <Thumbnail title="Earn Stars, get Rewards" img={t13} type="number">
                    As you earn Stars, you can redeem them for Rewards—like free food,
                    drinks, and more. Start redeeming with as little as 25 Stars!
                </Thumbnail>
            </div>
        </div>
    );
}
