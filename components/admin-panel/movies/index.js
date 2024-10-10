import {
  Dialog,
  Form
} from "../../../tailwind";


const Index = ()=>{
 
 

  const onSubmit = async (values)=>{
    console.log(values);
   
  }

  const MovieForm = ()=>{
    const design = (
      <div>
        <h1 className="text-left text-2xl font-bold mb-4">New Movie</h1>
        <Form  onSubmit={onSubmit} />
      </div>
    );
    return design;
  }

  const design = (
    <div>
      <Dialog>
        <MovieForm />
      </Dialog>
    </div>
  );
  return design;
}

export default Index;
