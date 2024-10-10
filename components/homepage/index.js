import Header from "./header";
import LatestMovies from "./latest-movies";
import UpcommingMovies from "./upcomming-movies";
import TopTenMovies from "./top-ten-movies";
import TrendingMovies from "./trending-movies";

const Index = ()=>{
  const design = (
    <div>
      <Header />
      <div className="bg-slate-800 p-8 sm:p-16">
        <div className="flex flex-col gap-8 sm:gap-16">
          <LatestMovies />
          <UpcommingMovies />
          <TopTenMovies />
          <TrendingMovies />
        </div>
      </div>
    </div>
  );
  return design;
}

export default Index;
