import React from "react";

//Check this document for UI suggestions: https://docs.google.com/document/d/1NGgPjBVcXR7AVJvfigivQgENnvRRJ7YXOZdua_Yhd4I/edit?tab=t.0

export default function Information() {
    return(
        <>
            <div className="relative h-[432px] bg-[url('https://wp.technologyreview.com/wp-content/uploads/2025/02/250218-powergrid.jpg?resize=1200,600')] bg-cover bg-center flex items-center justify-center bg-fixed">
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <h1 className="text-white font-semibold text-4xl text-center px-4 sm:px-6 md:px-8 relative">What is the Interconnection Queue?</h1>
            </div>
            <div>
                <h3 className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white">test</h3>
            </div>
        </>
    )
}