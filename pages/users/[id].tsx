import { useRouter } from "next/router";
import Layout from "../../components/Layout";

export default function UserDetail() {
  const router = useRouter()
  const {id} = router.query
  return (
    <Layout pageTitle="Detail User">
      <h2>Detail User Page {id}</h2>
    </Layout>
  )
}
