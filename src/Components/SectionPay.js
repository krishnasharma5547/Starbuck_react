import React from "react";
import SectionHeading from "./SectionHeading";
import WayToPayHeading from "./WayToPayHeading";
import img1 from "../images/1A.png";
import img2 from "../images/1B.png";
import img3 from "../images/2A.png";
import img4 from "../images/2B.png";
import img5 from "../images/3A.png";

export default function SectionPay() {
  return (
      <>
        <div className="flex flex-col pb-12  px-4 bg-yellow-50 space-y-12">
          <div className="mb-12">
            <SectionHeading
                title="Cash or card, you earn Stars"
                heading_classes="text-3xl font-semibold"
            >
              No matter how you pay, you can earn Stars with your morning coffee.
              Those Stars add up to (really delicious) Rewards.
            </SectionHeading>
          </div>
          <div>
            <WayToPayHeading
                heading="1 ★ per dollar"
                pera="Pay as you go"
                w1_heading="Scan and pay separately"
                w2_heading="Save payment in the app"
                w1_pera="Use cash or credit/debit card at the register."
                w2_pera="Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step."
                img1={img1}
                img2={img2}
            ></WayToPayHeading>
            <hr className="mt-12"></hr>
          </div>
          <div>
            <WayToPayHeading
                heading="2 ★ per dollar"
                pera="Add funds in the app"
                w1_heading="Preload"
                w2_heading="Register your gift card"
                w1_pera="To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app."
                w2_pera="Then use it to pay through the app. You can even consolidate balances from multiple cards in one place."
                img1={img3}
                img2={img4}
            ></WayToPayHeading>
            <hr className="mt-12"></hr>
          </div>
          <div>
            <WayToPayHeading
                heading="Up to 3★ per dollar"
                pera="With Starbucks® Rewards Visa® Card"
                w1_heading="Earn Stars even faster"
                w2_heading=""
                w1_pera="Earn Stars on all purchases you make with our credit card
opens in new window in and outside of Starbucks. Earn 1 Star per $1 when you digitally preload your Starbucks Card with your Starbucks® Rewards Visa® Card, and earn 2 Stars per $1 when you pay with that preloaded Starbucks Card."
                w2_pera=""
                img1={img5}
                img2=""
            ></WayToPayHeading>
          </div>
        </div>
      </>
  );
}
