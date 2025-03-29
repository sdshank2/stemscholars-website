import React from "react";

export default function Home() {
    return (
        <>
            <div className="relative h-[864px] bg-[url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center flex items-center justify-center bg-fixed">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <h1 className="text-white font-semibold text-4xl text-center px-4 sm:px-6 md:px-8 relative">Connecting to the Interconnection Queue, made easy</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
                <div className="text-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold dark:text-white">Simplified Connection</h2>
                    <p className="dark:text-white">Fill out a few fields, and get all of your necessary forms.</p>
                </div>
                <div className="text-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold dark:text-white">Learn about the Interconnection Queue</h2>
                    <p className="dark:text-white">Find information about the Interconnection Queue and its importance.</p>
                </div>
                <div className="text-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold dark:text-white">Header 3</h2>
                    <p className="dark:text-white">Subheader 3</p>
                </div>
            </div>
        </>
    );
}
