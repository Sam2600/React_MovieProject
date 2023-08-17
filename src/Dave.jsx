import PostsPage from "./DaveGrayCourses/pages/PostsPage";
import {QueryClientProvider, QueryClient} from 'react-query'

const Dave = () => {

  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <PostsPage />
    </QueryClientProvider>
  );
};

export default Dave;
