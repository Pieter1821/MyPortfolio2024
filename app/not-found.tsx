import React from "react";
import Link from 'next/link'


const NotFound: React.FC = (props) => {
    return (

        <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-[#1a1b1e] px-4 py-12 sm:px-6 lg:px-8 dark:bg-[#898282] dark:text-white">
            <div className="mx-auto max-w-md text-center">
                <TriangleAlertIcon className="mx-auto h-12 w-12 text-[#ff5252]" />
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#c1c1c1] sm:text-4xl">Oops, page not found!</h1>
                <p className="mt-4 text-[#c4d6f6]">The page you`re looking for doesn`t exist. Let`s get you back on track.</p>
                <div className="mt-6">
                    <Link
                        href="/"
                        className="inline-flex items-center rounded-md bg-[#ff5252] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#ff7b7b] focus:outline-none focus:ring-2 focus:ring-[#ff5252] focus:ring-offset-2 dark:bg-[#ff5252] dark:hover:bg-[#ff7b7b] dark:focus:ring-[#ff5252]"
                        prefetch={false}
                    >
                        Go to Homepage
                    </Link>
                </div>
            </div>
        </div>
    )
}

function TriangleAlertIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
        </svg>
    )
}
        




export default NotFound;


