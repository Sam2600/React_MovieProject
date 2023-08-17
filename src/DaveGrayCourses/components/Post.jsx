const Post = ({ ...user }) => {

  return (
    <section className="w-6/12 m-auto border shadow-lg my-10 h-32 flex items-center">
      <img
        className="w-3/12 h-full"
        src={user.avatar}
        alt={`picture of ${user.first_name}`}
      />

      <article className="relative left-10 flex-col gap-3">
        <p>
          <b>First Name:</b> &nbsp; <span className="relative left-3">{user.first_name}</span>
        </p>
        <p>
          <b>Last Name:</b> &nbsp; <span className="relative left-4">{user.last_name}</span>
        </p>
        <p>
          <b>Email: </b> &nbsp; <span className="relative left-15 underline hover:cursor-pointer">{user.email}</span>
        </p>
      </article>
    </section>
  );
};

export default Post;
