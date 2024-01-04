import Failed from "../components/Failed";
import Loading from "../components/Loading";
import Movies from "../components/Movies";

export const checkStatus = (status) => {
  switch (status) {
    case "pending":
      return <Loading />;

    case "failed":
      return <Failed />;

    default:
      return <Movies />;
  }
};
