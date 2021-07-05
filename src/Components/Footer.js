import React from "react";
import H2 from "./H2";
import H3 from "./H3"
import SocialLink from "./SocialLink";

export default function Footer() {
  let link = "#"
  return (
      <>
        <div className="flex flex-col md:flex-row px-12 py-12 md:px-12 md:space-x-12 md:space-y-0 space-y-12">
          <div className="flex flex-col space-y-8">
            <h1 className="text-xl font-medium">
              About Us
              <i className="float-right md:invisible fas fa-chevron-down"></i>
            </h1>
            <div className="hidden md:block space-y-4">
              <H2 classes="hover:text-black cursor-pointer">Our Heritage</H2>
              <H2 classes="hover:text-black cursor-pointer">ourCoffee</H2>
              <H2 classes="hover:text-black cursor-pointer">Stories and News</H2>
              <H2 classes="hover:text-black cursor-pointer">
                Investor Relations
              </H2>
              <H2 classes="hover:text-black cursor-pointer">
                Policies and Standards
              </H2>
              <H2 classes="hover:text-black cursor-pointer">Customer Services</H2>
            </div>
          </div>

          <div className="flex flex-col space-y-8">
            <h1 className="text-xl font-medium">
              Careers
              <i className="float-right md:invisible fas fa-chevron-down"></i>
            </h1>
            <div className="hidden md:block space-y-4">
              <H2 classes="hover:text-black cursor-pointer">
                Culture and Values
              </H2>
              <H2 classes="hover:text-black cursor-pointer">
                Inclusion, Diversity, and Equility
              </H2>
              <H2 classes="hover:text-black cursor-pointer">
                College Achivement Plan
              </H2>
              <H2 classes="hover:text-black cursor-pointer">U.S. Careers</H2>
              <H2 classes="hover:text-black cursor-pointer">
                International Careers
              </H2>
            </div>
          </div>

          <div className="flex flex-col space-y-8">
            <h1 className="text-xl font-medium">
              Social Impact
              <i className="float-right md:invisible fas fa-chevron-down"></i>
            </h1>
            <div className="hidden md:block space-y-4">
              <H2 classes="hover:text-black cursor-pointer">Ethical Sourcing</H2>
              <H2 classes="hover:text-black cursor-pointer">
                Leading in Sustainability
              </H2>
              <H2 classes="hover:text-black cursor-pointer">
                Strengthening Cummunities
              </H2>
              <H2 classes="hover:text-black cursor-pointer">
                Creating opprtunities
              </H2>
              <H2 classes="hover:text-black cursor-pointer">
                Global Social Impact Report
              </H2>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h1 className="text-xl font-medium">
              For Business Partner
              <i className="float-right md:invisible fas fa-chevron-down"></i>
            </h1>
            <div className="hidden md:block space-y-4">
              <H2 classes="hover:text-black cursor-pointer">
                Landlord Support Center
              </H2>
              <H2 classes="hover:text-black cursor-pointer">Suppliers</H2>
              <H2 classes="hover:text-black cursor-pointer">
                Corporate Gift Card Sales
              </H2>
              <H2 classes="hover:text-black cursor-pointer">
                Office and Foodservice Coffee
              </H2>
              <H2 classes="hover:text-black cursor-pointer"></H2>
            </div>
          </div>

          <div className="flex flex-col space-y-8">
            <h1 className="text-xl font-medium">
              Order and Pickup
              <i className="float-right md:invisible fas fa-chevron-down"></i>
            </h1>
            <div className="hidden md:block space-y-4">
              <H2 classes="hover:text-black cursor-pointer">Order on the App</H2>
              <H2 classes="hover:text-black cursor-pointer">Order on the Web</H2>
              <H2 classes="hover:text-black cursor-pointer">Delivery</H2>
              <H2 classes="hover:text-black cursor-pointer">
                Order and Pickup Options
              </H2>
              <H2 classes="hover:text-black cursor-pointer">
                Explore and Find Coffee for Home
              </H2>
            </div>
          </div>
        </div>

        <div class="flex flex-col">
          <div class="flex space-x-8 pt-8 sm:px-16 px-8">
            <SocialLink classes=" fab fa-spotify" link="#"></SocialLink>
            <SocialLink classes=" fab fa-facebook" link="#"></SocialLink>
            <SocialLink classes=" fab fa-pinterest" link="#"></SocialLink>
            <SocialLink link="#" classes=" fab fa-instagram"></SocialLink>
            <SocialLink link="#" classes=" fab fa-youtube"></SocialLink>
            <SocialLink link="#" classes=" fab fa-twitter"></SocialLink>
          </div>
          <div class="space-x-4 sm:px-12 px-4 pb-12 pt-12 sm:pt-0">
            <ul class="list-none spacey-4">
              <li class="block md:inline-block mx-4 text-xl font-semimedium cursor-pointer hover:underline">
                Privacy Policy
              </li>
              <li class="block mt-8 md:inline-block mx-4 text-xl font-semimedium cursor-pointer hover:underline">
                Terms of Uses
              </li>
              <li class="block mt-8 md:inline-block mx-4 text-xl font-semimedium cursor-pointer hover:underline">
                CA Supply Chain Act
              </li>
              <li class="block mt-8 md:inline-block mx-4 text-xl font-semimedium cursor-pointer hover:underline">
                Submit Your Idea
              </li>
              <li class="block mt-8 md:inline-block mx-4 text-xl font-semimedium cursor-pointer hover:underline">
                Cookie Prefrences
              </li>
            </ul>
          </div>
          <H3 classes="ml-14 mb-12 ">
            &copy; 2021 Starbucks Coffee Company. All rights reserved.
          </H3>
        </div>
      </>
  );
}
