import ManagerHome from "@/components/ManagerHome";

export default async function Home({ params }) {
  return (
    <ManagerHome branch={params.branch} />
  );
}
