import AdminPanel from "../../../components/admin-panel";
import Movies from "../../../components/admin-panel/movies";

const Index = ()=>{
  const design = (
    <div>
      <AdminPanel>
        <Movies />
      </AdminPanel>
    </div>
  );
  return design;
}

export default Index;
