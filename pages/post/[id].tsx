import { GetStaticPropsResult, NextPage } from "next";
import S from "../../styles/Post.module.scss";

//We use typescript, let type this...
interface Props {
  //Your component params
  id: number;
}

interface Context {
  params: Props; //Url params
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: "5555",
          //Always string here... The post with id 5555 will cache on build time,
          //like an static page -> site.com/post/5555
        },
      },
    ], //Register default pages, for cache on build time...
    fallback: "blocking", //Make the page wait for load all data
  };
}

export async function getStaticProps(
  context: Context
): Promise<GetStaticPropsResult<Props>> {
  //get your data from backend here. Id is the component input, but can search an object
  //from any API, and pass all object to PostPage Component
  //On next video I can show this...
  //Simulate delay of a request

  await createDelay();
  const id: number = context.params.id;

  return {
    props: {
      id,
    },
  };
}

const createDelay = () => new Promise((res) => setTimeout(res, 2800));

const PostPage: NextPage<Props> = ({ id }) => {
  //Typescript <3 Working fine!!!

  return (
    <div className={S.container}>
      My Post Page with id: {id}
      <div>Lets publish this for see this feature working fine</div>
    </div>
  );
};

export default PostPage;
