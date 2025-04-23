import React from 'react'

const InstagramFeed = () => {
    React.useEffect(() => {
        // Dynamically create the script element
        const script = document.createElement("script");
        script.src = "https://static.elfsight.com/platform/platform.js";
        script.defer = true;
        script.setAttribute("data-use-service-core", "true");

        // Append the script to the document body
        document.body.appendChild(script);


        return () => {
            document.body.removeChild(script);
        };
    }, []);




    return (
        <>
            <div className="w-full"  style={{ display: "flex", justifyContent: "center" , overflow:"hidden" }} >
                {/* <div className="elfsight-app-222506e4-c7aa-4c72-afa1-9952ae07b72b" data-elfsight-app-lazy></div> */}
                <div class="elfsight-app-7246ec53-92a7-48ca-8133-2558f4e9706a" data-elfsight-app-lazy></div>
            </div>
        </>
    )
}

export default InstagramFeed