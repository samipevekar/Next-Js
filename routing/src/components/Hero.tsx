import Image from "next/image";
import menImage from "public/image.png";

const Hero = () => {
    return (
        <div className="relative h-screen">
            <div className="absolute inset-0 -z-10">
                <Image src={menImage} fill alt="hero" style={{ objectFit: "cover" }} />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800"></div>
            </div>

            <div className="flex items-center justify-center pt-44">
                <h1 className="font-bold text-4xl text-white">Professional Dance</h1>
            </div>
        </div>
    );
};

export default Hero;
