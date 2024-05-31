import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import img from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item text-white pt-8 my-24 bg-fixed">
            <SectionTitle
                heading={"FEatured item"}
                subHeading={"---Check it out---"}
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-800 bg-opacity-40 py-20 px-36 ">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>May 20, 2024</p>
                    <p className="">WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis animi natus nam ad praesentium ipsum consequuntur doloremque aut, corrupti in!</p>
                    <button className="btn btn-outline border-0 border-b-2 text-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;