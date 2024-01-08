"use client";

import { useEffect, useState } from "react";

export const Footer = () => {
    const [year, setYear] = useState('');

    useEffect(() => {
        fetch('http://worldtimeapi.org/api/timezone/Asia/Manila')
            .then(response => response.json())
            .then(data => {
                const date = new Date(data.datetime);
                setYear(date.getFullYear().toString());
            })
            .catch(error => console.error(error));
    }, []);
    return (
        <section>
            <footer className="">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 text-center"> {/* Add text-center class */}
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <span
                                className="text-white self-center font-semibold whitespace-nowrap font-montserrat"
                            >HCDC Information Technology Society
                            </span>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
                            <li>
                                <a href="#about" className="hover:underline me-4 md:me-6 font-montserrat">About</a>
                            </li>
                            <li>
                                <a href="/faq" className="hover:underline me-4 md:me-6 font-montserrat">FAQ</a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/kaizenics/its-preview"
                                    target="_blank"
                                    className="hover:underline font-montserrat">Github Repo</a
                                >
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-white sm:mx-auto lg:my-8" />
                    <div className="flex flex-row justify-between content-end">
                        <span className="w-fit text-sm text-gray-500 inline-flex  font-montserrat">
                            {year} | All Rights Reserved.
                        </span>
                        <span className="w-fit  text-white inline-flex fill-white font-montserrat gap-4">
                            <a href="https://www.facebook.com/hcdcits" target="_blank">
                                <svg
                                    className="h-5 fill-gray-500 hover:fill-white transition ease-in-out"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                                </svg>

                            </a>
                            <a href="mailto:itshcdc@gmail.com" target="_blank">
                                <svg
                                    className="h-5 fill-gray-500 hover:fill-white transition ease-in-out"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512">
                                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                                </svg>
                            </a>

                        </span>
                    </div>

                </div>
            </footer>
        </section>
    );
}