import { FaStar,FaStarHalfAlt } from "react-icons/fa";
 import "./Card2.css"

const Card2 = ({ title, imageUrl, time, rating, link }) => {
const fullStars = Math.floor(rating);
const hasHalfStar = rating % 1 !== 0;

function calculateRotation(event, coords) {
const centerX = coords.x + coords.width / 2;
const centerY = coords.y + coords.height / 2;
const rotateY = (event.clientX - centerX) / (coords.width / 2);
const rotateX = (event.clientY - centerY) / (coords.height / 2);
return { rotateX: rotateX * 10, rotateY: rotateY * -10 };
}


function handleMouseOver(event) {
const coords = event.target.getBoundingClientRect();
const rotations = calculateRotation(event, coords);
event.target.style.transform = `perspective(300px) rotateX(${rotations.rotateX}deg) rotateY(${rotations.rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
}

function handleMouseLeave(event) {
event.target.style.transform = '';
}
return (
<div className="rounded-lg  h-[325px] flex  flex-row md:flex-col  w-[325px]  cursor-pointer   hover:scale-110 transition-all duration-300 ">
    <div className="cards-container  ">
        <div className="card">
                <div class="card-media">
                    <img className="rounded-lg w-[100%] h-[200px] object-cover border-2   z-[1000000] " src={imageUrl} alt={title} />
                </div>
                <div class="card-description">
                    <div class="about-place">
                        <div class="place">
                            <p class="place-name">{title}</p>
                            <p className="flex "> {[...Array(fullStars)].map((_, index) => (
                                <FaStar className='text-yellow-500' key={ index } />
                                ))}

                                {hasHalfStar && (
                                <FaStarHalfAlt className='text-yellow-500' />

                                )}
                                {[...Array(5 - Math.ceil(rating))].map((_, index) => (
                                <FaStar key={ index } className='text-zinc-800' />
                                ))}
                            </p>
                        </div>
                        <div class="place-review">
                            <p className="text-black font-semibold">Prep Time</p>
                            <p class="per-person mt-2 mr-2 font-semibold"> {time} min</p>
                        </div>
                    </div>
                </div>
         </div>
    </div>
</div>
);
};

export default Card2;
