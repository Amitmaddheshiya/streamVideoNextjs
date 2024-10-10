
import PropTypes from 'prop-types';


// pages/admin-panel/movies.js
// pages/admin-panel/movies.js
const Index = ({ children }) => {
  return (
      <div>
          <h1>Movies Page</h1>
          {children}  {/* Agar aap yahan kuch content pass kar rahe hain to isko rakhein */}
      </div>
  );
};




Index.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Index;






