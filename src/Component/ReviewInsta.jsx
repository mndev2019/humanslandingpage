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
            <section className='container' style={{overflow:"hidden"}}>
                <div className="w-full rounded-[15px]">
                    <InstagramFeed />
                </div>
            </section>
            <section className="lg:py-10 py-5" style={{overflow:"hidden"}}>
                <div className="container mx-auto px-4">
                    {/* <div className="w-full text-center">
                        <SectionTitle title={"Testimonials"} subtitle={"Testimonials"} />
                    </div> */}
                    <div className="w-full">
                    {/* <div class="elfsight-app-e2f9d2ee-355e-42ad-ad77-3437d5d66cd3" data-elfsight-app-lazy></div> */}
                    <div class="elfsight-app-57bd9676-3a7d-40a2-8cff-8898b903e970" data-elfsight-app-lazy></div>
                    </div>
                </div>
            </section>



        </>
    );
}

export default ReviewInsta;