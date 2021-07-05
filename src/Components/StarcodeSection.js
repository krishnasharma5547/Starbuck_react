import React from "react";
import Pera from "./Pera";
import Heading from "./Heading";
import ImportantText from "./ImportantText";

export default function StarcodeSection() {
    let link = "#"
    return (
        <div class="px-8 py-24 mt-8 md:w-1/2 md:ml-48 md:max-w-xl">
            <Heading classes="my-4">Star Codes</Heading>
            <Pera classes="tracking-wider font-medium my-5 md:text-base">
                Yesssss. You’ve got Stars in your hand. Enter your code here and we’ll
                add Stars to your account.
            </Pera>
            <input
                type="text"
                class="border border-solid w-full my-4 border-gray-700 p-3 rounded-xl font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder=" Enter Your Star Code"
            />
            <div class="flex flex-row-reverse">
                <button
                    class="mb-8 border-2 border-gray-600 px-6 h-10 rounded-full font-primarybold focus:outline-none focus:ring-2 focus:ring-gray-600 hover:bg-gray-200">
                    Submit
                </button>
            </div>
            <Pera class="text-lg mt-4">
                Have a receipt but don't have a code? <br/>
            </Pera>
            <Pera>
                Go to
                <a href={link}>
                    <ImportantText> starbucks-stars.com </ImportantText>
                </a>
                to upload your receipt and collect your Stars
            </Pera>
            <Heading classes="mt-24">Questions?</Heading>
            <Pera className="mt-4">
                We want to help in any way we can. You can ask your barista anytime or
                we’ve answered the most commonly asked questions
                <a href={link}>
                    <ImportantText> starbucks-stars.com </ImportantText>
                    right over here.
                </a>
            </Pera>
        </div>
    );
}
