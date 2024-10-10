import PropTypes from 'prop-types';
import {
  Icon
} from "../../tailwind";

const Index = ({iconClass="text-white"})=>{
  const design = (
    <div>
      <div className="flex gap-2 items-center">
        <Icon outline={true} className={iconClass}>play_circle</Icon>
        <h1 className="text-red-500 font-bold text-xl">Streamwap</h1>
      </div>
    </div>
  );
  return design;
}
Index.propTypes = {
  iconClass: PropTypes.string,
}

export default Index;
