import React, { useEffect, useState } from "react";
import Navbar from "./../Component/Navbar";
import blog1 from "../assets/Single Post/blog-1.jpg";
import blogauthor from "../assets/Single Post/blog-author.jpg";
import comment1 from "../assets/Single Post/comments-1.jpg";
import comment2 from "../assets/Single Post/comments-2.jpg";
import comment3 from "../assets/Single Post/comments-3.jpg";
import comment4 from "../assets/Single Post/comments-5.jpg";
import blogreact1 from "../assets/Single Post/blog-recent-1.jpg";
import blogreact2 from "../assets/Single Post/blog-recent-2.jpg";
import blogreact3 from "../assets/Single Post/blog-recent-3.jpg";
import blogreact4 from "../assets/Single Post/blog-recent-4.jpg";
import blogreact5 from "../assets/Single Post/blog-recent-5.jpg";
import Chatbot from "./Chatbot";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../Component/Footer";

function Singlepost() {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [comments, setComments] = useState([]);

  const handlesubmit = (e) => {
    e.preventDefault();
    const newComment = { name, email, message };

    axios
      .post("https://blogelevate-backend.onrender.com/auth/comment", newComment)
      .then((res) => {
        setComments([...comments, res.data.newComment]); // ✅ Correctly update state
        setname("");
        setemail("");
        setmessage("");
      })
      .catch((err) =>
        console.error("Comment ERROR:", err.response?.data || err.message)
      );
  };

  useEffect(() => {
    axios
      .get("https://blogelevate-backend.onrender.com/auth/comment")
      .then((res) => setComments(res.data.comments))
      .catch((err) =>
        console.error(
          "Error fetching comments:",
          err.response?.data || err.message
        )
      );
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (!token) {
      navigate("/signin"); // Redirect to login page if no token found
    }
  }, [navigate]);
  return (
    <>
      <Navbar />
      <div className="container bg-white  mx-auto px-6 py-12 text-center lg:text-left">
        <h1 className="text-2xl font-bold text-gray-800 ">Single Post</h1>
        <hr className="mt-3 mb-10 border-t-2 border-gray-300  w-full" />
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 bg-white p-6 shadow-lg rounded-lg max-w-3xl mx-auto">
            <img
              src={blog1}
              alt="Blog post"
              className="w-full rounded-lg mb-6"
            />
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Dolorum optio tempore voluptas dignissimos cumque fuga qui
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Similique neque nam consequuntur ad non maxime aliquam quas.
              Quibusdam animi praesentium. Aliquam et laboriosam eius aut
              nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est ea
              dolorem doloremque deleniti aperiam unde soluta.
            </p>
            <blockquote className="italic text-gray-600 border-l-4 border-gray-400 pl-4 my-4">
              "Et vero doloremque tempore voluptatem ratione vel aut. Deleniti
              sunt animi aut. Aut eos aliquam doloribus minus autem quos."
            </blockquote>
            <p className="text-gray-700 leading-relaxed">
              Sed quo laboriosam qui architecto. Occaecati repellendus omnis
              dicta inventore tempore provident voluptas mollitia aliquid. Id
              repellendus quia. Asperiores nihil magni dicta est suscipit
              perspiciatis.
            </p>
            <div className="mt-8 border-t pt-6">
              <h3 className="text-xl font-semibold mb-4">Comments</h3>
              <div className="flex gap-4 mb-6 pb-4 border-b">
                <img
                  src={comment1}
                  alt="Aron Alvarado"
                  className="w-12 h-12 rounded-full object-cover border shadow-sm"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Georgia Reader
                    <span className="text-gray-500 text-sm">
                      &#x21b7; Reply
                    </span>
                  </h4>
                  <p className="text-gray-500 text-sm mb-2">01 Jan, 2022</p>
                  <p className="text-gray-700 leading-relaxed">
                    Et rerum totam nisi. Molestiae vel quam dolorum vel
                    voluptatem et et. Est ad aut sapiente quis molestiae est qui
                    cum soluta. Vero aut rerum vel. Rerum quos laboriosam
                    placeat ex qui. Sint qui facilis et.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 mb-6 pb-4 border-b">
                <img
                  src={comment2}
                  alt="Lynda Small"
                  className="w-12 h-12 rounded-full object-cover border shadow-sm"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Aron Alvarado
                    <span className="text-gray-500 text-sm">
                      &#x21b7; Reply
                    </span>
                  </h4>
                  <p className="text-gray-500 text-sm mb-2">01 Jan, 2022</p>
                  <p className="text-gray-700 leading-relaxed">
                    Ipsam tempora sequi voluptatem quis sapiente non. Autem
                    itaque eveniet saepe. Officiis illo ut beatae.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 mb-6 pb-4 border-b">
                <img
                  src={comment3}
                  alt="Sianna Ramsay"
                  className="w-12 h-12 rounded-full object-cover border shadow-sm"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Lynda Small
                    <span className="text-gray-500 text-sm">
                      &#x21b7; Reply
                    </span>
                  </h4>
                  <p className="text-gray-500 text-sm mb-2">01 Jan, 2022</p>
                  <p className="text-gray-700 leading-relaxed">
                    Enim ipsa eum fugiat fuga repellat. Commodi quo quo dicta.
                    Est ullam aspernatur ut vitae quia mollitia id non. Qui ad
                    quas nostrum rerum sed necessitatibus aut est. Eum officiis
                    sed repellat maxime vero nisi natus. Amet nesciunt nesciunt
                    qui illum omnis est et dolor recusandae. Recusandae sit ad
                    aut impedit et. Ipsa labore dolor impedit et natus in porro
                    aut. Magnam qui cum. Illo similique occaecati nihil modi
                    eligendi. Pariatur distinctio labore omnis incidunt et
                    illum. Expedita et dignissimos distinctio laborum minima
                    fugiat. Libero corporis qui. Nam illo odio beatae enim
                    ducimus. Harum reiciendis error dolorum non autem quisquam
                    vero rerum neque.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 mb-6 pb-4 border-b">
                <img
                  src={comment4}
                  alt="Nolan Davidson"
                  className="w-12 h-12 rounded-full object-cover border shadow-sm"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Nolan Davidson
                    <span className="text-gray-500 text-sm">
                      &#x21b7; Reply
                    </span>
                  </h4>
                  <p className="text-gray-500 text-sm mb-2">01 Jan, 2022</p>
                  <p className="text-gray-700 leading-relaxed">
                    Distinctio nesciunt rerum reprehenderit sed. Iste omnis eius
                    repellendus quia nihil ut accusantium tempore. Nesciunt
                    expedita id dolor exercitationem aspernatur aut quam ut.
                    Voluptatem est accusamus iste at. Non aut et et esse qui sit
                    modi neque. Exercitationem et eos aspernatur. Ea est
                    consequuntur officia beatae ea aut eos soluta. Non qui
                    dolorum voluptatibus et optio veniam. Quam officia sit
                    nostrum dolorem.
                  </p>
                </div>
              </div>
            </div>
            {comments.length > 0
              ? comments.map((comment, index) => (
                  <div key={index} className="flex gap-4 mb-6 pb-4 border-b">
                    <img
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                        comment.name
                      )}`}
                      alt={comment.name}
                      className="w-12 h-12 rounded-full object-cover border shadow-sm"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {comment.name}
                        <span className="text-gray-500 text-sm cursor-pointer ml-2 hover:underline">
                          &#x21b7; Reply
                        </span>
                      </h4>
                      <p className="text-gray-500 text-sm mb-2">
                        {new Date(comment.createdAt).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        {comment.message}
                      </p>
                    </div>
                  </div>
                ))
              : null}

            {/*  */}
            <div className="mx-auto max-w-screen-sm px-4">
              <form onSubmit={handlesubmit}>
                <h1 className="mt-6 text-xl font-bold sm:mb-6 sm:text-3xl">
                  Post Comment
                </h1>
                <div className="flex flex-col space-y-3 p-4 text-gray-700">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    className="h-12 w-full rounded-md border bg-white px-5 text-sm outline-none focus:ring focus:border-gray-500"
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    className="h-12 w-full rounded-md border bg-white px-5 text-sm outline-none focus:ring focus:border-gray-500"
                  />
                  <textarea
                    name="comment"
                    placeholder="Write your comment here"
                    cols={30}
                    rows={6}
                    className="h-40 w-full rounded-md border bg-white p-5 text-sm text-gray-600 outline-none focus:ring focus:border-gray-500"
                    value={message}
                    onChange={(e) => setmessage(e.target.value)}
                  />
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="h-10 w-auto rounded-md bg-gray-800 px-4 text-sm font-medium text-white outline-none hover:bg-gray-700    "
                    >
                      Post Comment
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Profile Card */}
            <div className="bg-white p-6 shadow-xl rounded-lg text-center">
              <img
                src={blogauthor}
                alt="User profile"
                className="w-20 h-20 mx-auto rounded-full mb-2"
              />
              <h3 className="text-lg font-semibold">Jane Smith</h3>
              <p className="text-gray-600 text-sm">
                Itaque quidem optio quia voluptatibus dolorem dolor. Modi eum
                sed possimus accusantium. Quas repellat voluptatem officia
                numquam sint aspernatur voluptas. Esse et accusantium ut unde
                voluptas.
              </p>
            </div>

            {/* Search Box */}
            <div className="bg-white p-4 shadow rounded-lg">
              <input
                type="text"
                placeholder="Search"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            {/* Recent Posts */}
            <div className="bg-white p-4 shadow rounded-lg">
              <h4 className="font-semibold mb-2">Recent Posts</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-center space-x-3">
                  <img
                    src={blogreact1}
                    alt="Blog 1"
                    className="w-12 h-12 rounded-md object-cover"
                  />
                  <span>Nihil blanditiis at in nihil autem</span>
                </li>
                <li className="flex items-center space-x-3">
                  <img
                    src={blogreact2}
                    alt="Blog 2"
                    className="w-12 h-12 rounded-md object-cover"
                  />
                  <span>Quisquam est qui dolorem</span>
                </li>
                <li className="flex items-center space-x-3">
                  <img
                    src={blogreact3}
                    alt="Blog 3"
                    className="w-12 h-12 rounded-md object-cover"
                  />
                  <span>Id quia et et ut maxime similique occaecati ut</span>
                </li>
                <li className="flex items-center space-x-3">
                  <img
                    src={blogreact4}
                    alt="Blog 4"
                    className="w-12 h-12 rounded-md object-cover"
                  />
                  <span>Laborum corporis quo dara net para</span>
                </li>{" "}
                <li className="flex items-center space-x-3">
                  <img
                    src={blogreact5}
                    alt="Blog 4"
                    className="w-12 h-12 rounded-md object-cover"
                  />
                  <span>Et dolores corrupti quae illo quod dolor</span>
                </li>
              </ul>
            </div>

            {/* Tags */}
            <div className="bg-white p-4 shadow rounded-lg">
              <h4 className="font-semibold mb-2">Tags</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-200 text-sm rounded">
                  APP
                </span>
                <span className="px-3 py-1 bg-gray-200 text-sm rounded">
                  IT
                </span>
                <span className="px-3 py-1 bg-gray-200 text-sm rounded">
                  Business
                </span>
                <span className="px-3 py-1 bg-gray-200 text-sm rounded">
                  Mac
                </span>
                <span className="px-3 py-1 bg-gray-200 text-sm rounded">
                  Design
                </span>
                <span className="px-3 py-1 bg-gray-200 text-sm rounded">
                  Office
                </span>
                <span className="px-3 py-1 bg-gray-200 text-sm rounded">
                  Creative
                </span>
                <span className="px-3 py-1 bg-gray-200 text-sm rounded">
                  Studio
                </span>
                <span className="px-3 py-1 bg-gray-200 text-sm rounded">
                  Smart
                </span>
                <span className="px-3 py-1 bg-gray-200 text-sm rounded">
                  Tips
                </span>
                <span className="px-3 py-1 bg-gray-200 text-sm rounded">
                  Marketing
                </span>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <Chatbot />
      <Footer />
    </>
  );
}

export default Singlepost;
