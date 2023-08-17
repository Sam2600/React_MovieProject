const Post = ({ ...user }) => {  return (
    <div className="flex flex-col gap-2 w-full border rounded-md shadow-lg p-3">
      <h2 className="text-xl text-black">{user.title}</h2> <hr />
      <p> <b>{user.id}.</b> &nbsp; {user.body}</p>
    </div>
  );
};

export default Post;
