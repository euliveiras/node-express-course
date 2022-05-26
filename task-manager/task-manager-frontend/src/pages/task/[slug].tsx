import { GetStaticPaths, GetStaticProps } from "next";

type TaskProps = {
  id: string;
};

export default function Task({ id }: TaskProps) {
  console.log(id);
  return <h1>{id}</h1>;
}

export const getStaticPaths: GetStaticPaths = () => {
  return { paths: [{ params: { slug: "" } }], fallback: true };
};

export const getStaticProps: GetStaticProps = (ctx) => {
  const slug = ctx.params?.slug as string;
  return { props: { id: slug } };
};
