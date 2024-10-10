import {
  Form
} from "../../tailwind";

const Index = ()=>{
  const fields = [
    {
      component: "input",
      props: {
        name: "fullname",
        placeholder: "Your name"
      }
    },
    {
      component: "input",
      props: {
        name: "mobile",
        placeholder: "Mobile",
        type: "number"
      }
    },
    {
      component: "email",
      props: {
        name: "email",
        placeholder: "Email"
      }
    },
    {
      component: "input",
      props: {
        name: "message",
        placeholder: "Message",
        textarea: true
      }
    },
  ];
  const design = (
    <div>
      <Form fields={fields} />
    </div>
  );
  return design;
}

export default Index;
