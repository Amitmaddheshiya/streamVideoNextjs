import {
  Slider
} from "../../../tailwind";

const Index = ()=>{
  const data = [
    {
      thumbnail: "sanddust2.jpg",
      title: "Stream Wap",
      duration: "2:00:16"
    },
    {
      thumbnail: "movie-abc.png",
      title: "Stream Wap",
      duration: "2:00:16"
    },
    {
      thumbnail: "movie-xyz-.png",
      title: "Stream Wap",
      duration: "2:00:16"
    },
    {
      thumbnail: "sanddust2.jpg",
      title: "Stream Wap",
      duration: "2:00:16"
    },
    {
      thumbnail: "movie-abc.png",
      title: "Stream Wap",
      duration: "2:00:16"
    },
    {
      thumbnail: "movie-xyz-.png",
      title: "Stream Wap",
      duration: "2:00:16"
    },
    {
      thumbnail: "sanddust2.jpg",
      title: "Stream Wap",
      duration: "2:00:16"
    },
    {
      thumbnail: "movie-abc.png",
      title: "Stream Wap",
      duration: "2:00:16"
    },
    {
      thumbnail: "movie-xyz-.png",
      title: "Stream Wap",
      duration: "2:00:16"
    }
  ];
  const design = (
    <div>
      <div>
        <h1 className="text-white text-3xl mb-4">Trending Movies</h1>
        <Slider data={data} />
      </div>
    </div>
  );
  return design;
}

export default Index;
