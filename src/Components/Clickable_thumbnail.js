import React from "react";
import glassImage from '../images/025.png'

function Clikable_thumbnail(props) {
    return (
        <section>
            <div className="flex flex-col w-full">
                <div className="flex flex-col m-auto pt-12 pb-8 space-y-12 bg-blue-50 w-full shadow-2xl">
                    <div className="block m-auto w-full">
                        <h1 className="text-center text-3xl font-bold">
                            Get your favorites for free
                        </h1>
                    </div>
                    <div>
                        <ul className="list-none block text-center font-bold text-2xl space-x-12">
                            <li className="inline-block">
                                <a href="#">25<i className="fas fa-star text-yellow-600 text-xs"></i></a>
                            </li>
                            <li className="inline-block">
                                <a href="#">50<i className="fas fa-star text-yellow-600 text-xs"></i></a>
                            </li>
                            <li className="inline-block">
                                <a href="#">150<i className="fas fa-star text-yellow-600 text-xs"></i></a>
                            </li>
                            <li className="inline-block">
                                <a href="#">200<i className="fas fa-star text-yellow-600 text-xs"></i></a>
                            </li>
                            <li className="inline-block">
                                <a href="#">400<i className="fas fa-star text-yellow-600 text-xs"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    className="relative flex flex-col md:flex-row w-full bg-blue-100 py-24 md:px-60 justify-center items-center space-y-6 md:h-80 -z-1">
                    <div className="flex flex-shrink-0">
                        <img className="md:max-h-60 h-60" src={glassImage} alt=""/>
                    </div>
                    <div className="flex flex-col items-center md:max-w-xs space-y-6 px-4">
                        <h1 className="text-3xl my-auto font-semibold">Customize your drink</h1>
                        <p className="text-lg">
                            Make your drink just right with an extra espresso shot, dairy substitute or a dash of your
                            favorite
                            syrup.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Clikable_thumbnail