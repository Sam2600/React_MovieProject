import { useQuery } from "react-query";
import { fetchUsers } from "../axios/axios";
import { useEffect, useState } from "react";
import Post from "../components/Post";
import SearchBar from "../components/SearchBar";

const PostsPage = () => {
  
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);

  const { data, isPreviousData } = useQuery(
    ["/users", page],
    () => fetchUsers(page),
    {
      keepPreviousData: true,
    }
  );

  useEffect(() => {
    if (data?.data) setUsers(data?.data);
  }, [data]);

  const handleChange = (e) => {
    let searchInput = e.target.value;

    setUsers(
      data?.data.filter((data) =>
        data.first_name.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  };

  let content;

  const toalPage = data?.total_pages;

  const pageCounts = Array(toalPage)
    .fill()
    .map((x, index) => index + 1);

  if (!users.length) {
    content = (
      <div className="text-center text-xl my-5">There is no users here.</div>
    );
  } else {
    content = users.map((user) => <Post key={user.id} {...user} />);
  }

  return (
    <div className="w-8/12 border shadow-md m-auto my-10">
      <div className="flex justify-around">
        <div className="my-10 mx-10 space-x-6">
          <button
            disabled={page === 1}
            onClick={() => setPage(1)}
            className={`bg-slate-300 w-20 p-1 border-none shadow-md rounded-md hover:cursor-pointer1 ${
              page === 1 && "disabled:opacity-70"
            }`}
          >
            First
          </button>

          {pageCounts.map((page) => (
            <button
              className="underline"
              onClick={() => setPage(page)}
              disabled={isPreviousData}
              key={page}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setPage(toalPage)}
            disabled={!users.length}
            className={`bg-slate-300 w-20 p-1 border-none shadow-md rounded-md hover:cursor-pointer ${
              !users.length && "disabled:opacity-70"
            }`}
          >
            Last
          </button>
        </div>
        <SearchBar change={handleChange} />
      </div>{" "}
      <hr />
      {content}
    </div>
  );
};

export default PostsPage;
