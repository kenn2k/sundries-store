import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StoreType } from "../../types/types";
import { VscLoading } from "react-icons/vsc";
import Card from "../../UI/Card";
import { IoArrowBackOutline } from "react-icons/io5";
const InfoPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState<StoreType | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
        console.log(response);
        setPost(response.data);
        setLoading(false);
      });
    } catch (error) {
      console.error(`Error ${error}`);
    }
  }, [id]);

  return (
    <div className="flex items-center justify-center w-full h-screen px-[5%]">
      {loading && (
        <p className="flex items-center justify-center h-screen text-xl bg-pageBg text-text">
          <span className="animate-spin ">
            <VscLoading />
          </span>
          Loading...
        </p>
      )}

      {post && (
        <div className="">
          <Card>
            <div className="">
              <button
                className="flex items-center gap-4 px-1.5  md:px-2 md:py-1 mb-4 text-[14px] md:text-lg font-bold transition ease-in-out border rounded hover:bg-hoverBg px-5%"
                onClick={() => navigate(-1)}
              >
                <span>
                  <IoArrowBackOutline />
                </span>
                Back to
              </button>
              <h1 className="text-xl text-center lg:text-2xl md:text-xl">
                {post.title}
              </h1>
              <div className="grid gap-8 mt-2 md:mt-8">
                <div className="grid grid-cols-1 gap-4 md:gap-4 md:grid-cols-3">
                  <img
                    className="object-contain mx-auto my-auto h-80 md:row-span-3"
                    src={post.image}
                    alt=""
                  />

                  <span className="text-xs  md:col-span-2 tracking-wider  md:text-[14px]">
                    {post.description}
                  </span>
                  <div className="flex flex-col text-[14px] font-bold md:col-span-1">
                    <p className="">
                      In stock:{" "}
                      <span className="italic text-[12px]  text-hoverText">
                        {post.rating.count}
                      </span>
                    </p>
                    <p className="">
                      Rate:{" "}
                      <span className="italic text-[12px]  text-hoverText">
                        {post.rating.rate}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="">
                  <p className="text-xl text-hoverBg">
                    {post.price}${" "}
                    <span className="text-text font-bold italic text-[12px]">
                      {" "}
                      / for 1 piece
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default InfoPage;
