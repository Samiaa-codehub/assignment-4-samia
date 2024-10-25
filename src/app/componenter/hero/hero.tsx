import Image from "next/image";
import strawbeery from "../../../../public/strawbeery.jpg";
import products from "../data/products";
import puffs from "../../../../public/puffs.jpg";
import black from "../../../../public/black.jpg";
import cheese from "../../../../public/cheese.jpg";
import pink from "../../../../public/pink.jpg";
import puffs_strabeery from "../../../../public/puffs_strawbeery.jpg";
import crossom from "../../../../public/crossom.jpg";
const Hero = () => {
  return (
    <div>
      <div>
        <div className="hero min-h-[80vh]  custom-img p-20 m-15">
          <div className="hero-overlay">
            <div className="hero-content text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold ">Hello! I'm Samia</h1>
                <br></br>
                <h2 className="mb-5 text-4xl font-bold">
                  Sweeten Your Day with Our Treats
                </h2>
                <p className="mb-5 font-thin text-lg my-5 text-center custom-pra">
                  Discover a world of deligthful desserts that tantalize your
                  taste buds and satisfy your cravings....
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <h2 className="text-center font-bold text-5xl m-10">About us</h2>
              <p className="text-center m-5 text-2xl">
                Welcome to Sweet Delight!.We are passionate about creating
                delicious dessert that bring joy to every occasion.Our skilled
                team pours love and creativity into every treat,ensuring a
                memorable experience with each bite.Join us in celebrating the
                sweetness of life-your next favorite dessert awaits!
              </p>
              <Image
                src={pink}
                alt="/"
                className="w-[90%] h-[400] mx-auto custom-pic mt-20"
              />

              <div>
                <h1 className="text-5xl font-bold mt-20  text-center">
                  Our Menu
                </h1>
                <p className="text-2xl text-center m-5">
                  Explore our handcrafted desserts,where passion meets
                  perfection in every creation..
                </p>
                <div>
                  <div className=" flex justify-between gap-8 p-10 m-5 mx-auto ">
                    <div className="m-15 p-5 mt-5 mx-auto custom-container overflow-hidden hover:shadow-lg transition-transform duration-400">
                      <Image
                        src={strawbeery}
                        alt=" pic"
                        className="w-[200px] h-[200px] m-2 custom-pic overflow-hidden hover:shadow-lg transition-transform duration-300"
                      />
                      <ul className="font-thin  m-2 p-2">
                        {products.map((product) => (
                          <li key={product.id1}>
                            <h2 className="custom-name text-3xl">
                              {product.name1}
                            </h2>
                            <p className="custom-price m-2 text-3xl">
                              {product.price1}
                            </p>
                            <p className="text-2xl custom-description">
                              {product.description1}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <button className="custom-butn m-2 p-2">Order Now</button>
                    </div>
                    <div className="m-15 p-5 mt-5 mx-auto custom-container overflow-hidden hover:shadow-lg transition-transform duration-400">
                      <Image
                        src={black}
                        alt=""
                        className="w-[200px] h-[200px] m-2 custom-pic overflow-hidden hover:shadow-lg transition-transform duration-300"
                      />
                      <ul className="font-thin m-2 p-2 ">
                        {products.map((product) => (
                          <li key={product.id2}>
                            <h2 className="custom-list text-3xl">
                              {" "}
                              {product.name2}
                            </h2>
                            <p className="m-2 custom-price text-3xl">
                              {product.price2}
                            </p>
                            <p className="text-2xl custom-description">
                              {product.description2}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <button className="custom-butn m-2 p-2 ">
                        Order Now
                      </button>
                    </div>
                    <div className="m-15 p-5 mt-5 mx-auto custom-container overflow-hidden hover:shadow-lg transition-transform duration-400">
                      <Image
                        src={cheese}
                        alt="Cheese Buns"
                        className="w-[200px] h-[200px] m-2 custom-pic overflow-hidden hover:shadow-lg transition-transform duration-300"
                      />
                      <ul className="font-thin text-2xl m-2 p-2">
                        {products.map((product) => (
                          <li className="custom-list" key={product.id3}>
                            <h2>{product.name3}</h2>
                            <p className="custom-price m-2">{product.price3}</p>
                            <p className="custom-description text-2xl">
                              {product.description3}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <button className="custom-butn m-2 p-2">Order Now</button>
                    </div>
                  </div>
                  <div className=" flex justify-between gap-8  m-5 mx-auto ">
                    <div className="m-15 p-5 mt-5 mx-auto custom-container overflow-hidden hover:shadow-lg tranistion-transform duration-400">
                      <Image
                        src={puffs}
                        alt="creamy puffs"
                        className="w-[200px] h-[200px] m-2  custom-pic overflow-hidden hover:shadow-lg transition-transform duration-300 "
                      />
                      <ul className="font-thin text-2xl m-2 p-2">
                        {products.map((product) => (
                          <li className="custom-list" key={product.id4}>
                            <h2 className="custom-name">{product.name4}</h2>
                            <p className="custom-price m-2">{product.price4}</p>
                            <p className="custom-description text-2xl">
                              {product.description4}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <button className="custom-butn m-2 p-2">Order Now</button>
                    </div>
                    <div className=" flex justify-between gap-8   mx-auto ">
                      <div className="m-15 p-5 mt-5 mx-auto custom-container overflow-hidden hover:shadow-lg tranistion-transform duration-400">
                        <Image
                          src={puffs_strabeery}
                          alt="Strawberry puffs"
                          className="w-[200px] h-[200px] m-2 custom-pic overflow-hidden hover:shadow-lg transition-transform duration-300"
                        />
                        <ul className="font-thin text-2xl m-2 p-2">
                          {products.map((product) => (
                            <li className="custom-list" key={product.id5}>
                              <h2 className="custom-name">{product.name5}</h2>
                              <p className="custom-price m-2">{product.price5}</p>
                              <p className="custom-description text-2xl">
                                {product.description5}
                              </p>
                            </li>
                          ))}
                        </ul>
                        <button className=" custom-butn m-2 p-2 overflow-hidden hover:shadow-lg tranistion-transform duration-300">
                          Order Now
                        </button>
                      </div>
                    </div>
                    <div className=" flex justify-between gap-8   mx-auto ">
                    <div className="m-15 p-5 mt-5 mx-auto custom-container overflow-hidden hover:shadow-lg tranistion-transform duration-400">

                        <Image
                        src={crossom}
                        alt="Croissants"
                        className="w-[200px] h-[200px] m-2 custom-pic overflow-hidden hover:shadow-lg transition-transform duration-300"
                        />
                        <ul className="font-thin text-2xl m-2 p-2">
                          {products.map((product)=>(
                            <li className="custom-list" key={product.id6}>
                              <h2 className="custom-name">{product.name6}</h2>
                              <p className="custom-price m-2">{product.price6}</p>
                              <p className="custom-description text-2xl">{product.description6}</p>
                            </li>
                          ))}
                        </ul>
                        <button className=" custom-butn m-2 p-2 overflow-hidden hover:shadow-lg tranistion-transform duration-300">Order Now</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div>
                      <h2 className="text-5xl font-bold text-center mt-20 mb-15">
                        Contact
                      </h2>
                      <div className="itmes-center">
                        <form className="p-6 w-96 m-[2%] ml-[38%] border border-gray-800 shadow-md rounded">
                          <input
                            type="text"
                            placeholder="Enter your name"
                            className=" w-[100%]  mb-4 p-2 border border-gray-500 rounded"
                          />
                          <br></br>
                          <textarea
                            placeholder="Enter your order"
                            className="w-[100%] mb-4 p-2 border border-gray-500 rounded items-center"
                            rows={4}
                          ></textarea>
                          <button className="border border-gray-500 rounded shadow-md p-2 mb-4 ml-20 mt-4 p-2 bg-pink-400 hover:bg-gray-500 transition-colors duration-300">
                            Send Order
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
