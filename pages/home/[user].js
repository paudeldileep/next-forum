import Dashboard from "../../components/Dashboard/Dashboard";
import { useRouter } from "next/router";

const Home = (props) => {
  const router = useRouter();

  const { user } = router.query;

  console.log(user);
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default Home;
