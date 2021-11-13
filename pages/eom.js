export const EOM = ({ employee }) => {
  return (
    <div className='page-container'>
      <div>
        <h1>Employee Of The Month</h1>
      </div>
    </div>
  );
};

export const getServerSideProps = async pageContext => {

};

export default EOM;