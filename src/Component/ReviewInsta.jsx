import { useEffect } from 'react';
import InstagramFeed from './InstagramFeed';

// import SectionTitle from '../components/SectionTitle';

function ReviewInsta() {
    useEffect(() => {
        // Load Elfsight script
        const elfsightScript = document.createElement('script');
        elfsightScript.src = "https://static.elfsight.com/platform/platform.js";
        elfsightScript.async = true;
        document.body.appendChild(elfsightScript);

        return () => {
            document.body.removeChild(elfsightScript);
        };
    }, []);






    return (
        <>
            <section className='container mx-auto px-4'>
                <div className="container">
                    <InstagramFeed />
                </div>
            </section>
            <section className="lg:py-10 py-5">
                <div className="container mx-auto px-4">
                    {/* <div className="w-full text-center">
                        <SectionTitle title={"Testimonials"} subtitle={"Testimonials"} />
                    </div> */}
                    <div className="w-full">
                    <div class="elfsight-app-e2f9d2ee-355e-42ad-ad77-3437d5d66cd3" data-elfsight-app-lazy></div>
                    </div>
                </div>
            </section>



        </>
    );
}

export default ReviewInsta;