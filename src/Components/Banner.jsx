import React from 'react'

const Banner = ({ children }) => {
    return (
        <div>
            <section className="bg-black dark:bg-white lg:grid lg:h-screen lg:place-content-center">
                <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
                    <div className="mx-auto max-w-prose text-center">
                        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                            Understand user flow and
                            <strong className="text-indigo-600"> increase </strong>
                            conversions
                        </h1>

                        <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi. Natus, provident
                            accusamus impedit minima harum corporis iusto.
                        </p>

                        {children}

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Banner