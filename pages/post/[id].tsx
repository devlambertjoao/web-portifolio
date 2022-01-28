import { GetStaticPropsResult, NextPage } from "next";

interface Props {
  id: number;
}

interface Context {
  params: Props;
}

export async function getStaticProps(
  context: Context
): Promise<GetStaticPropsResult<Props>> {
  const id: number = context.params.id;

  return {
    props: {
      id,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

const Post: NextPage<Props> = ({ id }) => {
  return <div>Asadasdas {id}</div>;
};

export default Post;
